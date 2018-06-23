import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from "../reducers/auth";
import moviedbReducer from "../reducers/moviedb";
import favoritesReducer from "../reducers/favorites";

const store = createStore(
  combineReducers({
    auth: authReducer,
    moviedb: moviedbReducer,
    favorites: favoritesReducer
  }),
  {},
  applyMiddleware(thunk)
);

export default store;
