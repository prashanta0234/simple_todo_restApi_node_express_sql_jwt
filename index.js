const express = require("express");
const bodyParser = require("body-parser");

const todoRouter = require("./routers/todoRouter");
const userRouter = require("./routers/userRouter");
const authMiddleware = require("./utils/middlewares/auth");

const app = express();

// app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", userRouter);

app.use(authMiddleware);
app.use("/api", todoRouter);

app.use("/", (req, res, next) => {
  res.send("I am running fine");
});

app.listen(3001);
