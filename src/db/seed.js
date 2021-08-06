const { seedMovies, seedPeople } = require("../db/data");

async function loadPeople(db) {
  await db.Person.deleteMany({});
  const defaultPeople = await seedPeople();
  await db.Person.insertMany(defaultPeople);
}

async function loadMovies(db) {
  await db.Movie.deleteMany({});
  const defaultMovies = await seedMovies(db);
  await db.Movie.insertMany(defaultMovies);
}
module.exports = {
  loadMovies: loadMovies,
  loadPeople: loadPeople,
};
