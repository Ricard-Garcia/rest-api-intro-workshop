const Router = require("express").Router;
const { AuthController } = require("../controllers");

// Declaring the router
const AuthRouter = Router();

// POST user
AuthRouter.post("/register", AuthController.signUp);
// POST user
AuthRouter.post("/authenticate", AuthController.signIn);

module.exports = { AuthRouter: AuthRouter };
