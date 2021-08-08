const db = require("../models");

async function userExists(req, res, next) {
  const { email } = req.body;

  const foundUser = await db.User.find({ email: email });

  if (foundUser.length > 0) {
    res.status(500).send({ message: "User already exists.", found: foundUser });
  } else {
    next();
  }
}

module.exports = { userExists: userExists };
