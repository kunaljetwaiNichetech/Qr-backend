// models/qrModel.js
const mongoose = require("mongoose");

const qrSchema = new mongoose.Schema({
  url: { type: String, required: true },
  qrcode: { type: String, required: true },
});

const QR = mongoose.model("QR", qrSchema);

module.exports = QR;
