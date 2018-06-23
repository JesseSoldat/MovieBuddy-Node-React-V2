import React, { Component } from "react";
import { Link } from "react-router-dom";

import truncateText from "../utils/truncateText";

class Card extends Component {
  state = {
    disabled: false
  };

  renderImage = image =>
    image ? `http://image.tmdb.org/t/p/w500/${image}` : "/images/noFilm.png";

  disableAddBtn = (movie, e) => {
    e.preventDefault();
    if (this.state.disabled) {
      console.log("disabled");
      return;
    }
    this.setState({ disabled: true });
    this.props.add(movie);
  };

  disableDeleteBtn = (movie, e) => {
    e.preventDefault();
    if (this.state.disabled) {
      console.log("disabled");
      return;
    }
    this.setState({ disabled: true });
    // this.props.remove(movie);
  };

  renderDeleteBtn = movie => {
    return (
      <a
        href=""
        className="btn btn-danger"
        onClick={e => this.disableDeleteBtn(movie, e)}
      >
        <span>
          <i className="fas fa-trash mr-2" />
          Delete
        </span>
      </a>
    );
  };

  renderAddBtn = movie => {
    return (
      <a
        href=""
        className="btn btn-primary"
        onClick={e => this.disableAddBtn(movie, e)}
      >
        <i className="fas fa-heart mr-2" />
        Favorite
      </a>
    );
  };

  renderLoadingBtn = string => {
    return (
      <span>
        <i className="fas fa-spinner fa-spin mr-2" />
        {string}
      </span>
    );
  };

  render() {
    const { _id, id, image, title, parent } = this.props;
    const { disabled } = this.state;
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
          <Link
            to={`/movie-details/${id}?parent=${parent}`}
            className="btn btn-secondary"
          >
            <i className="fas fa-clipboard-list mr-2" />
            <span>Details</span>
          </Link>

          {/* {(parent === "search" && disabled = false) ? this.renderAddBtn({ id, title, image }) : this.renderLoadingBtn("Favorite")} */}

          {parent === "favorites" && disabled !== true
            ? this.renderDeleteBtn({ _id, id, title, image })
            : this.renderLoadingBtn("Delete")}
        </div>
      </div>
    );
  }
}

export default Card;
