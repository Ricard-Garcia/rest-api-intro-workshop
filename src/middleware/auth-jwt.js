const { config } = require("../config");
const jwt = require("jsonwebtoken");
const db = require("../models");

async function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    // Extrating the token
    const decodedToken = jwt.verify(
      authHeader.substr(7),
      config.secret.keyword,
    );

    // Check if token=userId is true
    const foundUser = await db.User.findById(decodedToken.id, { password: 0 });

    if (!foundUser) {
      res.status(403).send({ message: "No user found." });
    } else if (!foundUser.is_admin) {
      res.status(403).send({ message: "Only admins can access." });
    } else {
      next();
    }
  } else {
    res.status(403).send({ message: "No token provided." });
  }
}

module.exports = { verifyToken: verifyToken };
