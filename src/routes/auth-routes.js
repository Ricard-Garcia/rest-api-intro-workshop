const Router = require("express").Router;
const { userExists } = require("../middleware");
const { AuthController } = require("../controllers");

// Declaring the router
const AuthRouter = Router();

// POST user
AuthRouter.post("/register", userExists, AuthController.signUp);
// POST user
AuthRouter.post("/authenticate", AuthController.signIn);

module.exports = { AuthRouter: AuthRouter };
