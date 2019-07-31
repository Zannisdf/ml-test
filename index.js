const express = require("express");
const { handleError, notFound } = require("./utils/errors");
const itemsRoutes = require("./routes/items");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use("/api/items", itemsRoutes);

app.use("/", (req, res, next) => {
  notFound();
  next();
});

app.use(handleError);

app.listen(8080);
