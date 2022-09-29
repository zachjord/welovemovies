function notFound(req, res, next) {
  next({ status: 404, message: "Invalid path." });
}

module.exports = notFound;
