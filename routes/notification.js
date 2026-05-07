var express = require("express");
var router = express.Router();
const prisma = require("../lib/prisma");
const authenticateUser = require("../middleware/authMiddleware");
const { upload } = require("../middleware/multer");
const { Prisma } = require("@prisma/client");
const sendPushNotification = require("./sendPushNotification");


router.get("/", authenticateUser, async (req, res) => {
    const userid = req.user.id;

    try {
        const notification = await prisma.notification.findMany({
            where: {
                userid: userid,
            },
            
        });

        res.status(200).json({
            message: "success",
            data: notification,
        });
    } catch (error) {
        res.status(400).send({ message: "Data tidak ditemukan." });
    }
});



module.exports = router;
