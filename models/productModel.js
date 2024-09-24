const mongoose = require("mongoose");

// Define the Product schema
const productSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true }, // Make sure `id` is unique
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  new_price: { type: Number, required: true }, // Consider making this required
  old_price: { type: Number, required: false }, // Optional
  date: { type: Date, default: Date.now },
  available: { type: Boolean, default: true }, // Fix the spelling: `available`
});

// Create the Product model
const Product = mongoose.model("Product", productSchema);

// Export the Product model
module.exports = Product;
