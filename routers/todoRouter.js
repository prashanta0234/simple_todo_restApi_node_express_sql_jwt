const express = require("express");
const todoHandler = require("../controller/todoController");

const todoRouter = express.Router();

todoRouter.get("/todos", todoHandler.handleFetchTodos);
todoRouter.get("/todos/:id", todoHandler.handleTodoById);
todoRouter.post("/todos", todoHandler.handleAddTodo);
todoRouter.delete("/todos", todoHandler.handleDeleteTodo);
todoRouter.patch("/todos", todoHandler.handleUpdateTodo);

module.exports = todoRouter;
