const express = require("express");
const userHandler = require("../controller/userController");
const userRouter = express.Router();

// user
userRouter.post("/signup", userHandler.signUpHandler);
userRouter.post("/login", userHandler.loginHandler);

module.exports = userRouter;
