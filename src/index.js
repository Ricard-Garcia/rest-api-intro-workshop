// Imports
const { app } = require("./server");
const { config } = require("./config");
const { dbConnection } = require("./db/connect");

dbConnection().then(async function onConnection() {
  // Populating database
  // await loadDefaultData(db);

  app.listen(config.app.port, () => {
    console.log(`Running at port ${config.app.port}!\n`);
  });
});
