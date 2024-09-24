const Users = require("../models/userModel");

const getCart = async (req, res) => {
  let userData = await Users.findOne({ _id: req.user.id });
  const filteredCartData = Object.fromEntries(
    Object.entries(userData.cartData).filter(([key, value]) => value > 0)
  );
  console.log(filteredCartData);
  res.json(filteredCartData);
  // res.json(userData.cartData);
};

module.exports = {
  getCart,
};
