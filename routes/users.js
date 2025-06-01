var express = require("express");
var router = express.Router();
const authenticateUser = require("../middleware/authMiddleware");
const db = require("../firebase");
const usersCollection = db.collection("users");

router.get("/:id", async (req, res) => {
  const userId = req.params.id; // Accessing path parameter

  try {
    const userDoc = await usersCollection.doc(userId).get();
    if (!userDoc.exists) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send({ user: userDoc.data() });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.get("/me", authenticateUser, async (req, res) => {
  const user = req.user;

  try {
    const userDoc = await usersCollection.doc(user.id).get();
    if (!userDoc.exists) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send({ user: userDoc.data() });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
