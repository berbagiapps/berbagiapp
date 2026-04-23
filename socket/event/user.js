const onlineUsers = new Map(); // userId -> Set of socketIds

module.exports = (io, socket) => {

  // 🔥 USER ONLINE
  socket.on("user_online", ({ userId }) => {
    if (!userId) return;

    // simpan mapping
    if (!onlineUsers.has(userId)) {
      onlineUsers.set(userId, new Set());
    }

    onlineUsers.get(userId).add(socket.id);

    console.log(`✅ ${userId} online (socket: ${socket.id})`);

    // broadcast ke semua kecuali diri sendiri
    socket.broadcast.emit("user_status", {
      userId,
      status: "online",
    });
  });

  // 🔥 HANDLE DISCONNECT (INI YANG PALING PENTING)
  socket.on("disconnect", () => {
    console.log(`❌ Socket disconnected: ${socket.id}`);

    for (let [userId, sockets] of onlineUsers.entries()) {
      if (sockets.has(socket.id)) {
        sockets.delete(socket.id);

        // kalau sudah tidak ada socket lagi → offline
        if (sockets.size === 0) {
          onlineUsers.delete(userId);

          io.emit("user_status", {
            userId,
            status: "offline",
          });

          console.log(`🔴 ${userId} offline`);
        }
      }
    }
  });

};