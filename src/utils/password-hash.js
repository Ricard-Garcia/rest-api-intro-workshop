const bcrypt = require("bcrypt");
const { config } = require("../config");

async function encryptPassword(password) {
  const salt = await bcrypt.genSalt(Number(config.encrypt.salt));
  const encryptedPassword = await bcrypt.hash(password, salt);
  return encryptedPassword;
}

async function comparePassword(password, hash) {
  const isSame = await bcrypt.compare(password, hash);
  return isSame;
}

module.exports = {
  encryptPassword: encryptPassword,
  comparePassword: comparePassword,
};
