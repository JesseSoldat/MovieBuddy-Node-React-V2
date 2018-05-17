const { User } = require("../models/user");

const isAuth = async (req, res, next) => {
  const token = req.header("x-auth");

  try {
    const user = await User.findByToken(token);
    if (!user) return Promise.reject();
    req.user = user;
    req.token = token;
    next();
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = { isAuth };
