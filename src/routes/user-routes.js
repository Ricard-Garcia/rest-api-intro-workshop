const { UserController } = require("../controllers");
const { verifyToken } = require("../middleware");
const Router = require("express").Router;

// Declaring the router
const UserRouter = Router();

// GET user
UserRouter.get("/:id", verifyToken, UserController.getById);
// PATCH user
UserRouter.patch("/:id", verifyToken, UserController.updateById);
// DELETE user
UserRouter.delete("/:id", verifyToken, UserController.deleteById);

// GET users
UserRouter.get("/", UserController.getAll);

module.exports = {
  UserRouter: UserRouter,
};
