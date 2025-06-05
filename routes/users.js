var express = require("express");
var router = express.Router();
const authenticateUser = require("../middleware/authMiddleware");
const db = require("../firebase");
const usersCollection = db.collection("users");

router.get("/detail/:id", async (req, res) => {
  const userId = req.params.id; // Accessing path parameter

  try {
    const userDoc = await usersCollection.doc(userId).get();
    if (!userDoc.exists) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send({ data: userDoc.data() });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.get("/me", authenticateUser, async (req, res) => {
  const user = req.user;
  console.log("Authenticated user:", user);
  try {
    const userDoc = await usersCollection.doc(user.id).get();
    if (!userDoc.exists) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send({ data: userDoc.data() });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
