const QRcode = require("qrcode");
const QR = require("../models/qrModel");

// Generate a QR code and save to database
exports.createQRCode = async (req, res) => {
  const url = req.body.url; // Get the URL from the request body
  console.log(url)
  try {
    const qrcodeUrl = await QRcode.toDataURL(url); // Generate QR code

    const qrEntry = new QR({ url, qrcode: qrcodeUrl }); // Create a new QR entry
    await qrEntry.save(); // Save it to the database

    res.status(200).json({ data: qrcodeUrl }); // Send back the QR code
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

// Get all QR codes
exports.getAllQRCodes = async (req, res) => {
  try {
    const qrCodes = await QR.find(); // Find all QR codes
    res.status(200).json(qrCodes); // Send back the list
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};