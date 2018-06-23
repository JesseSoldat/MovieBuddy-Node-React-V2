const mongoose = require("mongoose");
const { Schema } = mongoose;

const MovieSchema = new Schema({
  movieid: {
    type: Number,
    required: true,
    trim: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  poster_path: {
    type: String
  }
});

const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;
