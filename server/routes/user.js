const User = require("../models/user");
const isAuth = require("../middlewares/isAuth");

module.exports = app => {
  app.post("/auth/register", async (req, res) => {
    const { email, password } = req.body;
    const newUser = new User({ email, password });

    try {
      await newUser.save();
      const token = await newUser.generateAuthToken();
      res.header(token).send(newUser);
    } catch (err) {
      res.status(400).send(err);
    }
  });

  app.post("/auth/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findByCredentials(email, password);
      const token = await user.generateAuthToken();
      res.header("x-auth", token).send(user);
    } catch (err) {
      res.status(400).send(err);
    }
  });

  app.delete("/auth/logout", isAuth, async (req, res) => {
    const { user, token } = req;
    console.log(user, token);

    user.tokens = user.tokens.filter(t => t.token !== token);
    try {
      await user.save();
      res.send(user);
    } catch (err) {
      res.status(400).send(err);
    }
  });
};
