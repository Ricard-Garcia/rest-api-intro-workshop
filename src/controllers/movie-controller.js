const db = require("../models");

// /movies/
// POST movies
async function register(req, res, next) {
  try {
    const { title, releaseYear, genres, duration, cast, crew } = req.body;
    await db.Movie.create({
      title: title,
      releaseYear: releaseYear,
      genres: genres,
      duration: duration,
      cast: cast,
      crew: crew,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Failed to insert movie. ", error: error });
  }
}
