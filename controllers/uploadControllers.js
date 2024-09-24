const uploadControllers = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: 0, message: "No file uploaded" });
    }

    const result = req.file; // This should contain file details from Multer/Cloudinary
    console.log(result);
    res.json({
      success: 1,
      image_url: result.path, // Cloudinary gives the uploaded image URL in 'path'
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({
      success: 0,
      message: "Error uploading image",
    });
  }
};

module.exports = {
  uploadControllers,
};
