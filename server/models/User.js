const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    userNumber: {
      type: String,
      required: true,
    },
    idCard: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { strict: true }
);

const User = mongoose.model("user", UserSchema);
module.exports = User;
