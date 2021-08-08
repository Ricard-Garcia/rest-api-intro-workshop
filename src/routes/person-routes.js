const { PersonController } = require("../controllers");
const { verifyToken } = require("../middleware");
const Router = require("express").Router;

// Declaring the router
const PersonRouter = Router();

// GET person
PersonRouter.get("/:id", verifyToken, PersonController.getById);
// PATCH person
PersonRouter.patch("/:id", verifyToken, PersonController.updateById);
// DELETE person
PersonRouter.delete("/:id", verifyToken, PersonController.deleteById);

// POST person
PersonRouter.post("/", verifyToken, PersonController.register);
// GET persons
PersonRouter.get("/", verifyToken, PersonController.getAll);

module.exports = {
  PersonRouter: PersonRouter,
};
