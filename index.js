const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const { handleError } = require("./utils/errors");
const itemsRoutes = require("./routes/items");
const port = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use("/api/items", itemsRoutes);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
app.use(handleError);

app.listen(port);
