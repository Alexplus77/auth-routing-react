const jwt = require("jsonwebtoken");
const db = require("../db/db");
exports.NewsSingle = (req, res) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    jwt.verify(token, "Здесь секретное слово", (err, decoded) => {
      err && res.status(401).send("error");
      if (decoded) {
        const { username, avatar } = db.dbUsers?.find(
          ({ id }) => id === decoded.id
        );
        const newsSingle = db.dbNews.find(({ id }) => id === req.params.id);
        newsSingle
          ? res
              .status(200)
              .send({ article: newsSingle, user: { username, avatar } })
          : res.status(404).send("error");
      }
    });
  } catch (e) {
    res.status(400).send("error");
  }
};
