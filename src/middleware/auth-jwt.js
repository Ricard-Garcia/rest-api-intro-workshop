const jwt = require("jsonwebtoken");
const { config } = require("../config");
const db = require("../models");

async function verifyToken(req, res, next) {
  const token = req.headers["access-token"];

  if (!token) {
    res.status(403).send({ message: "No token provided." });
  } else {
    console.log(token);
    // Extrating the token
    const decodedToken = jwt.verify(token, config.secret.keyword);

    // Check if token=userId is true
    const foundUser = await db.User.findById(decodedToken.id, { password: 0 });
    if (!foundUser) {
      res.status(403).send({ message: "No user found." });
    } else if (!foundUser.is_admin) {
      res.status(403).send({ message: "Only admins can access." });
    } else {
      next();
    }
  }
}

module.exports = { verifyToken: verifyToken };
