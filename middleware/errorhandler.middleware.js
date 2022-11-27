const errorHandler = (err, req, res, next) => {
  if (err.name == "ValidationError") {
    res.status(403).json("Validation Error");
  }

  if (err.code === 11000) {
    res.status(409).json({ error: "Duplicate data" });
  }

  if (err.name === "CastError") {
    res.status(422).json({ error: "Cast Error" });
  }
  res.status(403).json({ err });
};
module.exports = errorHandler;
