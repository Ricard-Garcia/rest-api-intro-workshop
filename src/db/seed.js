const { seedUsers, seedPeople, seedMovies } = require("../db/data");

async function loadUsers(db) {
  await db.User.deleteMany({});
  const defaultUsers = await seedUsers();
  await db.User.insertMany(defaultUsers);
}

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
  loadUsers: loadUsers,
  loadPeople: loadPeople,
  loadMovies: loadMovies,
};
