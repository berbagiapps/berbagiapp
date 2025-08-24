var express = require("express");
var router = express.Router();
const prisma = require("../lib/prisma");
const authenticateUser = require("../middleware/authMiddleware");

/**
 * @route   POST /funddonation-requests
 * @desc    Membuat permintaan donasi uang baru
 * @access  Private (Harus login)
 */
router.post("/", authenticateUser, async (req, res) => {
  // Ambil ID user dari token JWT yang sudah divalidasi oleh middleware
  const requestorFirebaseId = req.user.id;

  // Ambil data dari body request
  const {
    donatorName,
    donatorDateTime,
    amount,
    paymentProcess
  } = req.body;

  // Validasi input dasar
  if (!donatorName || !amount) {
    return res.status(400).send({
      message: "Field donatorName dan amount wajib diisi.",
    });
  }

  try {
    // Buat data baru di database menggunakan Prisma
    const newDonationRequest = await prisma.fundDonationHistory.create({
      data: {
        requestorFirebaseId, // Diambil dari token
        donatorName,
        donatorDateTime,
        amount,
        paymentProcess
      },
    });

    // Tambahkan program untuk mengecek bagaimana pembayaran diproses jika diperlukan
    newDonationRequest.paymentProcess = paymentProcess || "PENDING";

    // Kirim respons sukses
    res.status(201).json({
      message: "Rekaman donasi berhasil dibuat!",
      data: newDonationRequest,
    });
  } catch (error) {
    console.error("Gagal membuat permintaan donasi:", error);
    res.status(500).send({ message: "Terjadi kesalahan pada server." });
  }
});

// Anda bisa menambahkan rute lain di sini, misalnya untuk GET semua request
// router.get("/", ...);
/**
 * @route   Get /funddonation-requests
 * @desc    Mengembalikan semua permintaan donasi uang
 * @access  Public 
 */
router.get("/", async (req, res) => {
  try {
    const donationHistory = await prisma.fundDonationHistory.findMany();

    res.status(200).json({
      message: "",
      data: donationHistory,
    });
  } catch (error) {
    console.error("Gagal Get /funddonation-requests:", error);
    res.status(500).send({ message: "Terjadi kesalahan pada server." });
  }
});

/**
 * @route   Get /funddonation-requests/user
 * @desc    Mengembalikan semua sejarah donasi uang dari user yang sedang login
 * @access  Private (Harus login)
 */
router.get("/user", authenticateUser,async (req, res) => {
  // Ambil ID user dari token JWT yang sudah divalidasi oleh middleware
  const requestorFirebaseId = req.user.id;
  // const requestorFirebaseId = "SJFRBQUF7pXxGLhYUtzT"; // dummy id for testing

  try {
    const donationRequests = await prisma.fundDonationHistory.findMany({
      where: {
        requestorFirebaseId: requestorFirebaseId,
      },
    });

    res.status(200).json({
      message: "",
      data: donationRequests,
    });
  } catch (error) {
    console.error("Gagal Get /funddonation-requests/user:", error);
    res.status(500).send({ message: "Terjadi kesalahan pada server." });
  }
});

module.exports = router;