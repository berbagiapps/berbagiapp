var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
// const db = require("./firebase");

router.get("/:id", (req, res) => {
  const userId = req.params.id; // Accessing path parameter
  res.json({ message: `User ID: ${userId}` });
});

module.exports = router;
