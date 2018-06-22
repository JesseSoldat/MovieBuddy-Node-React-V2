import React, { Component } from "react";
import { connect } from "react-redux";

import { startGetMovies } from "../../actions/moviedb";
import Card from "../../components/Card";

class Search extends Component {
  componentDidMount() {
    this.props.startGetMovies("xmen");
  }

  addToFavorites = (id, e) => {
    e.preventDefault();
    console.log(id);
  };

  renderCards = () =>
    this.props.movies.map(movie => {
      const { title, poster_path, id } = movie;
      return (
        <Card
          key={id}
          id={id}
          image={poster_path}
          title={title}
          add={this.addToFavorites}
        />
      );
    });

  render() {
    const { movies } = this.props;
    console.log(movies);

    return (
      <div className="container">
        <h1>Search</h1>
        <div className="d-flex flex-wrap">{this.renderCards()}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ moviedb }) => ({
  movies: moviedb.movies
});

export default connect(
  mapStateToProps,
  { startGetMovies }
)(Search);
