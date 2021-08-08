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
  SECRET,
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
      salt: PASSWORD_ENCRYPTED_SALT,
    },
    secret: { keyword: SECRET },
  },
  development: {
    app: {
      port: PORT || 4000,
    },
    db: {
      url: MONGO_DB_URL_DEVELOPMENT,
    },
    encrypt: {
      salt: PASSWORD_ENCRYPTED_SALT,
    },
    secret: { keyword: SECRET },
  },
  test: {
    app: {
      port: PORT || 4000,
    },
    db: {
      url: MONGO_DB_URL_TEST,
    },
    encrypt: {
      salt: PASSWORD_ENCRYPTED_SALT,
    },
    secret: { keyword: SECRET },
  },
};

module.exports = {
  config: CONFIG[NODE_ENV],
};
