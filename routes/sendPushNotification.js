
var express = require("express");
var router = express.Router();
const prisma = require("../lib/prisma");
const authenticateUser = require("../middleware/authMiddleware");
const { upload } = require("../middleware/multer");
const { Prisma } = require("@prisma/client");
const admin = require("firebase-admin");
const adminFirebase = require("./admin");


async function sendPushNotification({
  token,
  userId,
  title,
  body,
  notificationType,
  data = {},
}) {
  console.log("📩 Notification triggered");

  try {
    // =========================
    // VALIDATION
    // =========================
    if (!token) {
      throw new Error("FCM token is required");
    }

    // =========================
    // FIREBASE PAYLOAD
    // =========================
    const message = {
      token,
      notification: {
        title,
        body,
      },

      // Firebase hanya menerima string
      data: {
        notificationType: String(notificationType || ""),
        ...Object.fromEntries(
          Object.entries(data).map(([key, value]) => [
            key,
            String(value),
          ])
        ),
      },
    };

    // =========================
    // SAVE TO DATABASE
    // =========================
    if (notificationType !== "CHAT_MESSAGING") {
      await prisma.notification.create({
        data: {
          notification: body,
          token,
          userid: userId,
          notifType: notificationType,
        },
      });
    }

    // =========================
    // SEND FIREBASE PUSH
    // =========================
    const response = await admin.messaging().send(message);

    console.log("✅ Notification sent:", response);

    return response;
  } catch (error) {
    console.error("❌ Failed to send notification:", error);

    // Optional:
    // hapus token invalid dari database
    if (
      error.code === "messaging/registration-token-not-registered"
    ) {
      console.log("🗑 Removing invalid token:", token);

      // contoh:
      // await prisma.user.update({
      //   where: { id: userId },
      //   data: { fcmToken: null },
      // });
    }

    throw error;
  }
}

module.exports = sendPushNotification;