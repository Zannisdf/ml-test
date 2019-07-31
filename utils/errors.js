exports.serverError = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json("Internal server error");
};
