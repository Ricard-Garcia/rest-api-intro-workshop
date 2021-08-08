const Router = require("express").Router;
const { UserController } = require("../controllers");

// Declaring the router
const AccountRouter = Router();

// POST user
AccountRouter.post("/register", UserController.signUp);

module.exports = { AccountRouter };
