import React from "react";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
// import NavigationClose from "material-ui/svg-icons/navigation/close";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = {
  wide: {
    width: "100%"
  }
};

const AppBarRightComponent = props => {
  const { classes, title } = props;

  return (
    <AppBar
      className={classes.wide}
      title={title}
      showMenuIconButton={false}
      iconElementRight={
        <IconMenu
          iconButtonElement={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          targetOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "top" }}
        >
          <MenuItem primaryText="Refresh" />
          <MenuItem primaryText="Help" />
          <MenuItem primaryText="Sign out" />
        </IconMenu>
      }
    />
  );
};

const AppBarRight = withStyles(styles)(AppBarRightComponent);

export default AppBarRight;

AppBarRightComponent.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.string
};