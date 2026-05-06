var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const { exec } = require('child_process');

require("dotenv").config({ path: ".env.local" });

// ==================== PRISMA GENERATE BYPASS BLOCK ====================
// Menunjuk langsung ke binary dan skema menggunakan path absolut agar tidak tersesat di cPanel

// ======================================================================

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var authRouter = require("./routes/auth");

// var campaignsRouter = require("./routes/campaigns");
var donationRequestsRouter = require("./routes/donationRequests");
var donationRequestsmentRouter = require("./routes/donationRequestment");

// --- 1. TAMBAHKAN BARIS INI UNTUK MENGIMPOR ROUTER BARU ---
var donationFulfillmentsRouter = require("./routes/donationFulfillments");
var fundDonationRequestsRouter = require("./routes/fundDonationHistoryRequest"); // Router baru
var chatRoomRouter = require("./routes/chatRoom");

const { initSocket } = require("./socket");

var app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use('/uploads', express.static('uploads'));
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/chatRooms", chatRoomRouter);

// app.use("/campaigns", campaignsRouter);
app.use("/donation-requests", donationRequestsRouter);
// --- 2. TAMBAHKAN BARIS INI UNTUK MENGGUNAKAN ROUTER BARU ---
app.use("/fulfillments", donationFulfillmentsRouter);
app.use("/donation-requestment", donationRequestsmentRouter);

app.use("/funddonation-requests", fundDonationRequestsRouter); // Rute baru

// Serve static files from Vue build
app.use(express.static(path.join(__dirname, "frontend/dist")));

// For SPA routing (history mode)
app.get("/view*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/dist/index.html"));
});

module.exports = app;