const express = require("express");
const errors = require("./utils/errors");
const itemsRoutes = require("./routes/items");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use("/api/items", itemsRoutes);

app.use(errors.serverError);

app.listen(8080);
