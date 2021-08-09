const { tokenGenerator } = require("../services/token-generator");
const { sessionData } = require("../session/session");
const db = require("../models");

// /users/
// GET users
async function getAll(req, res, next) {
  try {
    const foundUsers = await db.User.find({});
    if (foundUsers.length != 0) {
      res.status(200).send({ message: "Loaded all users.", found: foundUsers });
    } else {
      res.status(200).send({ message: "No users registered." });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "Failed to get users.", error: error.message });
  }
}

// /users/:id
// GET user
async function getById(req, res, next) {
  const { id } = req.params;
  try {
    const foundPerson = await db.User.findById(id);
    res.status(200).send({
      message: `Loaded user with id ${id}`,
      found: foundPerson,
    });
  } catch (error) {
    res.status(500).send({
      message: "Failed to get user",
      error: error.message,
    });
  }
}

// PATCH user
async function updateById(req, res, next) {
  const { id } = req.params;
  try {
    const updatedPerson = await db.User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).send({
      message: `Updated user with id: ${id}.`,
      updated: updatedPerson,
    });
  } catch (error) {
    res.status(500).send({
      message: "Failed to update user.",
      error: error.message,
    });
  }
}
// DELETE user
async function deleteById(req, res, next) {
  const { id } = req.params;
  try {
    const deletedPerson = await db.User.deleteOne({ _id: id });

    res.status(200).send({
      message: `Deleted person with id: ${id}.`,
      deleted: deletedPerson,
    });
  } catch (error) {
    res.status(500).send({
      message: `Couldn't delete user with id ${id}`,
      error: error.message,
    });
  }
}

// Refresh token
async function refreshToken(req, res, next) {
  const { id, refreshToken } = req.body;

  try {
    // Check if the token has expired
    console.log(sessionData);
    console.log(refreshToken in sessionData.refreshTokens);
    console.log(sessionData.refreshTokens[refreshToken] == id);
    if (
      refreshToken in sessionData.refreshTokens &&
      sessionData.refreshTokens[refreshToken] == id
    ) {
      const accessToken = tokenGenerator(id);

      return res.status(200).send({
        message: `Registered user ${id}`,
        accessToken: accessToken,
      });
    } else {
      return res
        .status(500)
        .send({ message: "Something went wrong with refresh!" });
    }
  } catch (error) {
    return res.status(500).send({
      error: error.message,
    });
  }
}

module.exports = {
  getAll: getAll,
  getById: getById,
  updateById: updateById,
  deleteById: deleteById,
  refreshToken: refreshToken,
};
