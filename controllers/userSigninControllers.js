const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Users = require("../models/userModel");

const userSignin = async (req, res) => {
  console.log("Sign Up");
  let success = false;

  try {
    // Check if the user already exists
    let check = await Users.findOne({ email: req.body.email });
    if (check) {
      return res.status(400).json({
        success: success,
        errors: "Existing user found with this email",
      });
    }

    // Initialize an empty cart
    let cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create a new user
    const user = new Users({
      name: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      cartData: cart,
    });

    // Save the user to the database
    await user.save();

    // Create the JWT token
    const data = {
      user: {
        id: user.id,
      },
    };

    const token = jwt.sign(data, process.env.JWT_SECRET); // Use environment variable for the secret

    success = true;
    res.json({ success, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

module.exports = {
  userSignin,
};
