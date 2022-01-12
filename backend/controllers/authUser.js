const db = require("../db/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateToken = (userid) =>
  jwt.sign({ id: userid }, "Здесь секретное слово", {
    expiresIn: "1h",
  });
exports.AuthUser = (req, res) => {
  try {
    const user = db.dbUsers.find(
      ({ username }) => username === req.body.username
    );
    user && bcrypt.compareSync(req.body.password, user.password)
      ? res.status(200).send({
          id: user.id,
          username: user.username,
          avatar: user.avatar,
          token: generateToken(user.id),
        })
      : res.status(401).send("error");
  } catch (e) {
    res.status(400).send("error");
  }
};
