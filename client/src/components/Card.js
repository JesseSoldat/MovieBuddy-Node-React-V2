import React, { Component } from "react";
import { Link } from "react-router-dom";

import truncateText from "../utils/truncateText";

class Card extends Component {
  renderImage = image =>
    image ? `http://image.tmdb.org/t/p/w500/${image}` : "/images/noFilm.png";

  renderBtn = (parent, id, add, remove) =>
    parent === "search" ? (
      <a href="" className="btn btn-primary" onClick={e => add(id, e)}>
        <span className="mr-2">Favorite</span>
        <i className="fas fa-heart" />
      </a>
    ) : (
      <a href="" className="btn btn-danger" onClick={e => remove(id, e)}>
        <span className="mr-2">Trash</span>
        <i className="fas fa-trash" />
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
            <span className="mr-2">Details</span>
            <i className="fas fa-clipboard-list" />
          </Link>
          {this.renderBtn(parent, id, add, remove)}
        </div>
      </div>
    );
  }
}

export default Card;
