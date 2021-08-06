const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const PersonSchema = Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "Name is required"],
    },
    dateOfBirth: {
      type: Date,
      unique: true,
      required: [true, "Date of birth is required"],
    },

    placeOfBirth: {
      type: String,
      unique: true,
      required: [true, "Place of birth is required"],
    },
    roles: [
      {
        type: String,
        enum: ["actor", "actress", "director", "camera", "composer"],
        required: true,
      },
    ],
  },
  //   Add createdAt and updatedAt
  {
    timestamps: true,
  },
);

// New collection
const PersonModel = mongoose.model("person", PersonSchema);

module.exports = {
  PersonModel: PersonModel,
};
