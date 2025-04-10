const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoutes");
const path = require("path");

const connectDB = require("./config/db")

connectDB()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// To serve uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// Use product routes
app.use("/api/products", productRoutes);

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
