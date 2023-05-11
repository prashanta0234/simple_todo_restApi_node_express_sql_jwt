const todoHandler = require("../model/todosModel");

const handleFetchTodos = async (req, res) => {
  const { user_id } = req;
  const data = await todoHandler.fetchTodos({ user_id });
  res.status(200).send(data);
};

const handleAddTodo = async (req, res) => {
  const { body, user_id } = req;
  const todo = await todoHandler.createTodo({ todo: body, user_id: user_id });
  res.status(200).send(todo);
};

const handleDeleteTodo = async (req, res) => {
  const { body, user_id } = req;
  const { id } = body;
  const todo = await todoHandler.deleteTodo({ todo_id: id, user_id });
  res.status(200).send(todo);
};

const handleUpdateTodo = async (req, res) => {
  const { body, user_id } = req;
  const todo = await todoHandler.updateTodo({ todo: body, user_id });
  res.status(200).send(todo);
};

const handleTodoById = async (req, res) => {
  const { params, user_id } = req;
  const { id } = params;
  console.log(params);
  const todo = await todoHandler.fetchTodo({ todo_id: id, user_id });
  res.status(200).send(todo);
};

module.exports = {
  handleFetchTodos,
  handleAddTodo,
  handleDeleteTodo,
  handleUpdateTodo,
  handleTodoById,
};
