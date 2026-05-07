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
router.post("/set-to-requested/:id", authenticateUser, async (req, res) => {
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
  console.log(id)
  if (!donationRequestId || !donorName || !requestorId || !reason) {
    return res.status(400).send({
      message: "Field wajib belum lengkap.",
    });
  }

  try {
    const existingRequest = await prisma.donationRequestment.findFirst({
      where: {
        donationRequestId: id,
        requestorId: donorFirebaseId
        // requestorFirebaseId: donorFirebaseId,
      },
    });
    console.log("existing request ")
    console.log(existingRequest)
    console.log(id);

    if (existingRequest) {
      return res.status(404).json({
        message: "Data request donasi sudah ada pilih donasi lain",
      });
    }
    await prisma.donationRequest.update({
      where: { id },
      data: {
        status: "REQUESTED",
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
    res.status(500).send({ message: "Terjadi kesalahan pada server." });
  }
});



router.post("/set-to-confirmed/:donationRequestId/:requestmentId", authenticateUser, async (req, res) => {
  const donorFirebaseId = req.user.id;
  const { donationRequestId } = req.params;
  const { requestmentId } = req.params;


  console.log(donationRequestId)
  console.log(requestmentId)

  console.log(donorFirebaseId)
  try {


    await prisma.$transaction(async (tx) => {
      // 1. update donationRequestment
      await tx.donationRequestment.updateMany({
        where: {
          id: requestmentId,
        },
        data: {
          status: "CONFIRMED",
        },
      });

      // 2. update donationRequest
      await tx.donationRequest.update({
        where: {
          id: donationRequestId,
        },
        data: {
          status: "CONFIRMED",
        },
      });
    });



    res.status(201).json({
      message: "Donasi berhasil dikirim!",
    });

  } catch (error) {
    res.status(500).send({ message: "Terjadi kesalahan pada server." });
  }
});





module.exports = router;
