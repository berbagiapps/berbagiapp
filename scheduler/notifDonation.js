const cron = require("node-cron");
const { PrismaClient } = require('../src/generated/client');
 const prisma = new PrismaClient();

function startScheduler() {
//   cron.schedule("* * * * *", () => {
//     console.log("Scheduler jalan tiap 1 menit");
//       try {
//           const user =  prisma.user.findMany({});
//           console.log(user);
//           if (!user) return;
           
//           const userLat = latitude;
//           const userLng = longitude;
    
//           const radiusKm = 10;
//           const latDelta = radiusKm / 111;
//           const lngDelta = radiusKm / (111 * Math.cos(userLat * Math.PI / 180));
    
//           const donations =  prisma.donationRequest.findMany({
//             where: {
//               latitude: {
//                 gte: userLat - latDelta,
//                 lte: userLat + latDelta,
//               },
//               longitude: {
//                 gte: userLng - lngDelta,
//                 lte: userLng + lngDelta,
//               },
//             },
//           });
//           console.log(donations)
    
//           if (!donations.length) return;
    
//            sendPushNotification({
//             token: user.tokenFcm,
//             userId: user.id,
//             title: "Donasi terdekat ditemukan",
//             body: `${donations.length} donasi ada di sekitar kamu`,
//             notificationType: "DONATION_NEARBY",
//           });
    
//         } catch (err) {
//           console.error("Socket notification error:", err);
//         }
//   });
}

module.exports = { startScheduler };