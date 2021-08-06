const Router = require("express").Router;
const { PersonController } = require("../controllers");

// Declaring the router
const PersonRouter = Router();

// POST person
PersonRouter.post("/", PersonController.register);
// GET persons
PersonRouter.get("/", PersonController.getPersons);

// GET person
PersonRouter.get("/:id", PersonController.getById);

module.exports = {
  PersonRouter: PersonRouter,
};
