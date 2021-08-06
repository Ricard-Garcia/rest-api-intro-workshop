// Imports
const { app } = require("./server");
const { config } = require("./config");
const { dbConnection } = require("./db/connect");
const { loadMovies, loadPeople } = require("./db/seed");

dbConnection().then(async function onConnection() {
  // Populating database
  // await loadMovies();
  // await loadPeople();

  app.listen(config.app.port, () => {
    console.log(`Running at port ${config.app.port}!\n`);
  });
});
