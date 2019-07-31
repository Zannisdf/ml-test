const mercadoLibre = require("../services/mercadolibre");
const author = require("../constants/author");

exports.getItems = async (req, res, next) => {
  const LIMIT = 4;
  const query = req.query.q;
  const [err, items] = await mercadoLibre.getItems(query, author, LIMIT);
  if (err) {
    next(err);
  } else {
    res.status(200).send(items);
  }
};
