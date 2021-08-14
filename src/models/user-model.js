const mongoose = require("mongoose");
const { Schema } = require("Mongoose");
const { isEmail } = require("validator");

const UserSchema = Schema(
  {
    firebase_id: {
      type: String,
      // unique: true,
    },
    name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      validate: {
        validator: (value) => isEmail(value),
        message: (props) => `The email ${props.value} is not valid`,
      },
    },
    is_admin: {
      type: Boolean,
      // required: true,
    },
  },
  { timestamps: true },
);

// New collection
const UserModel = mongoose.model("user", UserSchema);

module.exports = {
  UserModel: UserModel,
};
