import React, { Component } from "react";
import { connect } from "react-redux";

import { startGetFavorites } from "../../actions/favorites";
import Card from "../../components/Card";

class favorites extends Component {
  componentDidMount() {
    this.props.startGetFavorites();
  }

  removeFromFavorites = (movie, e) => {
    e.preventDefault();
    console.log(movie);
  };

  renderCards = favorites => {
    console.log(favorites);

    return favorites.map(movie => {
      const { _id, title, poster_path, movieid } = movie;
      return (
        <Card
          key={movieid}
          _id={_id}
          id={movieid}
          image={poster_path}
          title={title}
          parent="favorites"
          remove={this.removeFromFavorites}
        />
      );
    });
  };

  render() {
    const { favorites } = this.props;
    return (
      <div className="container">
        <h1 className="text-center mb-3 mt-3 display-4">Favorite Movies</h1>
        <div className="d-flex flex-wrap">
          {favorites ? this.renderCards(favorites) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ favorites }) => ({
  favorites: favorites.favorites,
  loading: favorites.favorites,
  error: favorites.error
});

export default connect(
  mapStateToProps,
  { startGetFavorites }
)(favorites);
