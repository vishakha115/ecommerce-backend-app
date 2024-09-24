

const Product = require("../models/productModel");

const allProducts = async (req, res) => {
  let products = await Product.find({});
  console.log("All Products", products.length);
  res.send(products);
};

module.exports = {
  allProducts,
};
