var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const { token } = require("morgan");
const db = require("../firebase");
const { hashPassword } = require("../lib/bcrypt");
const { validateRole } = require("../lib/validate");
const crypto = require("crypto");
const { generateToken } = require("../lib/jsonWebToken");
const authenticateUser = require("../middleware/authMiddleware");
// const { send } = require("process");
const usersCollection = db.collection("users");
const tokensCollection = db.collection("tokens");
const { sendEmail } = require("../lib/sendEmail");
const e = require("express");
const prisma = require("../lib/prisma");
// const { use } = require("react");

// router.get("/users", function (req, res, next) {
//   res.send("respond with a user resource");
// });

router.get("/getUser", authenticateUser, async (req, res) => {
  try {
    const userId = req.user.id; // 🔥 dari middleware

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    return res.status(200).json({
      message: "User fetched",
      data: user,
    });

  } catch (error) {
    console.error("GET USER ERROR:", error);
    return res.status(500).json({
      message: "Failed to fetch user",
    });
  }
});
router.post("/updateToken", authenticateUser, async (req, res) => {
  try {
    const userId = req.user.id;
    const { tokenFcm } = req.body;

    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        tokenFcm: tokenFcm,
      },
    });

    return res.status(200).json({
      message: "Token updated",
      data: user,
    });

  } catch (error) {
    console.error("UPDATE TOKEN ERROR:", error);

    return res.status(500).json({
      message: "Failed to update token",
    });
  }
});

router.put("/profile", authenticateUser, async (req, res) => {
  try {
    const userId = req.user.id;

    const {
      name,
      email,
      identificationNumber,
    } = req.body;

    // 🔒 validasi minimal
    if (!name && !email && !identificationNumber) {
      return res.status(400).json({
        message: "No data to update",
      });
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        ...(name && { name }),
        ...(email && { email }),
        ...(identificationNumber && { identificationNumber }),
      },
    });

    return res.status(200).json({
      message: "Profile updated",
      data: updatedUser,
    });

  } catch (error) {
    console.error("UPDATE PROFILE ERROR:", error);

    // 🔥 handle email duplicate
    if (error.code === "P2002") {
      return res.status(400).json({
        message: "Email already used",
      });
    }

    return res.status(500).json({
      message: "Failed to update profile",
    });
  }
}); router.post("/login", async function (req, res, next) {
  const { email, password, tokenFcm } = req.body;

  if (!email || !password) {
    return res.status(401).send({ message: "Email dan kata sandi wajib diisi" });
  }

  // Normalisasi: Ubah email menjadi huruf kecil semua
  const normalizedEmail = email.toLowerCase().trim();

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: normalizedEmail // Gunakan email yang sudah di-lowercase
      }
    });
    await prisma.user.update({
      where: {
        email: normalizedEmail,
      },
      data: {
        token: tokenFcm,
      },
    });
    if (!user) {
      return res.status(401).send({ message: "Email tidak ditemukan" });
    }

    // ... sisa logic bcrypt dan isActive tetap sama ...
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({ message: "Kata sandi salah" });
    }

    if (!user.isActive) {
      sendActivationEmail(normalizedEmail);
      return res.status(401).send({
        message: "Akun belum aktif. Silakan cek email Anda untuk aktivasi.",
      });
    }

    const { password: hidepassword, ...userWithoutPassword } = user;
    const token = generateToken({
      id: user.id,
      name: user.name,
      email: user.email,
    });

    res.status(200).send({
      message: "Login berhasil",
      data: { token, user: userWithoutPassword },
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: "Terjadi kesalahan pada server" });
  }
});
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, identificationNumber, token } = req.body;


    // 🔍 cek user dulu
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    // ⚠️ kalau user sudah ada
    if (existingUser) {
      if (existingUser.isActive == true) {
        sendActivationEmail(email);
        return res.status(400).send({
          message: "User exists but not active, activation email sent again"
        });
      }

      return res.status(400).send({
        message: "Email already exists"
      });
    }

    // 🔐 hash password
    const hashedPassword = await hashPassword(password);

    // 🆕 create user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        token,
        role: "user",
        identificationNumber,
        password: hashedPassword,
        isActive: false
      }
    });


    // 📧 send activation email
    sendActivationEmail(email);

    const { password: _, ...safeUser } = newUser;

    return res.status(201).send({
      message: "User created, please activate account",
      user: safeUser
    });

  } catch (error) {
    return res.status(500).send({
      message: error.message
    });
  }
});

router.post("/forget-password", async function (req, res, next) {
  const { email } = req.body;
  if (!email) {
    return res.status(400).send({ message: "Email is required" });
  }
  //cek email exists
  const querySnapshot = await usersCollection.where("email", "==", email).get();
  if (querySnapshot.empty) {
    return res.status(404).send({ message: "Email is not registered" });
  }
  const baseUrl = process.env.BASE_URL_FRONTEND;
  // || "http://localhost:3000";
  console.log(baseUrl);
  const urlCallback = baseUrl + "/view/change-password";
  const nodemailer = require("nodemailer");
  let testAccount = await nodemailer.createTestAccount(); // ✅ test akun gratis

  // Generate a unique token for password reset
  const token = crypto.randomBytes(32).toString("hex");
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "gita.refina5@gmail.com",
      pass: "lwvekyptjvzzqkwd", // API Key dari gmail
    },
    tls: {
      rejectUnauthorized: false,
    },
    // logger: true,
    // debug: true,
  });
  await tokensCollection.add({
    email,
    token,
    createdAt: new Date(),
    expiresAt: new Date(Date.now() + 3600000), // Token valid for 1 hour
  });

  try {
    const result = await transporter.sendMail({
      from: "berbagiapps@stem.or.id", // ✅ HARUS valid
      to: email,
      subject: "Reset Password",
      text:
        "Reset Password\n" +
        `You requested to reset your password. If you did not request this, please ignore this email.\n\n` +
        `To reset your password, please click the link below:\n\n${urlCallback}?email=${email}&token=${token}\n\nThank you!`,
    });
    return res.status(200).send({ message: result, token: token });
  } catch (error) {
    console.error("Email send failed:", error);
    res
      .status(500)
      .json({ message: "Failed to send email" + error.toString() });
    return;
  }


});

router.post("/change-password-by-token", async function (req, res, next) {
  try {
    const { email, token, newPassword } = req.body;
    if (!email || !token || !newPassword) {
      return res
        .status(400)
        .send({ message: "Email, token, and new password are required" });
    }

    const querySnapshot = await usersCollection
      .where("email", "==", email)
      .get();
    if (querySnapshot.empty) {
      return res.status(404).send({ message: "Email not found" });
    }

    const tokenSnapshot = await tokensCollection
      .where("email", "==", email)
      .where("token", "==", token)
      .get();
    if (tokenSnapshot.empty) {
      return res.status(404).send({ message: "Invalid or expired token" });
    }

    const tokenDoc = tokenSnapshot.docs[0].data();
    if (new Date(tokenDoc.expiresAt) < new Date()) {
      //delete all expired tokens
      const expiredTokensSnapshot = await tokensCollection
        .where("expiresAt", "<", new Date())
        .get();
      const batch = db.batch();
      expiredTokensSnapshot.docs.forEach((doc) => {
        batch.delete(doc.ref);
      });
      return res.status(400).send({ message: "Token has expired" });
    }

    const userDoc = querySnapshot.docs[0];
    const hashedPassword = await hashPassword(newPassword);

    await userDoc.ref.update({
      password: hashedPassword,
      updatedAt: new Date(),
    });

    res.status(200).send({ message: "Password changed successfully" });
  } catch (error) {
    console.error("Error changing password:", error);
    res.status(500).send({ message: "Internal server error" + error.message });
  }
});

router.get("/activate-account", async (req, res) => {
  try {
    const email = String(req.query.email || "").trim();
    const token = String(req.query.token || "").trim();

    if (!email || !token) {
      return res.status(400).send("❌ Invalid activation link.");
    }

    // 🔍 cari token
    const tokenRecord = await prisma.token.findFirst({
      where: {
        email,
        token
      }
    });

    if (!tokenRecord) {
      return res.status(404).send("❌ Invalid or expired token.");
    }

    // ⏰ cek expired
    if (tokenRecord.expiresAt < new Date()) {
      // delete token expired
      await prisma.token.deleteMany({
        where: { email }
      });

      return res.status(400).send("❌ Token has expired.");
    }

    // 🔍 cari user
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return res.status(404).send("❌ User not found.");
    }

    if (user.isActive) {
      return res.status(400).send("⚠️ Account already active.");
    }

    // ✅ activate user
    await prisma.user.update({
      where: { email },
      data: {
        isActive: true,
        updatedAt: new Date()
      }
    });

    // 🧹 delete token setelah sukses
    await prisma.token.deleteMany({
      where: { email }
    });

    return res.send("✅ Account activated successfully. You can now log in.");

  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal server error");
  }
});



module.exports = router; // ✅ WAJIB
const sendActivationEmail = async (email) => {
  const baseUrl = process.env.BASE_URL_BACKEND;
  const urlCallback = `${baseUrl}/auth/activate-account`;

  const token = crypto.randomBytes(32).toString("hex");

  // ✅ simpan ke prisma (BUKAN firestore)
  await prisma.token.create({
    data: {
      email,
      token,
      expiresAt: new Date(Date.now() + 3600000)
    }
  });

  await sendEmail(
    email,
    "Activate Your Account",
    `Klik link berikut:\n\n${urlCallback}?email=${email}&token=${token}`
  );
};



