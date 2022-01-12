const jwt = require("jsonwebtoken");
const db = require("../db/db");
const axios = require("axios");
const uuid = require("uuid");
exports.NewsList = (req, res) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    jwt.verify(token, "Здесь секретное слово", (err, decoded) => {
      err && res.status(401).send("error");
      if (decoded) {
        const { username, avatar } = db.dbUsers?.find(
          ({ id }) => id === decoded.id
        );
        axios
          .get(process.env.NEWS_URL)
          .then(({ data }) => {
            const articles = data.articles.map((elem) => {
              return { ...elem, id: uuid.v4() };
            });
            db.dbNews = articles;
            res.send({ articles: articles, user: { username, avatar } });
          })
          .catch((e) => res.status(400).send("error"));
      }
    });
  } catch (e) {
    res.status(400).send("error");
  }
};
