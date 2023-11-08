const notFoundMiddleware = (req, res) =>
  res.status(404).send("Page does not exist");

module.exports = notFoundMiddleware;
