const sendPushNotification = require("../../routes/sendPushNotification");
var express = require("express");
var router = express.Router();
const prisma = require("../../lib/prisma");
const authenticateUser = require("../../middleware/authMiddleware");
const { upload } = require("../../middleware/multer");
const { Prisma } = require("@prisma/client");

module.exports = (io, socket) => {
  socket.on("notif:donate", async ({ latitude, longitude, userId }) => {

      console.log(userId);

    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });
      console.log(user);
      if (!user) return;
       
      const userLat = latitude;
      const userLng = longitude;

      const radiusKm = 10;
      const latDelta = radiusKm / 111;
      const lngDelta = radiusKm / (111 * Math.cos(userLat * Math.PI / 180));

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
      console.log(donations)

      if (!donations.length) return;

      await sendPushNotification({
        token: user.tokenFcm,
        userId: user.id,
        title: "Donasi terdekat ditemukan",
        body: `${donations.length} donasi ada di sekitar kamu`,
        notificationType: "DONATION_NEARBY",
      });

    } catch (err) {
      console.error("Socket notification error:", err);
    }
  });


  socket.on("location:update", async ({ latitude, longitude, userId }) => {

      console.log(userId);

    try {
      const user = await prisma.user.update({
        where: { id: userId },
        data:{
          latitude: latitude,
          longitude:longitude
        }
      });
  

    } catch (err) {
      console.error("Socket notification error:", err);
    }
  });
};