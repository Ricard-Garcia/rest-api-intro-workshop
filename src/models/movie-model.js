const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const MovieSchema = Schema(
  {
    firebase_id: {
      type: String,
      unique: true,
    },
    title: {
      type: String,
      unique: true,
      required: [true, "Movie title is required"],
    },
    releaseYear: {
      type: Date,
      required: [true, "Release year is required"],
    },
    genres: [String],
    duration: {
      type: Number,
      required: [true, "Duration is required"],
    },
    cast: {
      type: [{ type: Object, trim: true }],
      default: undefined,
      // required: true,
    },
    crew: {
      type: [{ type: Object, trim: true }],
      default: undefined,
      // required: true,
    },
  },
  { timestamps: true },
);

// New collection
const MovieModel = mongoose.model("movie", MovieSchema);

module.exports = {
  MovieModel: MovieModel,
};
