const { Server } = require("socket.io");
const chatRoomEvent = require("./event/chatRoom");
const chatEvent = require("./event/chat");
const userEvent = require("./event/user");
const notifEvent = require("./event/notif");


let io;

function initSocket(server) {
  io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    console.log("🟢 Connected:", socket.id);

    // =====================
    // TEST EVENT (WAJIB)
    // =====================
    socket.on("ping", (data) => {
      console.log("📡 ping:", data);
      socket.emit("pong", { ok: true });
    });

    // =====================
    // REGISTER USER
    // =====================
    socket.on("register", ({ userId }) => {
      socket.userId = userId;
      console.log("👤 Registered:", userId);
    });

    // =====================
    // LOAD EVENTS (SAFE)
    // =====================
    try {
      console.log("📦 loading events...");

      chatRoomEvent(io, socket);
      chatEvent(io, socket);
      userEvent(io, socket);
      notifEvent(io,socket);

      console.log("✅ events loaded");
    } catch (err) {
      console.error("❌ EVENT LOAD ERROR:", err);
    }

    // =====================
    // DISCONNECT
    // =====================
    socket.on("disconnect", () => {
      console.log("🔴 Disconnected:", socket.id);
    });
  });

  return io;
}

function getIO() {
  if (!io) throw new Error("Socket not initialized");
  return io;
}

module.exports = { initSocket, getIO };