const express = require("express");
const { removeProduct } = require("../controllers/removeProductControlllers");

const router = express.Router();
router.route("/removeproduct").post(removeProduct);

module.exports = router;
