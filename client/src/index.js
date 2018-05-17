import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";

const WelcomePage = () => <h1>Welcome to Movie Buddy</h1>;
const Loading = () => <h1>Loading....</h1>;
const root = document.getElementById("root");
const app = (
  <Provider store={store()}>
    <WelcomePage />
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

setTimeout(() => {
  renderApp();
}, 1000);
