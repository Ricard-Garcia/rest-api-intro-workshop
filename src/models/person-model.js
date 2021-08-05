// Imports
const dotenv = require("dotenv");

dotenv.config();

const {
  NODE_ENV = "development",
  MONGO_DB_URL_PRODUCTION,
  MONGO_DB_URL_DEVELOPMENT,
  MONGO_DB_URL_TEST,
  PORT,
  API_KEY,
  PASSWORD_ENCRYPTED_SECRET,
} = process.env;

// Config object
const CONFIG = {
  production: {
    app: {
      port: PORT,
    },
    db: {
      url: MONGO,
    },
  },
};

module.exports = {
  config: CONFIG[NODE_ENV],
};
