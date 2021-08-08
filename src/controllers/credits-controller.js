const db = require("../models");

async function getAll(req, res, next) {
  const { id } = req.params;
  try {
    const foundCredits = await db.Movie.find(
      { _id: id },
      { _id: 0, cast: 1, crew: 1 },
    );
    res.status(200).send({ message: "Loaded credits.", found: foundCredits });
  } catch (error) {
    res.status(500).send({
      message: "Failed to get credits.",
      error: error.message,
    });
  }
}

module.exports = {
  getAll: getAll,
};
