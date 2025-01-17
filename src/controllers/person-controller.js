const { deletePerson } = require("../utils/credits-update");
const db = require("../models");

// /persons/
// POST person
async function register(req, res, next) {
  const { name, dateOfBirth, placeOfBirth, roles } = req.body;
  try {
    const registeredPerson = await db.Person.create({
      name: name,
      dateOfBirth: dateOfBirth,
      placeOfBirth: placeOfBirth,
      roles: roles,
    });
    res.status(200).send({
      message: `Registered person with name ${name}.`,
      registered: registeredPerson,
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Failed to insert person. ", error: error.message });
  }
}

// GET persons
async function getAll(req, res, next) {
  try {
    const foundPeople = await db.Person.find({});
    if (foundPeople.length != 0) {
      res
        .status(200)
        .send({ message: "Loaded all people.", found: foundPeople });
    } else {
      res.status(200).send({ message: "No person registered." });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "Failed to get persons.", error: error.message });
  }
}

// /persons/:id
// GET person
async function getById(req, res, next) {
  const { id } = req.params;
  try {
    const foundPerson = await db.Person.findById(id);
    res.status(200).send({
      message: `Loaded person with id: ${id}.`,
      found: foundPerson,
    });
  } catch (error) {
    res.status(500).send({
      message: "Failed to get person.",
      error: error.message,
    });
  }
}

// PATCH person
async function updateById(req, res, next) {
  const { id } = req.params;
  try {
    const updatedPerson = await db.Person.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).send({
      message: `Updated person with id: ${id}.`,
      updated: updatedPerson,
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Failed to update person.", error: error.message });
  }
}

// DELETE person
async function deleteById(req, res, next) {
  const { id } = req.params;
  try {
    const deletedPerson = await db.Person.deleteOne({ _id: id });

    const movies = await db.Movie.find({});
    deletePerson(movies, id);

    res.status(200).send({
      message: `Deleted person with id ${id}.`,
      deleted: deletedPerson,
    });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Failed to delete person.", error: error.message });
  }
}

module.exports = {
  register: register,
  getAll: getAll,
  getById: getById,
  updateById: updateById,
  deleteById: deleteById,
};
