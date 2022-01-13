const db = require("../db/db");
const uuid = require("uuid");
const bcrypt = require("bcryptjs");
exports.Registration = (req, res) => {
  try {
    if (!db.dbUsers.some(({ username }) => username === req.body.username)) {
      db.dbUsers.push({
        ...req.body,
        id: uuid.v4(),
        password: bcrypt.hashSync(req.body.password, 10),
        avatar: "https://1avatara.ru/pic/men/man0003.jpg",
      });
      res.status(200).send("ok");
    } else {
      res.status(409).send("error");
    }
  } catch (e) {
    res.status(400).send("error");
  }
};
