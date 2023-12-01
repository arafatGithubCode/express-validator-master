const userRouter = require("express").Router();

const {
  registerUser,
  loggedInUser,
} = require("../controllers/user.controller");
const {
  registerValidator,
  loggedInValidator,
} = require("../validation/auth.user");
const { runValidation } = require("../validation/validate.user");

userRouter.post("/register", registerValidator, runValidation, registerUser);
userRouter.post("/log-in", loggedInValidator, runValidation, loggedInUser);

module.exports = userRouter;
