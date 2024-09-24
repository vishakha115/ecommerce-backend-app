const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { v2: cloudinary } = require("cloudinary");
const multer = require("multer");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Configure Multer to use CloudinaryStorage and upload to a specific folder
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "ecommerce-app-image/products", // Folder path where images will be stored
    format: async (req, file) => "png", // Adjust file format as needed
    public_id: (req, file) => file.fieldname + "_" + Date.now(), // Unique file name
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
