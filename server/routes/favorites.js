const Movie = require("../models/movie");
module.exports = app => {
  const movieidsArray = [];

  app.get("/api/favorites/movies", async (req, res) => {
    try {
      const movies = await Movie.find({}).sort([["_id", -1]]);
      res.status(200).send(movies);
    } catch (err) {
      res.status(400).send("Could get your favorites");
    }
  });

  app.post("/api/favorites/movies", async (req, res) => {
    try {
      const movie = new Movie(req.body);
      await movie.save();
      res.status(200).send(movie);
    } catch (err) {
      if (err.code === 11000) return;
      console.log(err.code);

      res.status(400).send("Could not save the movie to favorites");
    }
  });

  app.delete("/api/favorites/movies/:id", async (req, res) => {
    const { id } = req.params;
    try {
      await Movie.findByIdAndRemove(id);
      res.status(200).send(id);
    } catch (err) {
      res.status(400).send("Could not delete the movie from favorites");
    }
  });
};
