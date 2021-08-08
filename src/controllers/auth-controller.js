const { encryptPassword, comparePassword } = require("../utils/password-hash");
const jwt = require("jsonwebtoken");
const { config } = require("../config");
const db = require("../models");

// /account/register
// POST user
async function signUp(req, res, next) {
  const { name, last_name, email, password, is_admin } = req.body;

  try {
    const encryptedPassword = await encryptPassword(password);

    const registeredUser = await db.User.create({
      name: name,
      last_name: last_name,
      email: email,
      password: encryptedPassword,
      is_admin: is_admin,
    });

    // User token
    console.log(registeredUser._id);
    const token = jwt.sign({ id: registeredUser._id }, config.secret.keyword, {
      expiresIn: 86400,
    });

    res.status(200).send({
      message: `Registered user ${name}`,
      registered: registeredUser,
      token: token,
    });
  } catch (error) {
    res.status(500).send({
      message: "Failed to register user",
      error: error.message,
    });
  }
}

// /account/authenticate
async function signIn(req, res, next) {
  const userFound = await db.User.findOne({ email: req.body.email });

  if (!userFound) {
    res.status(500).send({ message: "User not found." });
  } else {
    // Compare password
    const matchPassword = await comparePassword(
      req.body.password,
      userFound.password,
    );

    if (!matchPassword) {
      res.status(401).send({ message: "Not valid password" });
    } else {
      // Assigning token
      const token = jwt.sign({ id: userFound._id }, config.secret.keyword, {
        expiresIn: 86400,
      });

      res.status(200).send({
        matchPassword: matchPassword,
        found: userFound,
        token: token,
        is_admin: userFound.is_admin,
      });
    }
  }
}

module.exports = {
  signUp: signUp,
  signIn: signIn,
};
