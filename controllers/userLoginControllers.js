const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Users = require("../models/userModel");

const userLogin = async (req, res) => {
  console.log("Login");
  let success = false;
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    // Use bcrypt to compare the password
    const passCompare = await bcrypt.compare(req.body.password, user.password);
    if (passCompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      success = true;
      const token = jwt.sign(data, process.env.JWT_SECRET);
      res.json({ success, token });
    } else {
      return res.status(400).json({
        success: success,
        errors: "please try with correct email/password",
      });
    }
  } else {
    return res.status(400).json({
      success: success,
      errors: "please try with correct email/password",
    });
  }
};

module.exports = {
  userLogin,
};
