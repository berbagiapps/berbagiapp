// 2. BUAT FILE BARU: routes/donationFulfillments.js

var express = require("express");
var router = express.Router();
// Mundur satu tingkat keluar dari folder 'routes', lalu masuk ke 'src/generated/client'
const { PrismaClient } = require('../src/generated/client');const prisma = new PrismaClient();
const authenticateUser = require("../middleware/authMiddleware");
const requireQueryParams = require("../middleware/requireQueryParams.ts");


router.get("/:id", async (req, res) => {
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