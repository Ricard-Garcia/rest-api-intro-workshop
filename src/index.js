// Imports
const { app } = require("./server");
const { config } = require("./config");
const { dbConnection } = require("./db/connect");

dbConnection().then(
  app.listen(config.app.port, () => {
    console.log(`Running at port ${config.app.port}!\n`);
  }),
);
