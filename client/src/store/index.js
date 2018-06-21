import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from "../reducers/auth";
import moviedbReducer from "../reducers/moviedb";

const store = createStore(
  combineReducers({
    auth: authReducer,
    moviedb: moviedbReducer
  }),
  {},
  applyMiddleware(thunk)
);

export default store;
