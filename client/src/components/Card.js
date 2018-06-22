import React, { Component } from "react";
import { Link } from "react-router-dom";

import truncateText from "../utils/truncateText";

class Card extends Component {
  renderImage = image =>
    image ? `http://image.tmdb.org/t/p/w500/${image}` : "/images/noFilm.png";

  render() {
    const { id, image, title, add } = this.props;
    return (
      <div className="card ml-auto mr-auto mb-3" style={{ width: "270px" }}>
        <img
          style={{ height: "400px" }}
          className="card-img-top"
          src={this.renderImage(image)}
          alt="poster"
        />
        <div className="card-body">
          <h6 className="card-title">{truncateText(title, 24)}</h6>
        </div>

        <div className="card-body">
          <Link to={`/movie-details/${id}`} className="card-link">
            Details
          </Link>
          <a href="" className="card-link" onClick={e => add(id, e)}>
            Favorite
          </a>
        </div>
      </div>
    );
  }
}

export default Card;
