const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

class Jwt {
  static sign = (payload) => {
    return jwt.sign(payload, JWT_SECRET);
  };

  static decode = (token) => {
    return jwt.verify(token, JWT_SECRET);
  };
}

module.exports = Jwt;
