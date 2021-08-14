const Router = require("express").Router;
const { authMiddleware } = require("../middleware");

// const { userExists } = require("../middleware");
const { AuthController } = require("../controllers");

// Declaring the router
const AuthRouter = Router();

// POST user
AuthRouter.post("/register", authMiddleware, AuthController.signUp);
// POST user
AuthRouter.post("/authenticate", authMiddleware, AuthController.signIn);

module.exports = { AuthRouter: AuthRouter };
