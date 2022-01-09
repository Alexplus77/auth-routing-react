const express = require("express");
const routers = require("./routers/routers");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 8080;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routers);

app.listen(port, () => console.log(`Server has been started on port: ${port}`));
