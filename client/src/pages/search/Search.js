import React, { Component } from "react";
import { connect } from "react-redux";

import { startGetMovies } from "../../actions/moviedb";

class Search extends Component {
  componentDidMount() {
    this.props.startGetMovies("xmen");
  }

  render() {
    const { movies } = this.props;
    console.log(movies);

    return (
      <div>
        <h1>Search</h1>
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
