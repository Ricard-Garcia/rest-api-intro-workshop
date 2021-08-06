const db = require("../models");

// /persons/
// POST person
async function register(req, res, next) {
  try {
    const { name, dateOfBirth, placeOfBirth, roles } = req.body;
    const registeredPerson = await db.Person.create({
      name: name,
      dateOfBirth: dateOfBirth,
      placeOfBirth: placeOfBirth,
      roles: roles,
    });
    return res.status(200).send({
      message: `Registered person with name ${name}`,
      registered: registeredPerson,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Failed to insert person. ", error: error });
  }
}

// GET persons
async function getPersons(req, res, next) {
  try {
    const foundPersons = await db.Person.find({});
    res.status(200).send({ found: foundPersons });
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
    const foundPerson = await db.Person.find({ _id: id }).exec();
    return res
      .status(200)
      .send({ message: `Get person with id: ${id}`, found: foundPerson });
  } catch (error) {
    return res.status(500).send({ message: "Failed to get person." });
  }
}

// PATCH person
async function updateById(req, res, next) {
  try {
    const { id } = req.params;
    const updatedPerson = await db.Person.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    return res.status(200).send({
      message: `Updated person with id ${id}.`,
      updated: updatedPerson,
    });
  } catch (error) {
    return res.status(500).send({ message: "Failed to update person." });
  }
}

// DELETE person
async function deleteById(req, res, next) {
  try {
    const { id } = req.params;
    console.log(req.params);
    const deletedPerson = await db.Person.deleteOne({ _id: id });
    return res.status(200).send({
      message: `Deleted person with id ${id}.`,
      deleted: deletedPerson,
    });
  } catch (error) {
    return res.status(500).send({ message: "Failed to delete person." });
  }
}

module.exports = {
  register: register,
  getPersons: getPersons,
  getById: getById,
  updateById: updateById,
  deleteById: deleteById,
};
