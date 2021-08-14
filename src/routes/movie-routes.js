const { MovieController, CreditsController } = require("../controllers");
const { authMiddleware } = require("../middleware");
const Router = require("express").Router;

// Declaring the router
const MovieRouter = Router();

MovieRouter.use("/", authMiddleware);

// GET all credits
MovieRouter.get("/:id/credits", CreditsController.getAll);

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
