module.exports = (io, socket) => {

  socket.on("joinChatRoom", async ({ roomId, userId }) => {
    try {
      if (!roomId || !userId) {
        return socket.emit("chatRoom:error", {
          message: "Room ID and User ID are required"
        });
      }

      // 🔥 Join ke room
      socket.join(roomId);
      console.log(`✅ User ${userId} joined room ${roomId}`);
      socket.emit("chatRoom:joined", { roomId });

      socket.to(roomId).emit("chatRoom:userJoined", {
        userId,
      });

    } catch (error) {
      console.error("❌ joinChatRoom error:", error);

      socket.emit("chatRoom:error", {
        message: "Failed to join chat room"
      });
    }
  });

};