const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name must be provided"],
  },
  price: {
    type: Number,
    required: [true, "Product price must be provided"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  company: {
    type: String,
    enum: {
      values: ["caressa", "ikea", "liddy", "marcos"],
      message: "{VALUE} is not supported",
    },
    required: [true, "Indicate the manufacturer"],
  },
});

module.exports = mongoose.model("products", productSchema);
