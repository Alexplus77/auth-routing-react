const express = require("express");
const router = express.Router();

const newSingle = require("../controllers/newsSingle");
const newList = require("../controllers/newsList");
const registration = require("../controllers/registration");
const authUser = require("../controllers/authUser");

router.get("/news/:id", newSingle.NewsSingle);

router.get("/news", newList.NewsList);

router.post("/registration", registration.Registration);

router.post("/auth", authUser.AuthUser);

module.exports = router;
