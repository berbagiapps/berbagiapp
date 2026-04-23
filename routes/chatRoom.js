var express = require("express");
var router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const authenticateUser = require("../middleware/authMiddleware");

// CREATE / GET CHAT ROOM
router.post("/create", authenticateUser, async (req, res) => {
  try {
    const userId = req.user.id;
    const { otherUserId } = req.body;

    if (!otherUserId) {
      return res.status(400).send({ message: "otherUserId is required" });
    }

    // 1. 🔍 Cari room (FIX: pakai members, bukan participants)
    let room = await prisma.chatRoom.findFirst({
      where: {
        AND: [
          {
            members: {
              some: { userId: userId }
            }
          },
          {
            members: {
              some: { userId: otherUserId }
            }
          }
        ]
      },
      include: {
        members: {
          include: {
            user: true
          }
        }
      }
    });

    // 2. 🆕 Kalau belum ada → buat
    if (!room) {
      room = await prisma.chatRoom.create({
        data: {
          roomId: [userId, otherUserId].sort().join("_"), // anti duplicate
          members: {
            create: [
              { userId: userId },
              { userId: otherUserId }
            ]
          }
        },
        include: {
          members: {
            include: {
              user: true
            }
          }
        }
      });
    }

    // 3. 🔥 FLATTEN (biar Flutter kamu gampang)
    const formattedRoom = {
      id: room.id,
      roomId: room.roomId,
      lastMessage: room.lastMessage,
      participants: room.members.map(m => m.user)
    };

    res.status(200).send({
      message: "Chat room ready",
      data: formattedRoom
    });

  } catch (error) {
    console.error("Error creating chat room:", error);
    res.status(500).send({ message: "Failed to create chat room" });
  }
});

router.post("/send", authenticateUser, async (req, res) => {
  try {
    const senderId = req.user.id;
    const { roomId, message } = req.body;

    // 1. VALIDASI INPUT
    if (!roomId || !message) {
      return res.status(400).json({
        message: "roomId and message are required"
      });
    }

    // 2. CEK ROOM EXIST
    const room = await prisma.chatRoom.findUnique({
      where: { id: roomId }
    });

    if (!room) {
      return res.status(404).json({
        message: "Chat room not found"
      });
    }

    // 3. CREATE MESSAGE
    const chat = await prisma.chat.create({
      data: {
        roomId: room.id,
        senderId,
        message
      },
      include: {
        sender: true
      }
    });

    // 4. UPDATE CHAT ROOM (last message)
    await prisma.chatRoom.update({
      where: { id: room.id },
      data: {
        lastMessage: message,
        updatedAt: new Date()
      }
    });

    // 5. RESPONSE SAFE FORMAT
    return res.status(200).json({
      message: "Message sent",
      data: {
        id: chat.id,
        roomId: chat.roomId,
        message: chat.message,
        sender: chat.sender ?? null,
        createdAt: chat.createdAt
      }
    });

  } catch (error) {
    console.error("SEND MESSAGE ERROR:", error);
    return res.status(500).json({
      message: "Failed to send message"
    });
  }
});
// GET MESSAGES
router.get("/:roomId/messages", authenticateUser, async (req, res) => {
  try {
    const { roomId } = req.params;

    // ⚠️ FIX: field kamu itu roomId, bukan chatRoomId
    const messages = await prisma.chat.findMany({
      where: {
        roomId: roomId
      },
      orderBy: {
        createdAt: "desc"
      },
      include: {
        sender: true
      }
    });

    res.status(200).send({
      message: "Chat messages fetched",
      data: messages
    });

  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).send({ message: "Failed to fetch messages" });
  }
});


router.get("/rooms", authenticateUser, async (req, res) => {
  try {
    const userId = req.user.id;

    // 1. ambil semua room dimana user adalah member
    const rooms = await prisma.chatRoom.findMany({
      where: {
        members: {
          some: {
            userId: userId
          }
        }
      },
      include: {
        members: {
          include: {
            user: true
          }
        }
      },
      orderBy: {
        updatedAt: "desc"
      }
    });

    // 2. format biar enak di Flutter
    const formatted = rooms.map((room) => {
      const otherMembers = room.members
        .filter((m) => m.userId !== userId)
        .map((m) => m.user);

      return {
        id: room.id,
        roomId: room.roomId,
        lastMessage: room.lastMessage ?? "",
        updatedAt: room.updatedAt,
        members: room.members.map((m) => ({
          userId: m.userId,
          user: m.user ?? null
        })),
        otherUser: otherMembers[0] ?? null
      };
    });

    return res.status(200).json({
      message: "Rooms fetched successfully",
      data: formatted
    });

  } catch (error) {
    console.error("GET ROOMS ERROR:", error);
    return res.status(500).json({
      message: "Failed to fetch chat rooms"
    });
  }
});
module.exports = router;