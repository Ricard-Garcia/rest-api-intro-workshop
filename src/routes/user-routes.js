const Router = require("express").Router;
const { UserController } = require("../controllers");

// Declaring the router
const UserRouter = Router();

// GET user
UserRouter.get("/:id", UserController.getById);
// PATCH user
UserRouter.patch("/:id", UserController.updateById);
// DELETE user
UserRouter.delete("/:id", UserController.deleteById);

// GET users
UserRouter.get("/", UserController.getAll);

module.exports = {
  UserRouter: UserRouter,
};
