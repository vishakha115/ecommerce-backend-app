const express = require("express");
const { newCollections } = require("../controllers/newCollectionsControllers");

const router = express.Router();
router.route("/newcollections").get(newCollections);

module.exports = router;
