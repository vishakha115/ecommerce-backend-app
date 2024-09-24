const express = require("express");
const { removeFromCart } = require("../controllers/removeFromCartControlllers");
const { fetchuser } = require("../middleware/fetchUser");

const router = express.Router();
router.route("/removefromcart").post(fetchuser, removeFromCart);

module.exports = router;
