module.exports = (io, socket) => {

  // 📩 USER KIRIM PESAN
  socket.on("chat:send", async ({ roomId, senderId, message, clientId }) => {
    console.log("kepanggil ga");
    if (!roomId || !senderId || !message?.trim()) {
      return socket.emit("chat:error", { message: "Invalid data" });
    }

    const now = new Date();

    // 🔥 1. Kirim langsung ke room (optimistic dari server)
    const tempMessage = {
      id: "temp_" + Date.now(),
      roomId,
      senderId,
      content: message.trim(), // ✅ pakai content (sinkron Flutter)
      createdAt: now,
      clientId: clientId || null,
      status: "sent",
    };

    io.to(roomId).emit("chat:receive", tempMessage);

    try {
      // 💾 2. Simpan ke database
      // const savedChat = await prisma.chat.create({
      //   data: {
      //     roomId,
      //     senderId,
      //     content: message.trim(),
      //     readBy: {
      //       connect: { id: senderId },
      //     },
      //   },
      // });

      // 🔥 3. Kirim konfirmasi ke client (untuk replace optimistic)
      // io.to(roomId).emit("chat:confirmed", {
      //   id: savedChat.id,
      //   roomId,
      //   senderId,
      //   clientId: clientId || null,
      //   createdAt: savedChat.createdAt,
      // });

    } catch (error) {
      console.error("❌ Error saving chat:", error);

      socket.emit("chat:error", {
        message: "Failed to save message",
        clientId: clientId || null,
      });
    }
  });

  // 👁️ MARK AS READ
  socket.on("chat:markRead", async ({ roomId, userId }) => {
    if (!roomId || !userId) {
      return socket.emit("chat:error", { message: "Invalid data" });
    }

    try {
      await prisma.chat.updateMany({
        where: {
          roomId,
          NOT: {
            readBy: {
              some: { id: userId },
            },
          },
        },
        data: {
          readBy: {
            connect: { id: userId },
          },
        },
      });

      io.to(roomId).emit("chat:markedRead", { userId });

    } catch (error) {
      console.error("❌ Error marking chat as read:", error);

      socket.emit("chat:error", {
        message: "Failed to mark messages as read",
      });
    }
  });

};