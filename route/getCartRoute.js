const express = require("express");
const { getCart } = require("../controllers/getCartControllers");
const { fetchuser } = require("../middleware/fetchUser");

const router = express.Router();
router.route("/getcart").post(fetchuser, getCart);

module.exports = router;
