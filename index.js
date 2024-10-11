const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const qrcodeRoutes = require("./routes/qrRoutes.js");

const app = express();
const Port = 8000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({ origin: "*" })); // Allow all origins
app.use(express.json()); // Parse JSON bodies

// Routes
app.use("/api/qrcodes", qrcodeRoutes);

// Start server
app.listen(Port, () => console.log(`Server running on port ${Port}`));
