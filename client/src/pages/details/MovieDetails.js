import React, { Component } from "react";
import { connect } from "react-redux";

import { startGetMovie } from "../../actions/moviedb";
import Loading from "../../components/Loading";
import CardDetails from "../../components/CardDetails";

import getQueryParams from "../../utils/getQueryParams";

class MovieDetails extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.startGetMovie(id);
  }

  render() {
    const { movie, loading } = this.props;
    let content;

    if (!loading && movie) {
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
      content = (
        <CardDetails
          parent={getQueryParams("parent", this.props.location.search)}
          title={title}
          poster_path={poster_path}
          original_title={original_title}
          release_date={release_date}
          vote_average={vote_average}
          genres={genres}
          production_companies={production_companies}
          overview={overview}
          homepage={homepage}
        />
      );
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
