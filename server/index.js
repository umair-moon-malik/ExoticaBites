const express = require("express");
const connectDB = require("./config/db.js");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.js");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

const main = async () => {
  try {
    console.log("connecting to MongoDB...");
    await connectDB();
    console.log("Starting server...");
    app.use("/api/auth", authRoutes);
  } catch (error) {
    console.error("Error starting server:", error);
  }
  app.listen(7000, () => {
    console.log("listening");
  });
};

main();
