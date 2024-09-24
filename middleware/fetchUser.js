const jwt = require("jsonwebtoken");

const fetchuser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res
      .status(401)
      .send({ errors: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user = data.user; // data.user should be present if encoded correctly
    next();
  } catch (error) {
    return res
      .status(401)
      .send({ errors: "Invalid token, please authenticate again" });
  }
};

module.exports = {
  fetchuser,
};
