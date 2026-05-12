// 2. BUAT FILE BARU: routes/donationFulfillments.js

var express = require("express");
var router = express.Router();
// Mundur satu tingkat keluar dari folder 'routes', lalu masuk ke 'src/generated/client'
const { PrismaClient } = require('../src/generated/client'); const prisma = new PrismaClient();
const authenticateUser = require("../middleware/authMiddleware");
const requireQueryParams = require("../middleware/requireQueryParams.ts");

/**
 * @route   POST /fulfillments
 * @desc    Membuat/mengirim donasi untuk sebuah permintaan (sebagai donatur)
 * @access  Private (Harus login)
 */
router.post("/", authenticateUser, async (req, res) => {
  const donorFirebaseId = req.user.id;
  const {
    donationRequestId,
    donorName,
    donorRequestFirebaseId,

    donorNotes,
    latitude,
    longitude,
    address,
    city,
  } = req.body;
  console.log("ID dari body:", donationRequestId);
  console.log(req.body);
  // Validasi input dasar
  if (!donationRequestId || !donorName) {
    console.log("Data dari body:", req.body);
    return res.status(400).send({
      message: "Field donationRequestId dan donorName wajib diisi.",
    });
  }
  try {
    console.log("Memulai transaksi untuk donationRequestId:", donationRequestId);


    await prisma.$transaction(async (tx) => {

      // Langkah 1: Cek dulu status permintaan donasi yang dituju
      const newFulfillment = await tx.donationFulfillment.create({
        data: {
          donorFirebaseId,
          donorRequestFirebaseId,
          donorName,
          donorNotes,
          donationRequestId, // Menghubungkan ke permintaan
          latitude,
          longitude,
          address,
          city
        },
      });
      console.log(newFulfillment);
      res.status(201).json({
        message: "Donasi berhasil dikirim! Terima kasih atas kebaikan Anda.",
        data: newFulfillment,
      });
    });


  } catch (error) {
    console.error("Gagal mengirim donasi:", error);
    if (
      error.message.includes("tidak ditemukan") ||
      error.message.includes("tidak lagi dibuka")
    ) {
      console.log("Error spesifik:", error.message);
      return res.status(400).send({ message: error.message });
    }
    res.status(500).send({ message: "Terjadi kesalahan pada server." });
  }
});



router.post("/set-to-fulfilled", authenticateUser, async (req, res) => {
  // Ambil ID donatur dari token JWT
  const donorFirebaseId = req.user.id;

  // Ambil data dari body request
  const {
    donationRequestId, // ID dari permintaan donasi yang ingin dipenuhi
  } = req.body;
  console.log("ID dari body:", donationRequestId);
  console.log(req.body);
  // Validasi input dasar
  if (!donationRequestId) {
    console.log("Data dari body:", req.body);
    return res.status(400).send({
      message: "Field donationRequestId  wajib diisi.",
    });
  }

  try {
    // Gunakan transaksi Prisma untuk memastikan kedua operasi (create dan update) berhasil atau gagal bersamaan
    const result = await prisma.$transaction(async (tx) => {
      // Langkah 1: Cek dulu status permintaan donasi yang dituju
      const donationRequest = await tx.donationRequest.findUnique({
        where: { id: donationRequestId },
      });
      console.log("ID dari query:", donationRequestId);

      // Jika tidak ditemukan atau sudah tidak OPEN, gagalkan proses
      if (!donationRequest) {
        throw new Error("Permintaan donasi tidak ditemukan.");
      }
      if (donationRequest.status !== "OPEN") {
        throw new Error("Permintaan donasi ini sudah tidak lagi dibuka.");
      }

      // Langkah 2: Buat catatan pemenuhan donasi (fulfillment)


      // Langkah 3: Update status permintaan donasi menjadi 'FULFILLED'
      const updatedRequest = await tx.donationRequest.update({
        where: { id: donationRequestId },
        data: { status: "FULFILLED" },
      });

      return { newFulfillment, updatedRequest };
    });

    // Kirim respons sukses
    res.status(201).json({
      message: "Donasi berhasil ditutup.",
      data: result.newFulfillment,
    });
  } catch (error) {
    // Cek jenis error untuk memberikan respons yang lebih spesifik
    if (
      error.message.includes("tidak ditemukan") ||
      error.message.includes("tidak lagi dibuka")
    ) {
      return res.status(400).send({ message: error.message });
    }
    res.status(500).send({ message: "Terjadi kesalahan pada server." });
  }
});

/**
 * @route   Get /donation-fulfillments
 * @desc    Mengembalikan donasi
 * @access  Public 
 */
router.get("/helping", async (req, res) => {
  try {
    const donorFirebaseId = req.user.id;

    const donationFulfillments = await prisma.donationFulfillment.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        donorFirebaseId: donorFirebaseId, // dummy id for testing
      },
    });

    res.status(200).json({
      message: "",
      data: donationFulfillments,
    });
  } catch (error) {
    console.error("Gagal Get /donation-fulfillments:", error);
    res.status(500).send({ message: "Terjadi kesalahan pada server." + error.message });
  }
});

router.get("/", async (req, res) => {
  //helped
  try {
    const donorFirebaseId = req.user.id;

    const donationFulfillments = await prisma.donationFulfillment.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        donationRequest: {
          requestorFirebaseId: donorFirebaseId,
        }, // dummy id for testing
      },
    });

    res.status(200).json({
      message: "",
      data: donationFulfillments,
    });
  } catch (error) {
    console.error("Gagal Get /donation-fulfillments:", error);
    res.status(500).send({ message: "Terjadi kesalahan pada server." + error.message });
  }
});

/**
 * @route   Get /donation-fulfillments/user
 * @desc    Mengembalikan semua donasi barang berdasarkan user
 * @access  Private (Harus login)
 */
router.get("/user/helping", authenticateUser, async (req, res) => {
  const userId = req.user.id;
  try {

    const donationFulfillments = await prisma.donationFulfillment.findMany({
      where: {
         donorFirebaseId: userId 

        
      },
      orderBy: {
        createdAt: "desc",
      },

      // 🔥 IMPORTANT: include relation
      include: {
        donationRequest: true
      },
    });
    console.log("ID dari token:", userId);
    console.log(donationFulfillments);
    res.status(200).json({
      message: "",
      data: donationFulfillments,
    });
  } catch (error) {
    console.error("Gagal Get /donation-fulfillments/user:", error);
    res.status(500).send({ message: "Terjadi kesalahan pada server." + error.message });
  }
});


router.get("/user", authenticateUser, async (req, res) => {
  const userId = req.user.id;
  try {

    const donationFulfillments = await prisma.donationFulfillment.findMany({
      where: {
         donationRequest: {
          requestorFirebaseId: userId,
        }, // dumm
      },
      orderBy: {
        createdAt: "desc",
      },

      // 🔥 IMPORTANT: include relation
      include: {
        donationRequest: true
      },
    });
    console.log("ID dari token:", userId);
    console.log(donationFulfillments);
    res.status(200).json({
      message: "",
      data: donationFulfillments,
    });
  } catch (error) {
    console.error("Gagal Get /donation-fulfillments/user:", error);
    res.status(500).send({ message: "Terjadi kesalahan pada server." + error.message });
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
      res.status(500).send({ message: "Terjadi kesalahan pada server." + error.message });
    }
  });


module.exports = router;
