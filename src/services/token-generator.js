const { config } = require("../config");
const jwt = require("jsonwebtoken");

function tokenGenerator(userId) {
  const token = jwt.sign({ id: userId }, config.secret.keyword, {
    expiresIn: "180s",
  });

  return token;
}

module.exports = { tokenGenerator: tokenGenerator };
