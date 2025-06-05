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

// router.get("/users", function (req, res, next) {
//   res.send("respond with a user resource");
// });

router.post("/login", async function (req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ message: "Email and password are required" });
  }

  const querySnapshot = await usersCollection.where("email", "==", email).get();

  if (querySnapshot.empty) {
    return res.status(404).send({ message: "Email not found" });
  }

  const userDoc = querySnapshot.docs[0].data();
  const userId = querySnapshot.docs[0].id;
  console.log("User found:", userDoc);

  const isPasswordValid = await bcrypt.compare(password, userDoc.password);
  if (!isPasswordValid) {
    return res.status(401).send({ message: "Invalid password" });
  }

  // Check if user is active
  if (!userDoc.isActive) {
    return res.status(403).send({
      message: "Account is not active. Please check your email for activation.",
    });
  }

  const { password: hidepassword, ...userWithoutPassword } = userDoc;

  //create a token here
  const token = generateToken({
    id: userId,
    name: userDoc.name,
    email: userDoc.email,
    role: userDoc.role,
  });

  res.status(200).send({
    message: "Login success",
    data: { token, user: { id: userId, ...userWithoutPassword } },
  });
});

router.post("/register", validateRole, async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const querySnapshot = await usersCollection
      .where("email", "==", email)
      .get();

    if (!querySnapshot.empty) {
      //if user exist but not active, send activation email again
      if (querySnapshot?.docs[0]?.data()?.isActive === false) {
        sendActivationEmail(email);
        return res.status(200).send({
          message:
            "User already exists but not active, activation email sent again",
        });
      }

      return res.status(400).send({ message: "Email already exists" });
    }

    // const id = crypto.randomUUID(); // Generate UUID
    //   await usersCollection.doc(id).set(userDoc);

    const hashedPassword = await hashPassword(password);
    const userDoc = {
      name,
      email,
      role,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: false,
    };

    const docRef = await usersCollection.add(userDoc);
    console.log("User created with ID:", docRef.id);

    sendActivationEmail(email);

    const { password: hidepassword, ...userWithoutPassword } = userDoc;
    res.status(201).send({
      message:
        "User created successfully, please activate your account in your email",
      user: userWithoutPassword,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
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
  const baseUrl = process.env.BASE_URL_FRONTEND; // || "http://localhost:3000";
  const urlCallback = baseUrl + "/view/change-password";

  // Generate a unique token for password reset
  const token = crypto.randomBytes(32).toString("hex");

  await tokensCollection.add({
    email,
    token,
    createdAt: new Date(),
    expiresAt: new Date(Date.now() + 3600000), // Token valid for 1 hour
  });

  const result = await sendEmail(
    email,
    "Reset Password",
    `You requested to reset your password. If you did not request this, please ignore this email.\n\n` +
      `To reset your password, please click the link below:\n\n${urlCallback}?email=${email}&token=${token}\n\nThank you!`
  );
  if (!result?.includes("Failed")) {
    return res.status(200).send({ message: result });
  } else {
    return res.status(500).send({ message: result });
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
  const { email, token } = req.query;

  if (!email || !token) {
    return res.status(400).send("❌ Invalid activation link.");
  }

  // Check if the token matches
  const tokenSnapshot = await tokensCollection
    .where("email", "==", email)
    .where("token", "==", token)
    .get();

  if (tokenSnapshot.empty) {
    return res.status(404).send("❌ Invalid or expired token.");
  }

  const tokenDoc = tokenSnapshot.docs[0].data();
  if (new Date(tokenDoc.expiresAt) < new Date()) {
    // Delete all expired tokens
    const expiredTokensSnapshot = await tokensCollection
      .where("expiresAt", "<", new Date())
      .get();

    const batch = db.batch();
    expiredTokensSnapshot.docs.forEach((doc) => {
      batch.delete(doc.ref);
    });
    await batch.commit();

    return res.status(400).send("❌ Token has expired.");
  }

  // Activate the user account
  const userSnapshot = await usersCollection.where("email", "==", email).get();
  if (userSnapshot.empty) {
    return res.status(404).send("❌ User not found.");
  }

  const userDoc = userSnapshot.docs[0];
  const user = userDoc.data();
  if (user.isActive) {
    return res.status(400).send("⚠️ Account is already active.");
  }

  // Update user to active
  await usersCollection.doc(userDoc.id).update({
    isActive: true,
    updatedAt: new Date(),
  });

  res.send("✅ Account activated successfully. You can now log in.");
});

module.exports = router;

//functions
const sendActivationEmail = async (email) => {
  // Send activation email
  const baseUrl = process.env.BASE_URL_BACKEND; // || "http://localhost:3000";
  const urlCallback = baseUrl + "/auth/activate-account";
  const token = crypto.randomBytes(32).toString("hex");
  await tokensCollection.add({
    email,
    token,
    createdAt: new Date(),
    expiresAt: new Date(Date.now() + 3600000), // Token valid for 1 hour
  });
  const result = await sendEmail(
    email,
    "Activate Your Account",
    `Thank you for registering. To activate your account, please click the link below:\n\n` +
      `${urlCallback}?email=${email}&token=${token}\n\n` +
      `If you did not register, please ignore this email.\n\nThank you!`
  );
  if (!result.includes("Failed")) {
    console.log("Activation email sent successfully");
  } else {
    console.error("Failed to send activation email:", result);
  }
};
