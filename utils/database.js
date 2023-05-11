const database = require("mysql2");

const poll = database.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "simple_todo",
});

module.exports = poll.promise();
