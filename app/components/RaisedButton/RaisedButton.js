import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
    backgroundColor: '#90C6BC',
  },
  input: {
    display: 'none',
  },
});

const RaisedButtonComponent = (props) => {
  const { classes, color, label, type, onClick } = props;
  return (
    <Button
      variant="raised"
      onClick={onClick}
      color={color}
      type={type}
      className={classes.button}
    >
      <strong style={{ color: '#ffffff' }}>{label}</strong>
    </Button>
  );
};

RaisedButtonComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export const RaisedButton = withStyles(styles)(RaisedButtonComponent);
