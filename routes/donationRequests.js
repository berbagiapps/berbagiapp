var express = require("express");
var router = express.Router();
const prisma = require("../lib/prisma");
const authenticateUser = require("../middleware/authMiddleware");

/**
 * @route   POST /donation-requests
 * @desc    Membuat permintaan donasi barang baru
 * @access  Private (Harus login)
 */
router.post("/", authenticateUser, async (req, res) => {
  // Ambil ID user dari token JWT yang sudah divalidasi oleh middleware
  const requestorFirebaseId = req.user.id;

  // Ambil data dari body request
  const {
    requestorName,
    locationDescription,
    latitude,
    longitude,
    description,
    itemType,
    itemWeight,
    weightUnit,
  } = req.body;
  console.log("Data yang diterima:", req.body);
  console.log(req.body);
  // Validasi input dasar
  if (!requestorName || !locationDescription || !description || !itemType) {
    return res.status(400).send({
      message: "Seluruh field wajib diisi.",
    });
  }

  try {
    // Buat data baru di database menggunakan Prisma
    const newDonationRequest = await prisma.donationRequest.create({
      data: {
        requestorFirebaseId, // Diambil dari token
        requestorName,
        locationDescription,
        latitude,
        longitude,
        description,
        itemType,
        itemWeight,
        weightUnit,
        status: "OPEN", // Status awal selalu OPEN
      },
    });

    // Kirim respons sukses
    res.status(201).json({
      message: "Permintaan donasi berhasil dibuat!",
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
 * @route   Get /donation-requests
 * @desc    Mengembalikan semua permintaan donasi barang
 * @access  Public 
 */
router.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || 1; // Halaman default 1
  const limit = parseInt(req.query.limit) || 10; // Jumlah item per halaman default 10
  const offset = (page - 1) * limit;
  try {
    const [data, total] = await prisma.$transaction([
      prisma.donationRequest.findMany({
        where: {
          status: "OPEN", // Hanya ambil yang masih OPEN
        },
        orderBy: {
          createdAt: "desc",
        },
        skip: offset,
        take: limit,
      }),
      prisma.donationRequest.count({
        where: {
          status: "OPEN",
        },
      }),
    ]);
    res.status(200).json({
      message: "",
      data,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
    if (page < 1 || limit < 1) {
      return res.status(400).json({ message: 'Invalid pagination' });
    }
  } catch (error) {
    console.error("Gagal Get /donation-requests:", error);
    res.status(500).send({ message: "Terjadi kesalahan pada server." });
  }

});

router.get("/get/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const donationRequests = await prisma.donationRequest.findUnique({
      where: {
        id: id,
      },
    });

    res.status(200).json({
      message: "",
      data: donationRequests,
    });
  } catch (error) {
    console.error("Gagal Get /donation-requests/id:", error);
    res.status(500).send({ message: "Terjadi kesalahan pada server." });
  }


});

router.get("/user", authenticateUser, async (req, res) => {
  const userId = req.user.id;
   const page = parseInt(req.query.page) || 1; // Halaman default 1
  const limit = parseInt(req.query.limit) || 10; // Jumlah item per halaman default 10
  const offset = (page - 1) * limit;
  try {
    const [data, total] = await prisma.$transaction([
      prisma.donationRequest.findMany({
        where: {
          status: "OPEN", // Hanya ambil yang masih OPEN
        },
        orderBy: {
          createdAt: "desc",
        },
        skip: offset,
        take: limit,
      }),
      prisma.donationRequest.count({
        where: {
          status: "OPEN",
        },
      }),
    ]);
    res.status(200).json({
      message: "",
      data,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
    if (page < 1 || limit < 1) {
      return res.status(400).json({ message: 'Invalid pagination' });
    }
  } catch (error) {
    console.error("Gagal Get /donation-requests:", error);
    res.status(500).send({ message: "Terjadi kesalahan pada server." });
  }

});

module.exports = router;