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
import RaisedButton from "material-ui/RaisedButton";
import { Provider } from "react-redux";
import rootReducer from "../reducers";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBarRight from "./common/AppBarExampleIconMenu";
import { Login } from "./login";
import { createStore } from "redux";
import { withStyles } from "@material-ui/core/styles";

/**/

const styles = {
  container: {
    border: "solid red",
    background: "linear-gradient(to right, #C8EBF9,#CCE9F7)",
    boxSizing: "border-box",
    height: "100%",
    width: "100%"
  }
};

const store = createStore(rootReducer, { checked: 0, value: 0 });

/**/

const HomeComponent = props => {
  const { classes } = props;
  return (
    <MuiThemeProvider>
      <Provider store={store}>
        <div className={classes.container}>
          <AppBarRight title={"GMAS Crypto Portal"} />

          <section className={custom.header}>
            <h2 className={skeleton.title}>Login</h2>
            <Login />
          </section>

          <section className={custom.header}>
            <div>about us</div>
          </section>
        </div>
      </Provider>
    </MuiThemeProvider>
  );
};

const Home = withStyles(styles)(HomeComponent);
export default Home;
