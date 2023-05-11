const db = require("../utils/database");

const signupModel = async ({ email, password, name }) => {
  await db.execute(
    `INSERT INTO users (email,password,name) VALUES ('${email}','${password}','${name}');`,
  );
  return db
    .execute(`SELECT id ,email FROM users WHERE email='${email}';`)
    .then((res) => {
      return res[0];
    });
};

const isExists = ({ email }) => {
  return db
    .execute(`SELECT *  FROM users WHERE email = '${email}';`)
    .then((res) => {
      return res[0][0];
    });
};

module.exports = { signupModel, isExists };
