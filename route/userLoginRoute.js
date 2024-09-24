const express = require("express");
const { userLogin } = require("../controllers/userLoginControllers");

const router = express.Router();
router.route("/login").post(userLogin);

module.exports = router;
