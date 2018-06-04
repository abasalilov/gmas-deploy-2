import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
    textAlign: 'center',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function TopAppBarComponent(props) {
  const { classes, rightLink } = props;
  console.log('props', props);
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: '#5FD0F3' }}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            <strong>{rightLink.title}</strong>
          </Typography>
          <Button color="inherit">
            <Link to={rightLink.route}>{rightLink.title}</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

TopAppBarComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  rightLink: PropTypes.object,
};

export const TopAppBar = withStyles(styles)(TopAppBarComponent);
