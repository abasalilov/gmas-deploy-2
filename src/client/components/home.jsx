/*
 * This is a demo component the Eletrode app generator included
 * to show using Skeleton CSS lib (named base.css) and Redux
 * store for display HTML elements and managing states.
 *
 * To start your own app, please replace or remove these files:
 *
 * - this file (home.jsx)
 * - demo-buttons.jsx
 * - demo-pure-states.jsx
 * - demo-states.jsx
 * - reducers/index.jsx
 * - styles/*.css
 *
 */

import React from "react";
import "../styles/normalize.css";
import "../styles/raleway.css";
import skeleton from "../styles/skeleton.css";
import custom from "../styles/custom.css";
import electrodePng from "../images/electrode.png";
import DemoStates from "./demo-states";
import DemoPureStates from "./demo-pure-states";
import RaisedButton from "material-ui/RaisedButton";
import { Provider } from "react-redux";
import rootReducer from "../reducers";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { createStore } from "redux";
const store = createStore(rootReducer, { checked: 0, value: 0 });

/**/

export default () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <div className={custom.container}>
        {/**/}

        <section className={custom.header}>
          <h2 className={skeleton.title}>
            Hello from{" "}
            <a href="https://github.com/electrode-io">
              {"Electrode"} <img src={electrodePng} />
            </a>
          </h2>
        </section>

        <div className={custom["docs-section"]}>
          <DemoStates />
        </div>

        <div className={custom["docs-section"]}>
          <DemoPureStates />
        </div>

        <div className={custom["docs-section"]}>
          <RaisedButton />
        </div>
      </div>
    </Provider>
  </MuiThemeProvider>
);
