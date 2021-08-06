const db = require("../models");

// /movies/
// POST movies
async function register(req, res, next) {
  try {
    const { title, releaseYear, genres, duration, cast, crew } = req.body;
    const registeredMovie = await db.Movie.create({
      title: title,
      releaseYear: releaseYear,
      genres: genres,
      duration: duration,
      cast: cast,
      crew: crew,
    });
    return res.status(200).send({
      message: `Registered movie ${title}`,
      registered: registeredMovie,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Failed to insert movie. ", error: error });
  }
}

// GET movies
async function getMovies(req, res, next) {
  try {
    const foundMovies = await db.Movie.find({});
    return res
      .status(200)
      .send({ message: "Loaded all movies", found: foundMovies });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: "Couldn't get all movies" });
  }
}

module.exports = {
  register: register,
  getMovies: getMovies,
};
