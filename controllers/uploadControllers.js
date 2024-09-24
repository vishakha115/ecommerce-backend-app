const uploadControllers = async (req, res) => {
  // Check if a file is uploaded
  if (!req.file) {
    return res.status(400).json({ success: 0, message: "No file uploaded" });
  }

  // Respond with the uploaded file's URL
  res.json({
    success: 1,
    image_url: `/images/${req.file.filename}`,
  });
};

module.exports = {
  uploadControllers,
};
