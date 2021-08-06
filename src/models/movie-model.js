const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const MovieSchema = Schema({
  title: {
    type: String,
    unique: true,
    required: [true, "Movie title is required"],
  },
  releaseYear: {
    type: Date,
    required: [true, "Release year is required"],
  },
  genres: {
    type: Array,
    enum: [
      "Humor",
      "Romantic",
      "Photographic",
      "Idalist",
      "Society",
      "Musical",
      "Thriller",
    ],

    required: [true, "At least one genre should be declared"],
  },
  duration: {
    type: Number,
    required: [true, "Duration is required"],
  },
  cast: {
    type: [{ type: String, trim: true }],
    default: undefined,
    required: true,
  },
  crew: {
    type: [{ type: String, trim: true }],
    default: undefined,
    required: true,
  },
});

// New collection
const MovieModel = mongoose.model("movie", MovieSchema);

module.exports = {
  Movie: MovieModel,
};
