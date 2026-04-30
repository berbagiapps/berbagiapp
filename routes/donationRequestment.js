var express = require("express");
var router = express.Router();
const prisma = require("../lib/prisma");
const authenticateUser = require("../middleware/authMiddleware");
const { upload } = require("../middleware/multer");
const { Prisma } = require("@prisma/client");
/**
 * @route   POST /donation-requests
 * @desc    Membuat permintaan donasi barang baru
 * @access  Private (Harus login)
 */
router.post("/set-to-confirmed/:donationRequestId", authenticateUser, async (req, res) => {
  const donorFirebaseId = req.user.id;
  const { id } = req.params;

  const {
    donationRequestId,
    donorName,
    requestorId,
    reason,
    latitude,
    longitude,
    address,
    city,
  } = req.body;

  if (!donationRequestId || !donorName || !requestorId || !reason) {
    return res.status(400).send({
      message: "Field wajib belum lengkap.",
    });
  }

  try {
    await prisma.donationRequest.update({
      where: { id },
      data: {
        status: "CONFIRMED",
      },
    });
    const result = await prisma.$transaction(async (tx) => {


      return await tx.donationRequestment.create({
        data: {
          donationRequestId,
          donorName,
          requestorId,
          donorFirebaseId,
          reason,
          latitude,
          longitude,
          address,
          city,
        },
      });
    });


    res.status(201).json({
      message: "Donasi berhasil dikirim!",
      data: result,
    });

  } catch (error) {
    console.error("Gagal mengirim donasi:", error);
    res.status(500).send({ message: "Terjadi kesalahan pada server." });
  }
});


module.exports = router;
