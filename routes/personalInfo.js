var express = require("express");
var router = express.Router();
const prisma = require("../lib/prisma");
const authenticateUser = require("../middleware/authMiddleware");
const { upload } = require("../middleware/multer");
const { Prisma } = require("@prisma/client");


