//
// This is the client side entry point for the React app.
//

import React from "react";
import { render, hydrate } from "react-dom";
import { routes } from "./routes";
import { Router, browserHistory } from "react-router";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import injectTapEventPlugin from "react-tap-event-plugin";

//
// Add the client app start up code to a function as window.webappStart.
// The webapp's full HTML will check and call it once the js-content
// DOM is created.
//
/* eslint-disable */

window.webappStart = () => {
  injectTapEventPlugin(); // https://github.com/callemall/material-ui/issues/4670
  const initialState = window.__PRELOADED_STATE__;
  const jsContent = document.querySelector(".js-content");
  const reactStart = initialState && jsContent.innerHTML ? hydrate : render;
  const bod = document.querySelector("body");
  bod.style.height = "100%";
  bod.style.margin = "0";
  const ht = document.querySelector("html");
  ht.style.height = "100%";
  jsContent.style.position = "abosolute";
  jsContent.style.left = "0";
  jsContent.style.top = "0";
  jsContent.style.height = "100%";
  jsContent.style.width = "100%";
  /* eslint-enable */
  const store = createStore(rootReducer, initialState);
  reactStart(
    <Provider store={store}>
      <Router history={browserHistory}>{routes}</Router>
    </Provider>,
    jsContent
  );
};
/* eslint-enable */
