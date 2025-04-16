const express = require("express");
const cors = require("cors");
const app = express();
const productRoutes = require("./routes/productRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const orderRoutes= require("./routes/orderRoutes")
const path = require("path");
require("dotenv").config();
console.log("Key from .env directly:", require("dotenv").config().parsed);

const connectDB = require("./config/db");

connectDB();

// Enable CORS
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log("Razorpay Key ID:", process.env.RAZORPAY_KEY_ID);

// Serve uploaded images
app.use('/static/products', express.static(path.join(__dirname, 'uploads/products')));

// Use Routes
app.use("/api/products", productRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/orders",orderRoutes)

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
