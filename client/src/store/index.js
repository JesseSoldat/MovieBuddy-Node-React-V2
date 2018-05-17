import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export default () => {
  return createStore(
    combineReducers({
      auth: () => ({})
    }),
    {},
    applyMiddleware(thunk)
  );
};
