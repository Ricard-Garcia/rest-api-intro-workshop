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
  PASSWORD_ENCRYPTED_SALT,
} = process.env;

// Config object
const CONFIG = {
  production: {
    app: {
      port: PORT || 4000,
    },
    db: {
      url: MONGO_DB_URL_PRODUCTION,
    },
    encrypt: {
      secret: PASSWORD_ENCRYPTED_SALT,
    },
  },
  development: {
    app: {
      port: PORT || 4000,
    },
    db: {
      url: MONGO_DB_URL_DEVELOPMENT,
    },
    encrypt: {
      secret: PASSWORD_ENCRYPTED_SALT,
    },
  },
  test: {
    app: {
      port: PORT || 4000,
    },
    db: {
      url: MONGO_DB_URL_TEST,
    },
    encrypt: {
      secret: PASSWORD_ENCRYPTED_SALT,
    },
  },
};

module.exports = {
  config: CONFIG[NODE_ENV],
};
