const userHandler = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const passwordSalt = 10;
const secretCode = "todoApps";

const signUpHandler = async (req, res) => {
  const { email, name, password } = req.body;

  // check existing user
  // make hash password
  // user creation
  // token generate

  try {
    const isExists = await userHandler.isExists({ email });

    if (isExists) {
      return res.status(400).json({ message: "User already exists." });
    }
    let hashPassword = await bcrypt.hash(password, passwordSalt);

    const createUser = await userHandler.signupModel({
      email: email,
      password: hashPassword,
      name: name,
    });

    const token = jwt.sign(
      { email: createUser.email, id: createUser.id },
      secretCode,
    );
    res.status(201).send({ user: createUser[0], token });
  } catch (e) {
    console.log(e.message);
    return res.status(500).send("internal server error");
  }
};

const loginHandler = async (req, res) => {
  const { email, password } = req.body;

  try {
    const isExists = await userHandler.isExists({ email });

    if (!isExists) {
      return res.status(400).json({ message: "You are not register yet." });
    }

    const valid = await bcrypt.compare(password, isExists.password);
    if (!valid) {
      return res.send("wrong password");
    }
    const token = jwt.sign(
      { email: isExists.email, id: isExists.id },
      secretCode,
    );
    res.status(200).send({
      user: {
        name: isExists.name,
        email: isExists.email,
        id: isExists.id,
      },
      token,
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).send("internal server error");
  }
};

module.exports = { signUpHandler, loginHandler };
