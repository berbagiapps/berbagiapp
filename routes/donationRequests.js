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



router.post(
  "/",
  authenticateUser,
  upload.array("photos", 5), // max 5 foto
  async (req, res) => {
    const requestorFirebaseId = req.user.id;

    const {
      requestorName,
      locationDescription,
      detailBarang,
      alasanDonasi,
      latitude,
      longitude,
      description,
      itemType,
      itemWeight,
      donationType,
      weightUnit,
      expiredAt
    } = req.body;

    const files = req.files || [];

    console.log("BODY:", req.body);
    console.log("FILES:", files);

    // Validasi
    if (!requestorName || !locationDescription || !description || !itemType) {
      return res.status(400).json({
        message: "Seluruh field wajib diisi.",
      });
    }

    try {
      const newDonationRequest = await prisma.donationRequest.create({
        data: {
          requestorFirebaseId,
          requestorName,
          expiredAt: expiredAt ? new Date(`${expiredAt}T00:00:00Z`) : null, alasanDonasi,
          detailBarang,
          locationDescription,
          latitude: latitude ? parseFloat(latitude) : null,
          longitude: longitude ? parseFloat(longitude) : null,
          description,
          itemType,
          itemWeight: itemWeight ? parseFloat(itemWeight) : null,
          weightUnit,
          donationType,
          status: "OPEN",

          // 🔥 relasi foto
          photoDonations: {
            create: files.map((file) => ({
              imageFile: `${req.protocol}://${req.get("host")}/${file.path}`
            })),
          },
        },
        include: {
          photoDonations: true,
        },
      });
      console.log(req.body);

      res.status(201).json({
        message: "Permintaan donasi berhasil dibuat!",
        data: newDonationRequest,
      });
    } catch (error) {
      console.log(error);
      console.error("ERROR:", error);
      res.status(500).json({
        message: "Terjadi kesalahan pada server.",
      });
    }
  }
);
// router.post("/", authenticateUser, async (req, res) => {
//   // Ambil ID user dari token JWT yang sudah divalidasi oleh middleware
//   const requestorFirebaseId = req.user.id;

//   // Ambil data dari body request
//   const {
//     requestorName,
//     locationDescription,
//     latitude,
//     longitude,
//     description,
//     itemType,
//     itemWeight,
//     weightUnit,
//   } = req.body;
//   console.log("Data yang diterima:", req.body);
//   console.log(req.body);
//   // Validasi input dasar
//   if (!requestorName || !locationDescription || !description || !itemType) {
//     return res.status(400).send({
//       message: "Seluruh field wajib diisi.",
//     });
//   }

//   try {
//     // Buat data baru di database menggunakan Prisma
//     const newDonationRequest = await prisma.donationRequest.create({
//       data: {
//         requestorFirebaseId, // Diambil dari token
//         requestorName,
//         locationDescription,
//         latitude,
//         longitude,
//         description,
//         itemType,
//         itemWeight,
//         weightUnit,
//         status: "OPEN", // Status awal selalu OPEN
//       },
//     });

//     // Kirim respons sukses
//     res.status(201).json({
//       message: "Permintaan donasi berhasil dibuat!",
//       data: newDonationRequest,
//     });
//   } catch (error) {
//     console.error("Gagal membuat permintaan donasi:", error);
//     res.status(500).send({ message: "Terjadi kesalahan pada server." });
//   }
// });

// Anda bisa menambahkan rute lain di sini, misalnya untuk GET semua request
// router.get("/", ...);
/**
 * @route   Get /donation-requests
 * @desc    Mengembalikan semua permintaan donasi barang
 * @access  Public 
 */
router.get("/", async (req, res) => {
  const search = req.query.search || "";
  const category = req.query.category || "";

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const offset = (page - 1) * limit;

  try {
    const whereCondition = {
      AND: [
        // 🔥 STATUS FIX (OPEN OR REQUESTED)
        {
          OR: [
            { status: "OPEN" },
            { status: "REQUESTED" },
          ],
        },
        category?{
          donationType:category
        }:{},

        // 🔍 SEARCH OPTIONAL
        search
          ? {
            OR: [
              {
                requestorName: {
                  contains: search,
                  mode: "insensitive",
                },
              },
              {
                locationDescription: {
                  contains: search,
                  mode: "insensitive",
                },
              },
              {
                status:{
                   contains: search,
                  mode: "insensitive",

                }
              },
              {
                itemType: {
                  contains: search,
                  mode: "insensitive",
                },
              },
              {
                description: {
                  contains: search,
                  mode: "insensitive",
                },
              },
            ],
          }
          : {},
      ],
    };

    const [data, total] = await prisma.$transaction([
      prisma.donationRequest.findMany({
        where: whereCondition,
        orderBy: { createdAt: "desc" },
        skip: offset,
        take: limit,
      }),

      prisma.donationRequest.count({
        where: whereCondition,
      }),
    ]);

    return res.json({
      message: "Success",
      data,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
});
router.get("/get/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const donationRequests = await prisma.donationRequest.findUnique({
      where: {
        id: id,
      },
      include: {
        photoDonations: true, // 🔥 INI WAJIB
      },
    });

    res.status(200).json({
      message: "success",
      data: donationRequests,
    });
  } catch (error) {
    console.error("Gagal Get /donation-requests/id:", error);
    res.status(500).send({ message: "Terjadi kesalahan pada server." });
  }
});

router.post("/set-to-confirmed/:id", authenticateUser, async (req, res) => {
  try {
    const { id } = req.params;

    // 🔍 Validasi basic
    if (!id || typeof id !== "string") {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    // 🔥 Update status
    const donationRequest = await prisma.donationRequest.update({
      where: {
        id: id, // ✅ STRING (sesuai schema cuid)
      },
      data: {
        status: "CONFIRMED", // ✅ pakai enum Prisma
      },
    });

    return res.json(donationRequest);
  } catch (e) {
    console.error("ERROR:", e);

    // ❌ Data tidak ditemukan
    if (e.code === "P2025") {
      return res.status(404).json({
        error: "Donation request not found",
      });
    }

    // ❌ Validation error
    if (e.name === "PrismaClientValidationError") {
      return res.status(400).json({
        error: "Validation error",
        detail: e.message,
      });
    }

    // ❌ Default error
    return res.status(500).json({
      error: "Internal server error",
      detail: e.message,
    });
  }
});

router.get("/requested", authenticateUser, async (req, res) => {
  const userId = req.user.id;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  try {
    const [data, total] = await prisma.$transaction([
      prisma.donationRequestment.findMany({
        where: {
          OR: [
            {
              requestorId: userId,
            },
            {
              donationRequest: {
                is: {
                  requestorFirebaseId: userId,
                },
              },
            },
          ],
        },
        include: {
          donationRequest: {
            include: {
              photoDonations: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
        skip: offset,
        take: limit,
      }),

      prisma.donationRequestment.count({
        where: {
          OR: [
            {
              requestorId: userId,
            },
            {
              donationRequest: {
                is: {
                  requestorFirebaseId: userId,
                },
              },
            },
          ],
        },
      }),
    ]);




    return res.status(200).json({
      message: "",
      data: data,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Gagal Get /donation-requests:", error);
    return res
      .status(500)
      .send({ message: "Terjadi kesalahan pada server." });
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
          OR: [
            { status: "OPEN" },
            { status: "REQUESTED" },

          ] // Hanya ambil yang masih OPEN
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