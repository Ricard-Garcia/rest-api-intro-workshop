const db = require("../models");

// /persons/
// POST person
async function register(req, res, next) {
  try {
    const { name, dateOfBirth, placeOfBirth, roles } = req.body;
    const { _id } = await db.Person.create({
      name: name,
      dateOfBirth: dateOfBirth,
      placeOfBirth: placeOfBirth,
      roles: roles,
    });
    return res
      .status(200)
      .send({ message: `Inserted person with name ${name}`, id: _id });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Failed to insert person. ", error: error });
  }
}

// GET persons
async function getPersons(req, res, next) {
  try {
    const persons = await db.Person.find({});
    res.status(200).send(persons);
    return;
  } catch (error) {
    res.status(500).send({ message: "Failed to get persons. ", error: error });
  }
}

// /persons/:id
// GET person
async function getById(req, res, next) {
  try {
    const { id } = req.params;
    console.log("Request body: ", req.body);
    const foundPerson = await db.Person.find({ _id: id }).exec();
    return res
      .status(200)
      .send({ message: `Get person with id: ${id}`, foundPerson });
  } catch (error) {
    return res.status(500).send({ message: "Failed to get person." });
  }
}

// PATCH person
async function patchById(req, res, next) {
  try {
    return res.code(200).send({ message: `Updated person with id ${id}.` });
  } catch (error) {
    return res.code(500).send({ message: "Failed to update person." });
  }
}

// DELETE person
async function deleteById(req, res, next) {
  try {
    return res.code(200).send({ message: `Deleted person with id ${id}.` });
  } catch (error) {
    return res.code(500).send({ message: "Failed to delete person." });
  }
}

module.exports = {
  register: register,
  getPersons: getPersons,
  getById: getById,
};
