const bcrypt = require("bcrypt");
const crypto = require("crypto");

const { User } = require("../models");
const { Jwt } = require("../helpers");

class UsersController {
  static register = async (req, res, next) => {
    const { username, password, idCard } = req.body;
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const random = crypto.randomInt(0, 1000000);
      const fixed = random.toString().padStart(7, "0");
      const data = await User.create({
        username,
        password: hashedPassword,
        idCard,
        userNumber: fixed,
      });

      const token = Jwt.sign({
        id: data._id,
        username: data.name,
      });

      res.status(201).json({
        code: 201,
        message: "Success",
        data: { ...data._doc, token },
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  static access = async (req, res, next) => {
    const { username, password } = req.body;
    try {
      const userExist = await User.findOne({ username });
      if (!userExist) throw { message: "validation failed" };

      const isValid = await bcrypt.compare(password, userExist.password);
      if (!isValid) throw { message: "validation failed" };

      const token = Jwt.sign({
        id: userExist._id,
        username: userExist.name,
        role: userExist.role,
      });

      res.status(200).json({
        code: 200,
        message: "Success",
        data: { ...userExist._doc, token },
      });
    } catch (error) {
      next(error);
    }
  };

  static getUserData = async (req, res, next) => {
    const { id } = req.user;
    try {
      const data = await User.findById(id);

      res.status(200).json({
        code: 200,
        message: "Success",
        data,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}

module.exports = UsersController;
