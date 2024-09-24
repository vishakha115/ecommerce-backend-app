const Product = require("../models/productModel");

const relatedProducts = async (req, res) => {
  const { category } = req.body;
  const products = await Product.find({ category });
  const arr = products.slice(0, 4);
  console.log("Related Products", products.length);
  res.send(arr);
};
module.exports = {
  relatedProducts,
};
