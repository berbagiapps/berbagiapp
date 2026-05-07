var express = require("express");
var router = express.Router();
const prisma = require("../lib/prisma");
const authenticateUser = require("../middleware/authMiddleware");

/**
 * =========================
 * GET PERSONAL INFO
 * =========================
 */
router.get("/", authenticateUser, async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    console.log((user));
    res.status(200).json({
      message: "Success",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan pada server. " + error.message,
    });
  }
});

/**
 * =========================
 * UPDATE PERSONAL INFO
 * =========================
 */
router.put("/", authenticateUser, async (req, res) => {
  const userId = req.user.id;

  const {
    name,
    email,
    identificationNumber,
    photoKtp,
  } = req.body;

  try {
    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        name,
        email,
        identificationNumber,
        photoKtp,
      },
    });
    console.log(req.body)
    res.status(200).json({
      message: "User berhasil di update",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan pada server. " + error.message,
    });
  }
});

module.exports = router;