const { db } = require("../models");
const { seedMovies, seedPeople } = require("../db/data");

async function loadMovies() {
  await db.Movies.deleteMany({});
  await db.Movies.createMany(seedMovies());
}

async function loadPeople() {
  await db.Person.deleteMany({});
  await db.Person.createMany(seedPeople());
}

module.exports = {
  loadMovies: loadMovies,
  loadPeople: loadPeople,
};
