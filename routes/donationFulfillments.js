// 2. BUAT FILE BARU: routes/donationFulfillments.js

var express = require("express");
var router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const authenticateUser = require("../middleware/authMiddleware");
const requireQueryParams = require("../middleware/requireQueryParams.ts");

/**
 * @route   POST /fulfillments
 * @desc    Membuat/mengirim donasi untuk sebuah permintaan (sebagai donatur)
 * @access  Private (Harus login)
 */
router.post("/", authenticateUser, async (req, res) => {
  // Ambil ID donatur dari token JWT
  const donorFirebaseId = req.user.id;

  // Ambil data dari body request
  const {
    donationRequestId, // ID dari permintaan donasi yang ingin dipenuhi
    donorName,
    donorNotes,
  } = req.body;

  // Validasi input dasar
  if (!donationRequestId || !donorName) {
    return res.status(400).send({
      message: "Field donationRequestId dan donorName wajib diisi.",
    });
  }

  try {
    // Gunakan transaksi Prisma untuk memastikan kedua operasi (create dan update) berhasil atau gagal bersamaan
    const result = await prisma.$transaction(async (tx) => {
      // Langkah 1: Cek dulu status permintaan donasi yang dituju
      const donationRequest = await tx.donationRequest.findUnique({
        where: { id: donationRequestId },
      });

      // Jika tidak ditemukan atau sudah tidak OPEN, gagalkan proses
      if (!donationRequest) {
        throw new Error("Permintaan donasi tidak ditemukan.");
      }
      if (donationRequest.status !== "OPEN") {
        throw new Error("Permintaan donasi ini sudah tidak lagi dibuka.");
      }

      // Langkah 2: Buat catatan pemenuhan donasi (fulfillment)
      const newFulfillment = await tx.donationFulfillment.create({
        data: {
          donorFirebaseId,
          donorName,
          donorNotes,
          donationRequestId, // Menghubungkan ke permintaan
        },
      });

      // Langkah 3: Update status permintaan donasi menjadi 'FULFILLED'
      const updatedRequest = await tx.donationRequest.update({
        where: { id: donationRequestId },
        data: { status: "FULFILLED" },
      });

      return { newFulfillment, updatedRequest };
    });

    // Kirim respons sukses
    res.status(201).json({
      message: "Donasi berhasil dikirim! Terima kasih atas kebaikan Anda.",
      data: result.newFulfillment,
    });
  } catch (error) {
    console.error("Gagal mengirim donasi:", error);
    // Cek jenis error untuk memberikan respons yang lebih spesifik
    if (
      error.message.includes("tidak ditemukan") ||
      error.message.includes("tidak lagi dibuka")
    ) {
      return res.status(404).send({ message: error.message });
    }
    res.status(500).send({ message: "Terjadi kesalahan pada server." });
  }
});

/**
 * @route   Get /donation-fulfillments
 * @desc    Mengembalikan donasi
 * @access  Public 
 */
router.get("/", async (req, res) => {
  try {
    const donationFulfillments = await prisma.donationFulfillment.findMany();

    res.status(200).json({
      message: "",
      data: donationFulfillments,
    });
  } catch (error) {
    console.error("Gagal Get /donation-fulfillments:", error);
    res.status(500).send({ message: "Terjadi kesalahan pada server."+ error.message });
  }
});

/**
 * @route   Get /donation-fulfillments/user
 * @desc    Mengembalikan semua donasi barang berdasarkan user
 * @access  Private (Harus login)
 */
router.get("/user", authenticateUser ,async (req, res) => {
  const userId = req.user.id;
  // const userId = "SJFRBQUF7pXxGLhYUtzT"; // dummy id for testing

  try {
    const donationFulfillments = await prisma.donationFulfillment.findMany({
      where: {
        donorFirebaseId: userId,
      },
    });

    res.status(200).json({
      message: "",
      data: donationFulfillments,
    });
  } catch (error) {
    console.error("Gagal Get /donation-fulfillments/user:", error);
    res.status(500).send({ message: "Terjadi kesalahan pada server."+ error.message });
  }
});

router.get("/by-donation-request", requireQueryParams("donationRequestId"), 
async (req, res) => {
  const { donationRequestId } = req.query;
  // const donationRequestId = "SJFRBQUF7pXxGLhYUtzT"; // dummy id for testing

  try {
    const donationFulfillments = await prisma.donationFulfillment.findMany({
      where: {
        donationRequestId,
      },
    });

    res.status(200).json({
      message: "",
      data: donationFulfillments,
    });
  } catch (error) {
    console.error("Gagal Get /donation-fulfillments/user:", error);
    res.status(500).send({ message: "Terjadi kesalahan pada server."+ error.message });
  }
});


module.exports = router;
