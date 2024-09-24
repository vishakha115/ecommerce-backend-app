const Users = require("../models/userModel"); // Assuming Users model is correct

const addtocart = async (req, res) => {
  console.log("Add to Cart");

  try {
    // Find the user by ID (provided by the token)
    let userData = await Users.findOne({ _id: req.user.id });
    if (!userData) {
      return res.status(404).send("User not found");
    }

    // Check if the product/item exists in the cart
    const itemId = req.body.itemId;

    // Initialize cartData for the item if it doesn't exist
    if (!userData.cartData[itemId]) {
      userData.cartData[itemId] = 1; // Add a new item to cart with quantity 1
    } else {
      userData.cartData[itemId] += 1; // Increment quantity if already present
    }

    // Update the user document in the database
    await Users.findOneAndUpdate(
      { _id: req.user.id },
      { cartData: userData.cartData },
      { new: true }
    );

    // Send success response
    res.status(200).send({
      success: true,
      message: "Item added to cart",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  addtocart,
};
