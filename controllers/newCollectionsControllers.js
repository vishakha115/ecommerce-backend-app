

const Product = require("../models/productModel");

const newCollections = async (req, res) => {
  let products = await Product.find({});
  console.log("New Collection", products.length);
  res.send(products);
};

module.exports = {
  newCollections,
};
