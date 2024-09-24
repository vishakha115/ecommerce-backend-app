const Product = require("../models/productModel");

const removeProduct = async (req, res) => {
  try {
    // Find the product by ID
    const product = await Product.findOne({ id: req.body.id });

    // Check if the product exists
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    // Delete the product
    await Product.findOneAndDelete({ id: req.body.id });

    // Get the remaining number of products
    const remainingProductsCount = await Product.countDocuments();
    console.log("Total Product Remaining", remainingProductsCount);

    // Return success response with the product name and the remaining product count
    res.json({
      success: true,
      name: product.name,
      remainingProducts: remainingProductsCount,
    });
  } catch (error) {
    console.error("Error removing product:", error);
    res.status(500).json({ success: false, message: "Error removing product" });
  }
};

module.exports = {
  removeProduct,
};
