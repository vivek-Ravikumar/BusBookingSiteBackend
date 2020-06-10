const express = require("express");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("from User Router");
});

module.exports= userRouter;
