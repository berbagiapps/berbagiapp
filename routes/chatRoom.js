var express = require("express");
var router = express.Router();
// Mundur satu tingkat keluar dari folder 'routes', lalu masuk ke 'src/generated/client'
const { PrismaClient } = require('../src/generated/client');
 const prisma = new PrismaClient();
const authenticateUser = require("../middleware/authMiddleware");
const sendPushNotification = require("./sendPushNotification");


// =====================================
// 1. CREATE / GET ROOM (ANTI P2002)
// =====================================
router.post("/create", authenticateUser, async (req, res) => {
  try {
    const currentUserId = req.user.id;
    const { donationRequestId, fulfillmentId, requestmentId } = req.body;

    if (!donationRequestId) {
      return res.status(400).json({ message: "donationRequestId is required" });
    }

    let otherUserId;
    let customRoomId;

    // Skenario A: Chat berdasarkan Fulfillment (Donatur merespons)
    if (fulfillmentId) {
      const fulfillment = await prisma.donationFulfillment.findUnique({
        where: { id: fulfillmentId },
        include: { donationRequest: true }
      });

      if (!fulfillment) return res.status(404).json({ message: "Fulfillment not found" });

      // Lawan bicara: Jika saya donatur, maka lawan saya adalah requestor (owner). Begitu sebaliknya.
      otherUserId = (currentUserId === fulfillment.donorFirebaseId)
        ? fulfillment.donationRequest.requestorFirebaseId
        : fulfillment.donorFirebaseId;

      customRoomId = `fullfill_${fulfillmentId}`;
    }

    // Skenario B: Chat berdasarkan Requestment (Penerima meminta barang)
    else if (requestmentId) {
      const requestment = await prisma.donationRequestment.findUnique({
        where: { id: requestmentId },
        include: { donationRequest: true }
      });

      if (!requestment) return res.status(404).json({ message: "Requestment not found" });

      otherUserId = (currentUserId === requestment.requestorId)
        ? requestment.donationRequest.requestorFirebaseId
        : requestment.requestorId;

      customRoomId = `reqmt_${requestmentId}`;
    }

    else {
      return res.status(400).json({ message: "fulfillmentId or requestmentId is required" });
    }

    // Buat atau Ambil Room
    const room = await prisma.chatRoom.upsert({
      where: { roomId: customRoomId },
      update: {},
      create: {
        roomId: customRoomId,
        donationRequestId,
        fulfillmentId: fulfillmentId || null,
        requestmentId: requestmentId || null,
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

    return res.status(200).json({
      data: {
        id: room.id,
        roomId: room.roomId,
        participants: room.members.map(m => m.user)
      }
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error creating chat room" });
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
            userId: userId,
          },
        },
      },

      include: {
        donation: {
          select: {
            id: true,
            description: true,
            itemType: true,
            status: true,
            city: true,
          },
        },

        // =========================
        // 🔥 REQUESTMENT (FIXED)
        // =========================
        requestment: {
          select: {
            id: true,
            donorName: true,
            reason: true, // ✅ FIX: bukan donorNotes
            latitude: true,
            longitude: true,
            address: true,
            city: true,
            donationRequestId: true,
            requestorId: true,
          },
        },

        // =========================
        // 🔥 FULFILLMENT (VALID)
        // =========================
        fulfillment: {
          select: {
            id: true,
            donorName: true,
            donorNotes: true,
            latitude: true,
            longitude: true,
            address: true,
            city: true,
            donationRequestId: true,
            donorFirebaseId: true,
          },
        },

        members: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },

      orderBy: {
        updatedAt: "desc",
      },
    });

    const result = rooms.map((room) => {
      const otherUser = room.members.find(
        (m) => m.userId !== userId
      );

      return {
        id: room.id,
        roomId: room.roomId,
        donationRequestId: room.donationRequestId,

        // =========================
        // 🔥 REQUESTMENT FLOW
        // =========================
        requestment: room.requestment
          ? {
            id: room.requestment.id,
            donorName: room.requestment.donorName,
            reason: room.requestment.reason,
            latitude: room.requestment.latitude,
            longitude: room.requestment.longitude,
            address: room.requestment.address,
            city: room.requestment.city,
            donationRequestId:
              room.requestment.donationRequestId,
            requestorId: room.requestment.requestorId,
          }
          : null,

        // =========================
        // 🔥 FULFILLMENT FLOW
        // =========================
        fulfillment: room.fulfillment
          ? {
            id: room.fulfillment.id,
            donorName: room.fulfillment.donorName,
            donorNotes: room.fulfillment.donorNotes,
            latitude: room.fulfillment.latitude,
            longitude: room.fulfillment.longitude,
            address: room.fulfillment.address,
            city: room.fulfillment.city,
            donationRequestId:
              room.fulfillment.donationRequestId,
            donorFirebaseId:
              room.fulfillment.donorFirebaseId,
          }
          : null,

        // =========================
        // 🔥 META CHAT
        // =========================
        lastMessage: room.lastMessage,
        updatedAt: room.updatedAt,

        otherUser: otherUser?.user ?? null,

        // =========================
        // 🔥 AUTO DETECT TYPE
        // =========================
        chatType: room.fulfillment
          ? "FULFILLMENT"
          : room.requestment
            ? "REQUEST"
            : "UNKNOWN",
      };
    });

    return res.status(200).json({
      message: "Rooms fetched successfully",
      data: result,
    });
  } catch (error) {
    console.error("GET ROOMS ERROR:", error);

    return res.status(400).json({
      message: "Failed to fetch rooms " + error,
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
        message: "roomId and message required",
      });
    }

    const room = await prisma.chatRoom.findFirst({
      where: {
        OR: [{ id: roomId }, { roomId: roomId }],
      },
      include: { members: true },
    });

    if (!room) {
      return res.status(404).json({
        message: "Room not found",
      });
    }

    const isMember = room.members.some((m) => m.userId === userId);
    if (!isMember) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }

    // =========================
    // 1. SAVE CHAT
    // =========================
    const chat = await prisma.chat.create({
      data: {
        roomId: room.id,
        senderId: userId,
        message,
      },
      include: { sender: true },
    });

    await prisma.chatRoom.update({
      where: { id: room.id },
      data: {
        lastMessage: message,
        updatedAt: new Date(),
      },
    });

    // =========================
    // 2. FIND RECEIVER
    // =========================
    const receiver = room.members.find(
      (m) => m.userId !== userId
    );

    if (receiver) {
      const receiverUser = await prisma.user.findUnique({
        where: { id: receiver.userId },
      });

      // =========================
      // 3. SEND PUSH NOTIF
      // =========================
      if (receiverUser?.tokenFcm) {
        await sendPushNotification({
          token: receiverUser.tokenFcm,
          userId: receiverUser.id,
          title: "Pesan Baru",
          body: message,
          notificationType: "CHAT_MESSAGE",
          data: {
            roomId: room.roomId,
            senderId: userId,
          },
        });
      }
    }

    return res.status(201).json({
      message: "Message sent",
      data: {
        id: chat.id,
        roomId: room.roomId,
        message: chat.message,
        senderId: chat.senderId,
        sender: chat.sender,
        createdAt: chat.createdAt,
      },
    });
  } catch (error) {
    console.error("SEND MESSAGE ERROR:", error);
    return res.status(500).json({
      message: "Failed to send message",
    });
  }
});

module.exports = router;