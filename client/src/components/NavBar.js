import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = ({ isAuth }) => {
  const brand = isAuth ? (
    <Link className="navbar-brand" to="/dashboard">
      Movie Buddy
    </Link>
  ) : (
    <Link className="navbar-brand" to="/">
      Movie Buddy
    </Link>
  );

  const publicRoutes = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item mr-2 pb-sm-3 pt-sm-3 pt-md-0 pb-md-0">
        <Link to="/login">
          <i className="fas fa-sign-in-alt mr-1" />
          Login
        </Link>
      </li>
      <li className="nav-item pb-sm-3 pb-md-0">
        <Link to="/register">
          <i className="fas fa-pencil-alt mr-1" />
          Register
        </Link>
      </li>
    </ul>
  );

  const privateRoutes = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item mr-2 pb-sm-3 pt-sm-3 pt-md-0 pb-md-0">
        <Link to="/search">
          <i className="fas fa-search mr-1" />
          Search
        </Link>
      </li>
      <li className="nav-item pb-sm-3 pb-md-0">
        <Link to="/favorites">
          <i className="fas fa-heart mr-1" />
          Favorites
        </Link>
      </li>
    </ul>
  );

  return (
    <div className="navbar navbar-expand-md navbar-dark bg-dark">
      {brand}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#mobile"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="mobile">
        <ul className="navbar-nav mr-auto" />
        {isAuth ? privateRoutes : publicRoutes}
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({
  isAuth: !!auth._id
});

export default connect(mapStateToProps)(NavBar);