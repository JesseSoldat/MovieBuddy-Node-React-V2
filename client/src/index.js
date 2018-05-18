import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import AppRouter from './router/AppRouter';

const Loading = () => <h1>Loading....</h1>;
const root = document.getElementById("root");
const app = (
  <Provider store={store()}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(app, root);
    hasRendered = true;
  }
};

ReactDOM.render(<Loading />, root);

const user = JSON.parse(localStorage.getItem('user'));

if (user) {
  // log the user in with user._id, user.token
  // do some other api calls to rehydrate the store
  console.log('user: ', user);
  renderApp();
} else {
  // no user 
  renderApp();
}


