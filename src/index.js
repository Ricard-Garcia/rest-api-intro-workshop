// Imports
const { app } = require("./server");
const { config } = require("./config");
const { dbConnection } = require("./db/connect");
const { loadUsers, loadPeople, loadMovies } = require("./db/seed");
const db = require("./models");

dbConnection().then(async function onConnection() {
  // Populating database
  // await loadUsers(db);
  // await loadPeople(db);
  // await loadMovies(db);

  app.listen(config.app.port, () => {
    console.log(`Running at port ${config.app.port}!\n`);
  });
});
