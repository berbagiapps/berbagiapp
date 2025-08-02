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

  // Validasi input dasar
  if (!requestorName || !locationDescription || !description || !itemType) {
    return res.status(400).send({
      message: "Field requestorName, locationDescription, description, dan itemType wajib diisi.",
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

module.exports = router;