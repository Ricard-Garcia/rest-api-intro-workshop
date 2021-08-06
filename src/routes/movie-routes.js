const Router = require("express").Router;
const { MovieController } = require("../controllers");

// Declaring the router
const MovieRouter = Router();

// GET movie
MovieRouter.get("/:id", MovieController.getById);
// PATCH movie
MovieRouter.patch("/:id", MovieController.updateById);
// DELETE movie
MovieRouter.delete("/:id", MovieController.deleteById);

// POST movie
MovieRouter.post("/", MovieController.register);
// GET movies
MovieRouter.get("/", MovieController.getAll);

module.exports = {
  MovieRouter: MovieRouter,
};
