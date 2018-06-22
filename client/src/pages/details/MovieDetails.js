import React, { Component } from "react";
import { connect } from "react-redux";

import { startGetMovie } from "../../actions/moviedb";
import Loading from "../../components/Loading";
import SingleField from "../../components/SingleField";

class MovieDetails extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.startGetMovie(id);
  }

  renderImage = image =>
    image ? `http://image.tmdb.org/t/p/w500/${image}` : "/images/noFilm.png";

  renderContent = movie => {
    const {
      title,
      poster_path,
      original_title,
      release_date,
      vote_average,
      genres,
      production_companies,
      overview,
      homepage
    } = movie;

    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-sm-12 col-md-5 ml-mr-auto">
            <img
              src={this.renderImage(poster_path)}
              className="img-fluid"
              alt="poster"
            />
          </div>
          <div className="col-xs-12 col-1" />

          <div className="col-sm-12 col-md-6 ml-mr-auto">
            <ul className="list-group list-group-flush">
              <SingleField field="Original Title" value={title} />
              <SingleField field="Release Date" value={release_date} />
              <SingleField field="Rating" value={vote_average} />
              <SingleField field="Description" value={overview} />
            </ul>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { movie, loading } = this.props;

    let content;

    if (!loading && movie) {
      console.log(movie);

      content = this.renderContent(movie);
    } else if (!loading && !movie) {
      content = <h1>Could not get the movie</h1>;
    }

    return (
      <div className="container">
        <h1 className="text-center mb-3 mt-3 display-4">Movie Details</h1>
        {loading ? <Loading /> : null}
        <div className="row">
          <div className="col-xs-12 col-md-12 m-auto">{content}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ moviedb }) => ({
  movie: moviedb.movie,
  loading: moviedb.loading
});

export default connect(
  mapStateToProps,
  { startGetMovie }
)(MovieDetails);
