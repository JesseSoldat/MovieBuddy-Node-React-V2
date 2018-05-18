import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from '../reducers/auth';

export default () => {
  return createStore(
    combineReducers({
      auth: authReducer
    }),
    {},
    applyMiddleware(thunk)
  );
};
