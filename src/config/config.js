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
      url: MONGO_DB_URL_PRODUCTION,
    },
    encrypt: {
      secret: PASSWORD_ENCRYPTED_SECRET,
    },
  },
  development: {
    app: {
      port: PORT,
    },
    db: {
      url: MONGO_DB_URL_DEVELOPMENT,
    },
    encrypt: {
      secret: PASSWORD_ENCRYPTED_SECRET,
    },
  },
  test: {
    app: {
      port: PORT,
    },
    db: {
      url: MONGO_DB_URL_TEST,
    },
    encrypt: {
      secret: PASSWORD_ENCRYPTED_SECRET,
    },
  },
};

module.exports = {
  config: CONFIG[NODE_ENV],
};
