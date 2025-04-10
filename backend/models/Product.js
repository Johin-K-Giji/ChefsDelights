const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  coverImage: { type: String, required: true },
  subImages: {
    type: [String],
    validate: [arrayLimit, "{PATH} exceeds the limit of 5"],
  },
}, { timestamps: true });

function arrayLimit(val) {
  return val.length <= 5;
}

module.exports = mongoose.model("Product", productSchema);
