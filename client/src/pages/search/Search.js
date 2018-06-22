import React, { Component } from "react";
import { connect } from "react-redux";

import { startGetMovies } from "../../actions/moviedb";
import SearchBox from "../../components/SearchBox";
import Card from "../../components/Card";

class Search extends Component {
  componentDidMount() {}

  searchMovies = text => {
    this.props.startGetMovies(text);
  };

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
          parent="search"
          add={this.addToFavorites}
        />
      );
    });

  render() {
    return (
      <div className="container">
        <h1 className="text-center mb-3 mt-3 display-4">Search Movies</h1>
        <SearchBox searchMovies={this.searchMovies} />
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
