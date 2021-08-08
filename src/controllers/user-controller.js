const db = require("../models");
const { encryptPassword } = require("../utils/password-hash");

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

    res.status(200).send({
      message: `Registered user ${name}`,
      registered: registeredUser,
    });
  } catch (error) {
    res.status(500).send({
      message: "Failed to register user",
      error: error.message,
    });
  }
}

// /users/
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

module.exports = {
  signUp: signUp,
  getAll: getAll,
  getById: getById,
  updateById: updateById,
  deleteById: deleteById,
};
