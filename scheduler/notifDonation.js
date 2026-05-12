const cron = require("node-cron");
const { PrismaClient } = require("../src/generated/client");

const prisma = new PrismaClient();

async function sendPushNotification(data) {
  console.log("Send notif:", data);
}

function startScheduler() {
  cron.schedule("* * * * *", async () => {
    console.log("Scheduler jalan tiap 1 menit");

    try {
      // ambil semua user yang punya lokasi
      const users = await prisma.user.findMany({
        where: {
          latitude: { not: null },
          longitude: { not: null },
          tokenFcm: { not: null },
        },
      });

      if (!users.length) {
        console.log("Tidak ada user");
        return;
      }

      for (const user of users) {
        const userLat = Number(user.latitude);
        const userLng = Number(user.longitude);

        const radiusKm = 3;

        const latDelta = radiusKm / 111;

        const lngDelta =
          radiusKm / (111 * Math.cos((userLat * Math.PI) / 180));

        // cari donasi sekitar user
        const donations = await prisma.donationRequest.findMany({
          where: {
            latitude: {
              gte: userLat - latDelta,
              lte: userLat + latDelta,
            },
            longitude: {
              gte: userLng - lngDelta,
              lte: userLng + lngDelta,
            },
          },
        });

        console.log(
          `User ${user.id} menemukan ${donations.length} donasi`
        );

        if (!donations.length) continue;

        await sendPushNotification({
          token: user.tokenFcm,
          userId: user.id,
          title: "Donasi terdekat ditemukan",
          body: `${donations.length} donasi ada di sekitar kamu`,
          notificationType: "DONATION_NEARBY",
        });
      }
    } catch (err) {
      console.error("Scheduler error:", err);
    }
  });
}

module.exports = { startScheduler };