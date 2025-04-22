const Order = require("../models/Order");
const Product = require("../models/Product");

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();

    // Enrich each order with product details
    const ordersWithProductDetails = await Promise.all(
      orders.map(async (order) => {
        const products = await Product.find({ _id: { $in: order.productIds } });
        return {
          ...order.toObject(), // convert Mongoose doc to plain object
          products, // attach full product info
        };
      })
    );

    res.status(200).json(ordersWithProductDetails);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getOrders };
