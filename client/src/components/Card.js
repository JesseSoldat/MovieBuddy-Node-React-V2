import React, { Component } from "react";
import { Link } from "react-router-dom";

import truncateText from "../utils/truncateText";

class Card extends Component {
  renderImage = image =>
    image ? `http://image.tmdb.org/t/p/w500/${image}` : "/images/noFilm.png";

  renderBtn = (parent, movie, add, remove) =>
    parent === "search" ? (
      <a href="" className="btn btn-primary" onClick={e => add(movie, e)}>
        <i className="fas fa-heart mr-2" />
        <span>Favorite</span>
      </a>
    ) : (
      <a href="" className="btn btn-danger" onClick={e => remove(movie, e)}>
        <i className="fas fa-trash mr-2" />
        <span>Trash</span>
      </a>
    );

  render() {
    const { id, image, title, parent, add, remove } = this.props;
    return (
      <div className="card ml-auto mr-auto mb-3" style={{ width: "270px" }}>
        <img
          style={{ height: "400px" }}
          className="card-img-top"
          src={this.renderImage(image)}
          alt="poster"
        />
        <div className="card-body pb-0">
          <h6 className="card-title text-center">{truncateText(title, 24)}</h6>
        </div>

        <div className="card-body pt-1 d-flex flex-row justify-content-around">
          <Link to={`/movie-details/${id}`} className="btn btn-secondary">
            <i className="fas fa-clipboard-list mr-2" />
            <span>Details</span>
          </Link>
          {this.renderBtn(parent, { id, image, title }, add, remove)}
        </div>
      </div>
    );
  }
}

export default Card;
