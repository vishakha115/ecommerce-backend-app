const express = require("express");
const { addProduct } = require("../controllers/addProductControllers");

const router = express.Router();
router.route("/addproduct").post(addProduct);

module.exports = router;
