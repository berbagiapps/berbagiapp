const admin = require("firebase-admin");

/**
 * Kirim push notification ke 1 device
 */
async function sendPushNotification({
  token,
  title,
  body,
  data = {},
}) {
  try {
    const message = {
      token: token,
      notification: {
        title: title,
        body: body,
      },
      data: Object.fromEntries(
        Object.entries(data).map(([key, value]) => [key, String(value)])
      ),
    };

    const response = await admin.messaging().send(message);

    console.log("✅ Notification sent:", response);
    return response;
  } catch (error) {
    console.error("❌ Failed to send notification:", error);
    throw error;
  }
}

module.exports = sendPushNotification;