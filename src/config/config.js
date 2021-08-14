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
    client: {
      URL: process.env.CLIENT_URL || "http://localhost:3000",
    },
    db: {
      url: MONGO_DB_URL_PRODUCTION,
    },
    encrypt: {
      salt: PASSWORD_ENCRYPTED_SALT,
    },
    secret: { keyword: SECRET },
    firebase: {
      certConfig: {
        type: process.env.TYPE,
        project_id: process.env.PROJECT_ID,
        private_key_id: process.env.PRIVATE_KEY_ID,
        private_key: process.env.PRIVATE_KEY,
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        auth_uri: process.env.AUTH_URI,
        token_uri: process.env.TOKEN_URI,
        auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X_509_CERT_URL,
        client_x509_cert_url: process.env.CLIENT_X_509_CERT_URL,
      },
    },
  },
  development: {
    app: {
      port: PORT || 4000,
    },
    client: {
      URL: process.env.CLIENT_URL || "http://localhost:3000",
    },
    db: {
      url: MONGO_DB_URL_DEVELOPMENT,
    },
    encrypt: {
      salt: PASSWORD_ENCRYPTED_SALT,
    },
    secret: { keyword: SECRET },
    firebase: {
      certConfig: {
        type: process.env.TYPE,
        project_id: process.env.PROJECT_ID,
        private_key_id: process.env.PRIVATE_KEY_ID,
        private_key: process.env.PRIVATE_KEY,
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        auth_uri: process.env.AUTH_URI,
        token_uri: process.env.TOKEN_URI,
        auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X_509_CERT_URL,
        client_x509_cert_url: process.env.CLIENT_X_509_CERT_URL,
      },
    },
  },
  test: {
    app: {
      port: PORT || 4000,
    },
    client: {
      URL: process.env.CLIENT_URL || "http://localhost:3000",
    },
    db: {
      url: MONGO_DB_URL_TEST,
    },
    encrypt: {
      salt: PASSWORD_ENCRYPTED_SALT,
    },
    secret: { keyword: SECRET },
    firebase: {
      certConfig: {
        type: process.env.TYPE,
        project_id: process.env.PROJECT_ID,
        private_key_id: process.env.PRIVATE_KEY_ID,
        private_key: process.env.PRIVATE_KEY,
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        auth_uri: process.env.AUTH_URI,
        token_uri: process.env.TOKEN_URI,
        auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X_509_CERT_URL,
        client_x509_cert_url: process.env.CLIENT_X_509_CERT_URL,
      },
    },
  },
};

module.exports = {
  config: CONFIG[NODE_ENV],
};
