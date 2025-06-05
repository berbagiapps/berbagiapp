var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

require("dotenv").config();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var authRouter = require("./routes/auth");

var app = express();
app.use(
  cors({
    origin: "*", // Allows requests from anywhere
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
//app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);

// Serve static files from Vue build
app.use(express.static(path.join(__dirname, "frontend/dist")));

// For SPA routing (history mode)
app.get("/view*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/dist/index.html"));
});

module.exports = app;
