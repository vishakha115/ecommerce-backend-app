const express = require("express");
const { uploadControllers } = require("../controllers/uploadControllers");
const upload = require("../middleware/multer");

const router = express.Router();
router.route("/upload").post(upload.single("product"), uploadControllers);

module.exports = router;
