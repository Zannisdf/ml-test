const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { handleError, notFound } = require("./utils/errors");
const itemsRoutes = require("./routes/items");

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use("/api/items", itemsRoutes);

app.use("/", (req, res, next) => {
  notFound();
  next();
});

app.use(handleError);

app.listen(8080);
