const mongoose = require("mongoose");
require("dotenv").config();

const db = async () => {
  try {
    const MONGO_URL = process.env.MONGO_URL;

    await mongoose.connect(MONGO_URL);
    mongoose.connection.once("connected", () => {
      console.log("Mongoose connected");
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = db;
