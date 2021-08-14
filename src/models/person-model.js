const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const PersonSchema = Schema(
  {
    firebase_id: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      unique: true,
      required: [true, "Name is required"],
    },
    dateOfBirth: {
      type: Date,
      unique: false,
      required: [true, "Date of birth is required"],
    },

    placeOfBirth: {
      type: String,
      unique: false,
      required: [true, "Place of birth is required"],
    },
    movies: [{ type: String, required: true }],
    roles: [
      {
        type: String,
        enum: [
          "actor",
          "actress",
          "director",
          "camera",
          "composer",
          "water-person",
        ],
        default: undefined,
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  },
);

// New collection
const PersonModel = mongoose.model("person", PersonSchema);

module.exports = {
  PersonModel: PersonModel,
};
