import React from "react";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
// import NavigationClose from "material-ui/svg-icons/navigation/close";
import styled from "styled-components";

const Div = styled.div`
  text-align: center;
  width: 100%;
`;

const AppBarRight = props => {
  const { classes, title } = props;

  return (
    <Div>
      <AppBar
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
    </Div>
  );
};

export default AppBarRight;
