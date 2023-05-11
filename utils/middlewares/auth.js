const jwt = require("jsonwebtoken");
const secretCode = "todoApps";

const auth = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      let user = jwt.verify(token, secretCode);
      req.user_id = user.id;
    } else {
      res.status(401).send("Unauthorized!");
    }
  } catch (e) {
    console.log(e.message);
    return res.status(401).send("Unauthorized");
  }
  next();
};

module.exports = auth;
