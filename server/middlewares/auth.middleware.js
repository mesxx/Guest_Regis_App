const jwt = require("jsonwebtoken");

exports.authRole = async (req, _, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) throw { message: "No Access" };

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    next(error);
  }
};
