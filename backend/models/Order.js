const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userName: String,
  phone: String,
  address: String,
  orderAmount: Number,
  productIds: [String], // <-- Add this line
  razorpayPaymentId: String,
  razorpayOrderId: String,
  razorpaySignature: String,
  transactionId: String,
  paymentMode: String, // e.g., 'Online', 'COD'
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
