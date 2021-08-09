const mongoose = require("mongoose");
const db = require("../models");

function deletePerson(movies, personId) {
  movies.forEach(async (movie) => {
    await db.Movie.updateOne(
      { _id: movie._id },
      { $pull: { cast: { _id: mongoose.Types.ObjectId(personId) } } },
      { multi: true },
    );
    await db.Movie.updateOne(
      { _id: movie._id },
      { $pull: { crew: { _id: mongoose.Types.ObjectId(personId) } } },
      { multi: true },
    );
  });
}

module.exports = {
  deletePerson: deletePerson,
};
