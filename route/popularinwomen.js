const express = require("express");
const { popularInWomen } = require("../controllers/popularInWomenControllers");

const router = express.Router();
router.route("/popularinwomen").get(popularInWomen);

module.exports = router;
