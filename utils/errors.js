exports.handleError = (err, req, res, next) => {
  console.error(err.stack);
  if (err.code && err.code >= 400 && err.code < 500) {
    res.status(err.code).json({
      code: err.code,
      message: err.message
    });
  } else {
    res.status(500).json("Internal server error");
  }
};

exports.notFound = () => {
  const error = new Error();
  error.message = "Resource not found";
  error.code = 404;
  throw error;
};
