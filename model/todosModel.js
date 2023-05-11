const db = require("../utils/database");

const fetchTodos = async ({ user_id }) => {
  return db
    .execute(`SELECT * FROM todos WHERE user_id=${user_id};`)
    .then((res) => {
      return res[0];
    });
};

const createTodo = async ({ todo, user_id }) => {
  await db.execute(
    `INSERT INTO todos (title, description, date_time, user_id) VALUES ('${todo.title}', '${todo.des}', NOW(), ${user_id});`,
  );
  return db
    .execute(`SELECT * FROM todos WHERE user_id=${user_id};`)
    .then((res) => {
      return res[0];
    });
};

const deleteTodo = async ({ todo_id, user_id }) => {
  await db.execute(
    `DELETE FROM todos WHERE id=${todo_id} AND user_id=${user_id};`,
  );
  return db
    .execute(`SELECT * FROM todos WHERE user_id=${user_id};`)
    .then((res) => {
      return res[0];
    })
    .then((res) => {
      return res[0];
    });
};

const updateTodo = async ({ todo, user_id }) => {
  await db.execute(
    `UPDATE todos SET title='${todo.title}',description='${todo.des}' WHERE id=${todo.id} AND user_id=${user_id}; `,
  );
  return db
    .execute(`SELECT * FROM todos WHERE user_id=${user_id};`)
    .then((res) => {
      return res[0];
    })
    .then((res) => {
      return res[0];
    });
};

const fetchTodo = async ({ todo_id, user_id }) => {
  return db
    .execute(`SELECT * from todos  WHERE id=${todo_id} AND user_id=${user_id};`)
    .then((res) => {
      return res[0];
    })
    .then((res) => {
      return res[0];
    });
};

module.exports = {
  fetchTodos,
  createTodo,
  deleteTodo,
  updateTodo,
  fetchTodo,
};
