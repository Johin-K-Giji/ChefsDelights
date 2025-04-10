const Product = require("../models/Product");

// Create a new product
const createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const coverImage = req.files?.coverImage?.[0]?.filename;
    const subImages = req.files?.subImages?.map(file => file.filename) || [];

    if (!coverImage) {
      return res.status(400).json({ message: "Cover image is required." });
    }

    const newProduct = new Product({
      name,
      price,
      description,
      coverImage,
      subImages,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;

    const updatedData = {
      name,
      price,
      description,
    };

    if (req.files?.coverImage) {
      updatedData.coverImage = req.files.coverImage[0].filename;
    }

    if (req.files?.subImages) {
      updatedData.subImages = req.files.subImages.map(file => file.filename);
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );

    if (!updatedProduct) return res.status(404).json({ message: "Product not found" });

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Export all controller functions
module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
