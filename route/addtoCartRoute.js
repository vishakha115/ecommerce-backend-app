const express = require("express");
const { addtocart } = require("../controllers/addtoCartControllers");
const { fetchuser } = require("../middleware/fetchUser");

const router = express.Router();
router.route("/addtocart").post(fetchuser, addtocart);

module.exports = router;
