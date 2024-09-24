const Product = require("../models/productModel");

const addProduct = async (req, res) => {
  try {
    let products = await Product.find({});
    let id;

    // Log the retrieved products
    // console.log("Products found:", products);

    if (products.length > 0) {
      let last_product = products[products.length - 1]; // Get the last product
      id = last_product.id + 1; // Increment the last product's id
    } else {
      id = 1; // Start with 1 if no products exist
    }

    // Log the generated ID
    console.log("Generated ID:", id);

    const product = new Product({
      id: id,
      name: req.body.name,
      description: req.body.description,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });

    await product.save();
    console.log("Product Added Successfully");
    res.json({ success: true, product });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ success: false, message: "Error adding product" });
  }
};

module.exports = {
  addProduct,
};
