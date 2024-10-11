const express = require("express");
const {
  createQRCode,
  getAllQRCodes,
} = require("../controlers/qrController.js");
const router = express.Router();

// POST route to generate and save a QR code
router.post("/generate", createQRCode);

module.exports = router;
