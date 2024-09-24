const express = require("express");
const { userSignin } = require("../controllers/userSigninControllers");

const router = express.Router();
router.route("/signup").post(userSignin);

module.exports = router;
