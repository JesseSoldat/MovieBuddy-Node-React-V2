const User = require("../models/user");

const isAuth = async (req, res, next) => {
  const token = req.header("x-auth");
  console.log("isAuth");

  try {
    const user = await User.findByToken(token);
    console.log(user);

    if (!user) return Promise.reject();
    req.user = user;
    req.token = token;
    next();
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = isAuth;
