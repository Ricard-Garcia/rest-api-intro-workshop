const mongoose = require("mongoose");
const { config } = require("../config");

function dbConnection() {
  return mongoose.connect(config.db.url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
}

module.exports = {
  dbConnection: dbConnection,
};
