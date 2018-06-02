import React from "react";
import TextField from "material-ui/TextField";
import PropTypes from "prop-types";
import styled from "styled-components";

const Span = styled.span`
  width: "14rem";
  height: "1rem";
  visibility: ${props =>
    props.touched && props.error !== "Required" ? "visible" : "hidden"};
`;

const Div = styled.div`
  display: "flex";
  flexdirection: "column";
`;

class ReduxFormField extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      input,
      label,
      type,
      classes,
      meta: { touched }
    } = this.props;
    return (
      <div className={classes.container}>
        {label && <label>{label}</label>}
        <TextField {...this.props} {...input} placeholder={label} type={type} />
        <Span>{error}</Span>
      </div>
    );
  }
}

RenderFieldComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string
};
