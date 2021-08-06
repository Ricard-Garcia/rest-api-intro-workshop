const Router = require("express").Router;
const { PersonController } = require("../controllers");

// Declaring the router
const PersonRouter = Router();

// GET person
PersonRouter.get("/:id", PersonController.getById);
// PATCH person
PersonRouter.patch("/:id", PersonController.updateById);
// DELETE person
PersonRouter.delete("/:id", PersonController.deleteById);

// POST person
PersonRouter.post("/", PersonController.register);
// GET persons
PersonRouter.get("/", PersonController.getAll);

module.exports = {
  PersonRouter: PersonRouter,
};
