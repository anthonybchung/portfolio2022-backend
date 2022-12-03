const User = require("../models/User.model");

// GET: /api/v1/auth/register/
// decription: create user.
exports.register = async (req, res, next) => {
  const { name, password } = req.body;
  try {
    const user = await User.create({ name, password });

    const token = user.getSignedJwtToken();

    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

// POST: /api/v1/auth/login
// description: login user
exports.login = async (req, res, next) => {
  const { name, password } = req.body;
  try {
    const user = await User.findOne({ name }).select("+password");

    if (!user) {
      return next({ message: "error user" });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return next({ message: "Invalid user" });
    }

    const token = user.getSignedJwtToken();

    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};
