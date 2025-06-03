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
const { send } = require("process");
const usersCollection = db.collection("users");

router.get("/user", function (req, res, next) {
  res.send("respond with a user resource");
});

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
  const isPasswordValid = await bcrypt.compare(password, userDoc.password);
  if (!isPasswordValid) {
    return res.status(401).send({ message: "Invalid password" });
  }

  const { password: hidepassword, ...userWithoutPassword } = userDoc;

  //create a token here if needed
  const token = generateToken({
    id: userDoc.id,
    name: userDoc.name,
    email: userDoc.email,
    role: userDoc.role,
  });

  res.status(200).send({
    message: "Login success",
    data: { token, user: userWithoutPassword },
  });
});

router.post("/register", validateRole, async (req, res) => {
  // console.log("running register endpoint");
  // console.log("Received registration data:", req.body);

  try {
    const { name, email, password, role } = req.body;

    const querySnapshot = await usersCollection
      .where("email", "==", email)
      .get();

    if (!querySnapshot.empty) {
      return res.status(400).send({ message: "Email already exists" });
    }

    const id = crypto.randomUUID(); // Generate UUID
    const hashedPassword = await hashPassword(password);
    const userDoc = {
      id,
      name,
      email,
      role,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    console.log("User document to be created:", userDoc);

    await usersCollection.doc(id).set(userDoc);
    const { password: hidepassword, ...userWithoutPassword } = userDoc;
    res.status(201).send({
      message: "User created successfully",
      user: userWithoutPassword,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.post(
  "/forget-password",
  authenticateUser,
  async function (req, res, next) {
    const user = req.user;
    const urlCallback = "http://localhost:5173/change-password";
    const result = sendEmail(
      user.email,
      "Reset Password",
      `Hello ${user.name},\n\nPlease click the link below to reset your password:\n\n${urlCallback}?token=${user.id}\n\nThank you!`
    );
    if (!result.includes("Failed")) {
      return res.status(200).send({ message: result });
    } else {
      return res.status(500).send({ message: result });
    }

    //const { email } = req.body;
  }
);

module.exports = router;
