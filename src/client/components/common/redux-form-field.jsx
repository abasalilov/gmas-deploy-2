import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "material-ui/TextField";
import PropTypes from "prop-types";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column"
  },
  showErr: {
    visibility: "visible",
    color: "red",
    width: "14rem",
    height: "1rem"
  },
  hideErr: {
    visibility: "hidden",
    width: "14rem",
    height: "1rem"
  }
};

class RenderFieldComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      input,
      label,
      type,
      classes,
      meta: { touched, error }
    } = this.props;
    return (
      <div className={classes.container}>
        {label && <label>{label}</label>}
        <TextField {...this.props} {...input} placeholder={label} type={type} />
        {
          <span className={touched && error !== "Required" ? classes.showErr : classes.hideErr}>
            {error}
          </span>
        }
      </div>
    );
  }
}

export const ReduxFormField = withStyles(styles)(RenderFieldComponent);

RenderFieldComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string
};
