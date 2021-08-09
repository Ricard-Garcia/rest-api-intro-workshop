const { config } = require("../config");
const jwt = require("jsonwebtoken");

function tokenGenerator(userId) {
  const token = jwt.sign({ id: userId }, config.secret.keyword, {
    expiresIn: "1d",
  });

  return token;
}

module.exports = { tokenGenerator: tokenGenerator };
