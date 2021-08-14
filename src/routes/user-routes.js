const { UserController } = require("../controllers");
const { authMiddleware } = require("../middleware");
const Router = require("express").Router;

// Declaring the router
const UserRouter = Router();

// Firebase middleware
UserRouter.use("/", authMiddleware);

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
