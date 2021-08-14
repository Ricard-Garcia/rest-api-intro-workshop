const db = require("../models");

// /account/register
// POST user
async function signUp(req, res, next) {
  console.log("Request user", req.user);

  const { uid, email } = req.user;

  try {
    const user = await db.User.findOne({ email: email });

    if (user) {
      return res.sendStatus(200);
    }

    const newUser = await db.User.create({
      firebase_id: uid,
      email: email,
    });

    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
}

// /account/authenticate
async function signIn(req, res, next) {
  const userFound = await db.User.findOne({ email: req.body.email });

  if (!userFound) {
    res.status(500).send({ message: "User not found." });
  } else {
    if (!matchPassword) {
      res.status(401).send({ message: "Not valid password" });
    } else {
      // console.log("Already logged user token: ", accessToken);

      res.status(200).send({
        matchPassword: matchPassword,
        found: userFound,
        accessToken: accessToken,
        refreshToken: refreshToken,
        is_admin: userFound.is_admin,
      });
    }
  }
}

module.exports = {
  signUp: signUp,
  signIn: signIn,
};
