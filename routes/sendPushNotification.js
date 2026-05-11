
async function sendPushNotification({
  token,
  userId,
  title,
  body,
  notificationType, // 👈 ENUM DI SINI
  data = {},
}) {
  console.log("📩 Notification triggered");

  try {
    // =========================
    // 1. FIREBASE PAYLOAD
    // =========================
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

    // =========================
    // 2. SAVE TO DATABASE
    // =========================
    await prisma.notification.create({
      data: {
        notification: body,
        token: token,
        userid: userId,
        notifType: notificationType, // 👈 ENUM DIPAKAI DI SINI
      },
    });

    // =========================
    // 3. SEND FIREBASE PUSH
    // =========================
    const response = await admin.messaging().send(message);

    console.log("✅ Notification sent:", response);

    return response;
  } catch (error) {
    console.error("❌ Failed to send notification:", error);
    throw error;
  }
}

module.exports = sendPushNotification;