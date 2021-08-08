const db = require("../models");

// /movies/
// POST movies
async function register(req, res, next) {
  const { title, releaseYear, genres, duration, cast, crew } = req.body;
  try {
    const registeredMovie = await db.Movie.create({
      title: title,
      releaseYear: releaseYear,
      genres: genres,
      duration: duration,
      cast: cast,
      crew: crew,
    });
    res.status(200).send({
      message: `Registered movie ${title}.`,
      registered: registeredMovie,
    });
  } catch (error) {
    res.status(500).send({ message: "Failed to insert movie. ", error: error });
  }
}

// GET movies
async function getAll(req, res, next) {
  try {
    const foundMovies = await db.Movie.find({});
    if (foundMovies.length != 0) {
      res
        .status(200)
        .send({ message: "Loaded all movies.", found: foundMovies });
    } else {
      res.status(200).send({ message: "No movies registered." });
    }
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .send({ message: "Failed to get all movies.", error: error.message });
  }
}

// /movies/:id
// GET movie
async function getById(req, res, next) {
  const { id } = req.params;
  try {
    const foundMovie = await db.Movie.findById(id);
    res
      .status(200)
      .send({ message: `Loaded movie with id: ${id}`, found: foundMovie });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Failed to get movie.", error: error.message });
  }
}

// PATCH movie
async function updateById(req, res, next) {
  const { id } = req.params;
  try {
    const updatedMovie = await db.Movie.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).send({
      message: `Updated movie with id: ${id}.`,
      updated: updatedMovie,
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Failed to update movie.", error: error.message });
  }
}

// DELETE movie
async function deleteById(req, res, next) {
  const { id } = req.params;
  try {
    const deletedMovie = await db.Movie.deleteOne({ _id: id });
    res.status(200).send({
      message: `Deleted movie with id ${id}.`,
      deleted: deletedMovie,
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Failed to delete movie.", error: error.message });
  }
}

module.exports = {
  register: register,
  getAll: getAll,
  getById: getById,
  updateById: updateById,
  deleteById: deleteById,
};
