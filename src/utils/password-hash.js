const bcrypt = require("bcrypt");
const { config } = require("../config");

async function encryptPassword(password) {
  const salt = await bcrypt.genSalt(Number(config.encrypt.secret));
  const encryptedPassword = await bcrypt.hash(password, salt);
  return encryptedPassword;
}

module.exports = { encryptPassword: encryptPassword };
