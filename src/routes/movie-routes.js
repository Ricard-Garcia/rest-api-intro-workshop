const Router = require("express").Router;
const { MovieController } = require("../controllers");

// Declaring the router
const MovieRouter = Router();

// POST movie
MovieRouter.post("/", MovieController.register);
// GET movies
MovieRouter.get("/", MovieController.getMovies);

module.exports = {
  MovieRouter: MovieRouter,
};
