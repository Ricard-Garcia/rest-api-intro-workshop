const { UserModel } = require("./user-model");
const { PersonModel } = require("./person-model");
const { MovieModel } = require("./movie-model");

module.exports = {
  User: UserModel,
  Person: PersonModel,
  Movie: MovieModel,
};
