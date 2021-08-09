const Router = require("express").Router;
const { userExists } = require("../middleware");
const { AuthController, UserController } = require("../controllers");

// Declaring the router
const AuthRouter = Router();

// POST user
AuthRouter.post("/register", userExists, AuthController.signUp);
// POST user
AuthRouter.post("/authenticate", AuthController.signIn);

// Refresh token
AuthRouter.post("/refresh-token", UserController.refreshToken);

module.exports = { AuthRouter: AuthRouter };
