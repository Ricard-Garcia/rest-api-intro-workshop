const { MovieController, CreditsController } = require("../controllers");
const { verifyToken } = require("../middleware");
const Router = require("express").Router;

// Declaring the router
const MovieRouter = Router();

// GET all credits
MovieRouter.get("/:id/credits", verifyToken, CreditsController.getAll);

// GET movie
MovieRouter.get("/:id", verifyToken, MovieController.getById);
// PATCH movie
MovieRouter.patch("/:id", verifyToken, MovieController.updateById);
// DELETE movie
MovieRouter.delete("/:id", verifyToken, MovieController.deleteById);

// POST movie
MovieRouter.post("/", verifyToken, MovieController.register);
// GET movies
MovieRouter.get("/", verifyToken, MovieController.getAll);

module.exports = {
  MovieRouter: MovieRouter,
};
