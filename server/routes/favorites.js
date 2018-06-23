const Movie = require("../models/movie");
module.exports = app => {
  app.post("/api/favorites/movies", async (req, res) => {
    try {
      const movie = new Movie(req.body);
      await movie.save();
      res.status(200).send(movie);
    } catch (err) {
      res.status(400).send("Could not save the movie");
    }
  });
};
