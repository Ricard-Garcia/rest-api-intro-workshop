const mongoose = require("mongoose");
const { Schema } = require("Mongoose");
const { isEmail } = require("validator");

const UserSchema = Schema(
  {
    firebase_id: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      required: [true, "User name is required"],
    },
    last_name: {
      type: String,
      required: [true, "User last name is required"],
    },
    email: {
      type: String,
      required: [true, "User email is required"],
      validate: {
        validator: (value) => isEmail(value),
        message: (props) => `The email ${props.value} is not valid`,
      },
    },
    password: {
      type: String,
      unique: true,
      required: [true, "User password is required"],
    },
    is_admin: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true },
);

// New collection
const UserModel = mongoose.model("user", UserSchema);

module.exports = {
  UserModel: UserModel,
};
