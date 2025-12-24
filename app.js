const express = require("express");
const app = express();
const web = require("./routes/web");
const connectDB = require("./db/connectDB");
const cookieParser = require("cookie-parser");
const fileupload = require("express-fileupload");
const cors = require("cors");
require("dotenv").config();

app.use(cors({
  origin: ["https://glittering-eclair-e1efc7.netlify.app"],
  credentials: true,
}));

// cookie
app.use(cookieParser());

// file upload
app.use(fileupload({ useTempFiles: true }));

// json
app.use(express.json());

// database
connectDB();

// routes
app.use("/api", web);

// ✅ VERY IMPORTANT (EXPORT)
module.exports = app;
