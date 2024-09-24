const express = require("express");
const { allProducts } = require("../controllers/allProductControllers");

const router = express.Router();
router.route("/allproducts").get(allProducts);

module.exports = router;
