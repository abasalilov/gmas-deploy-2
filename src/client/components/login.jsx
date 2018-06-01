import React from "react";
// import RaisedButton from "material-ui/RaisedButton";
// import { Provider } from "react-redux";
// import rootReducer from "../reducers";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import AppBarExampleIconMenu from "./common/AppBarExampleIconMenu";
// import { createStore } from "redux";
import { Field, reduxForm } from "redux-form";
import { ReduxFormField } from "./common/redux-form-field";
import { withStyles } from "@material-ui/core/styles";
import { required, maxLength15, minLength2, alphaNumeric } from "./utils.js";
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
      <Field
        className={classes.field}
        name="username"
        type="text"
        component={ReduxFormField}
        hintText="Username is your email address"
        floatingLabelText="Username"
        validate={[required, maxLength15, minLength2]}
        warn={alphaNumeric}
      />
    </div>
  );
};

const LoginForm = reduxForm({
  form: "login" // a unique identifier for this form
})(LoginComponent);

export const Login = withStyles(styles)(LoginForm);

LoginComponent.propTypes = {
  classes: PropTypes.object
};

// LoginComponent.propTypes = {
//   makeAuthReq: PropTypes.func,
//   isLoading: PropTypes.bool,
//   classes: PropTypes.object,
//   handleSubmit: PropTypes.func,
//   pristine: PropTypes.bool,
//   reset: PropTypes.func,
//   submit: PropTypes.func,
//   submitting: PropTypes.bool,
//   authErr: PropTypes.bool,
//   authSuccess: PropTypes.bool,
//   move: PropTypes.func
// };
