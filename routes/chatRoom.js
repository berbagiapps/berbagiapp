var express = require("express");
var router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const authenticateUser = require("../middleware/authMiddleware");


// =====================================
// 1. CREATE / GET ROOM (ANTI P2002)
// =====================================
router.post("/create", authenticateUser, async (req, res) => {
  try {
    const currentUserId = req.user.id;
    const { donationRequestId } = req.body;

    if (!donationRequestId) {
      return res.status(400).json({
        message: "donationRequestId is required"
      });
    }

    const donation = await prisma.donationRequest.findUnique({
      where: { id: donationRequestId }
    });

    if (!donation) {
      return res.status(404).json({
        message: "Donation not found"
      });
    }

    const fulfillment = await prisma.donationFulfillment.findFirst({
      where: { donationRequestId }
    });

    let otherUserId;

    if (currentUserId === donation.requestorFirebaseId) {
      otherUserId = fulfillment?.donorFirebaseId;
    } else {
      otherUserId = donation.requestorFirebaseId;
    }

    if (!otherUserId || currentUserId === otherUserId) {
      return res.status(400).json({
        message: "Invalid chat participants"
      });
    }

    const customRoomId =
      donationRequestId +
      "_" +
      [currentUserId, otherUserId].sort().join("_");

    let room;

    try {
      room = await prisma.chatRoom.create({
        data: {
          roomId: customRoomId,
          donationRequestId,
          members: {
            create: [
              { userId: currentUserId },
              { userId: otherUserId }
            ]
          }
        },
        include: {
          members: { include: { user: true } }
        }
      });

    } catch (error) {
      if (error.code === "P2002") {
        console.log("ROOM SUDAH ADA → AMBIL EXISTING");

        room = await prisma.chatRoom.findFirst({
          where: { donationRequestId },
          include: {
            members: { include: { user: true } }
          }
        });

      } else {
        throw error;
      }
    }

    return res.status(200).json({
      message: "Chat room ready",
      data: {
        id: room.id,
        roomId: room.roomId,
        donationRequestId: room.donationRequestId,
        participants: room.members.map(m => m.user)
      }
    });

  } catch (error) {
    console.error("CREATE ROOM ERROR:", error);
    return res.status(500).json({
      message: "Failed to create room"
    });
  }
});

router.get("/rooms", authenticateUser, async (req, res) => {
  try {
    const userId = req.user.id;

    const rooms = await prisma.chatRoom.findMany({
      where: {
        isActive: true,
        members: {
          some: {
            userId: userId
          }
        }
      },
      include: {
        // 🔥 ambil data donation request
        donation: {
          select: {
            id: true,
            description: true,
            itemType: true,
            status: true,
            city: true
          }
        },

        // 🔥 ambil member + user (SAFE)
        members: {
          include: {
            user: {
              select: {
                id: true,
                name: true
              }
            }
          }
        }
      },
      orderBy: {
        updatedAt: "desc"
      }
    });

    const result = rooms.map(room => {
      const otherUser = room.members.find(m => m.userId !== userId);

      return {
        id: room.id,
        roomId: room.roomId,
        donationRequestId: room.donationRequestId,

        // 🔥 relasi ke DonationRequest
        donationRequest: room.donation,

        lastMessage: room.lastMessage,
        updatedAt: room.updatedAt,

        // 🔥 user lawan chat
        otherUser: otherUser?.user ?? null
      };
    });

    return res.status(200).json({
      message: "Rooms fetched",
      data: result
    });

  } catch (error) {
    console.error("GET ROOMS ERROR:", error);

    return res.status(500).json({
      message: "Failed to fetch rooms"
    });
  }
});

// =====================================
// 3. GET MESSAGES (🔥 SUPPORT 2 ID)
// =====================================
router.get("/:roomId/messages", authenticateUser, async (req, res) => {
  try {
    const { roomId } = req.params;
    const userId = req.user.id;

    const room = await prisma.chatRoom.findFirst({
      where: {
        OR: [
          { id: roomId },     // ✅ UUID
          { roomId: roomId }  // ✅ custom
        ]
      },
      include: {
        chats: {
          orderBy: { createdAt: "asc" },
          include: { sender: true }
        },
        members: true
      }
    });

    if (!room) {
      return res.status(404).json({
        message: "Chat room not found"
      });
    }

    const isMember = room.members.some(m => m.userId === userId);
    if (!isMember) {
      return res.status(403).json({
        message: "Forbidden"
      });
    }


    console.log({
        messages: room.chats.map(chat => ({
          id: chat.id,
          roomId: room.roomId,
          message: chat.message,
          senderId: chat.senderId,
          sender: chat.sender,
          createdAt: chat.createdAt
        }))
      });
    return res.status(200).json({
      message: "Messages fetched",
      data: {
        messages: room.chats.map(chat => ({
          id: chat.id,
          roomId: room.roomId,
          message: chat.message,
          senderId: chat.senderId,
          sender: chat.sender,
          createdAt: chat.createdAt
        }))
      }
    });

  } catch (error) {
    console.error("GET MESSAGES ERROR:", error);
    return res.status(500).json({
      message: "Failed to fetch messages"
    });
  }
});


// =====================================
// 4. SEND MESSAGE (🔥 SUPPORT 2 ID)
// =====================================
router.post("/send", authenticateUser, async (req, res) => {
  try {
    const { roomId, message } = req.body;
    const userId = req.user.id;

    if (!roomId || !message) {
      return res.status(400).json({
        message: "roomId and message required"
      });
    }

    const room = await prisma.chatRoom.findFirst({
      where: {
        OR: [
          { id: roomId },
          { roomId: roomId }
        ]
      },
      include: { members: true }
    });

    if (!room) {
      return res.status(404).json({
        message: "Room not found"
      });
    }

    const isMember = room.members.some(m => m.userId === userId);
    if (!isMember) {
      return res.status(403).json({
        message: "Forbidden"
      });
    }

    const chat = await prisma.chat.create({
      data: {
        roomId: room.id,
        senderId: userId,
        message
      },
      include: { sender: true }
    });

    await prisma.chatRoom.update({
      where: { id: room.id },
      data: {
        lastMessage: message,
        updatedAt: new Date()
      }
    });

    return res.status(201).json({
      message: "Message sent",
      data: {
        id: chat.id,
        roomId: room.roomId,
        message: chat.message,
        senderId: chat.senderId,
        sender: chat.sender,
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

module.exports = router;