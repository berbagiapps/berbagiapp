var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const { token } = require("morgan");
// const db = require("./firebase");

router.get("/user", function (req, res, next) {
  res.send("respond with a user resource");
});

router.post("/login", function (req, res, next) {
  const { email, password } = req.body;

  res.json({
    status: "success",
    message: "Login successful",
    data: {
      id: 123,
      name: "dummy-name",
      email,
      token: "fake-jwt-token", // This should be replaced with a real JWT token
    },
  });
});

router.post("/register", async (req, res) => {
  console.log("running register endpoint");
  try {
    const { username, email, password } = req.body;

    console.log("Received registration data:", req.body);

    // Hash password
    //const hashedPassword = await bcrypt.hash(password, 10);

    res.status(201).json({
      message: "User registration successful",
      user: {
        username,
        email,
        password,
        //hashedPassword, // Include hashed password for confirmation
      },
    });

    // Save user to Firestore
    // const userRef = db.collection("users").doc(email); // Use email as document ID
    // await userRef.set({
    //   username,
    //   email,
    //   password: hashedPassword,
    //   createdAt: new Date(),
    // });

    //res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user" });
  }
});
// {
//     "username": "testuser",
//     "email": "test@example.com",
//     "password": "securepassword"
// }

module.exports = router;
