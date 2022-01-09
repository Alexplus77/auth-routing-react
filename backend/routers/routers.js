const express = require("express");
const router = express.Router();
const users = require("../db/db");
const axios = require("axios");
const uuid = require("uuid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/news", async (req, res) => {
  const token = req.headers["authorization"].split(" ")[1];

  jwt.verify(token, "Здесь секретное слово", (err, decoded) => {
    err && res.status(401).send("error");
    if (decoded) {
      const { username, avatar } = users.db?.find(
        ({ id }) => id === decoded.id
      );
      axios
        .get(process.env.NEWS_URL)
        .then(({ data }) => {
          const articles = data.articles.map((elem) => {
            return { ...elem, id: uuid.v4() };
          });
          res.send({ articles: articles, user: { username, avatar } });
        })
        .catch((e) => console.log(e));
    }
  });
});
router.post("/registration", (req, res) => {
  try {
    !users.db.some(({ username }) => username === req.body.username)
      ? users.db.push({
          ...req.body,
          id: uuid.v4(),
          password: bcrypt.hashSync(req.body.password, 10),
          avatar: "https://1avatara.ru/pic/men/man0003.jpg",
        })
      : res.status(409);
    res.send(users.db);
  } catch (e) {
    res.status(400);
  }
});
const generateToken = (userid) =>
  jwt.sign({ id: userid }, "Здесь секретное слово", {
    expiresIn: "1h",
  });

router.post("/auth", (req, res) => {
  try {
    const user = users.db.find(
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
    res.status(400);
  }
});

module.exports = router;
