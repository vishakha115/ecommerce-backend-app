const Users = require("../models/userModel");

const removeFromCart = async (req, res) => {
  console.log("Remove Cart");
  try {
    // Fetch user data from the database
    let userData = await Users.findOne({ _id: req.user.id });

    // Check if the itemId is provided in the request body
    if (!req.body.itemId) {
      return res.status(400).json({
        success: false,
        message: "Item ID is required",
      });
    }

    // Check if the user has the item in their cart
    if (!userData || !userData.cartData[req.body.itemId]) {
      return res.status(404).json({
        success: false,
        message: "Item not found in cart",
      });
    }

    // Decrement the item quantity if it's greater than zero
    if (userData.cartData[req.body.itemId] > 0) {
      userData.cartData[req.body.itemId] -= 1;
    } else {
      return res.status(400).json({
        success: false,
        message: "Quantity is already zero",
      });
    }

    // Update the user cart data in the database
    await Users.findOneAndUpdate(
      { _id: req.user.id },
      { cartData: userData.cartData }
    );

    // Send a successful response with updated cart data
    res.status(200).json({
      success: true,
      message: "Item removed from cart successfully",
      cartData: userData.cartData, // Optionally return the updated cart data
    });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while removing item from cart",
    });
  }
};

module.exports = {
  removeFromCart,
};
