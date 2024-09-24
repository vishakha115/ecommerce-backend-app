const Product = require("../models/productModel");

const popularInWomen = async (req, res) => {
  let products = await Product.find({ category: "women" });
  let arr = products.splice(0, 4);
  console.log("Popular In Women", products.length);
  res.send(arr);
};
module.exports = {
  popularInWomen,
};
