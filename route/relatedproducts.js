const express = require("express");
const { relatedProducts } = require("../controllers/relatedProductsControllers");

const router = express.Router();
router.route("/relatedproducts").post(relatedProducts);

module.exports = router;
