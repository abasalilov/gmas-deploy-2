import React from "react";
// import RaisedButton from "material-ui/RaisedButton";
// import { Provider } from "react-redux";
// import rootReducer from "../reducers";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import AppBarExampleIconMenu from "./common/AppBarExampleIconMenu";
// import { createStore } from "redux";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

/**/

const styles = {
  container: {
    border: "solid red",
    boxSizing: "border-box",
    height: "100%",
    width: "100%"
  }
};

const LoginComponent = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      {/**/}
      here
    </div>
  );
};

export const Login = withStyles(styles)(LoginComponent);

LoginComponent.propTypes = {
  classes: PropTypes.object
};
