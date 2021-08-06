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
  genres: [String],
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
  MovieModel: MovieModel,
};
