// In this file, we create a React component which contains components provided by Material-UI.
import React, { Component } from "react";
import { createStore } from "redux";
import styled, { injectGlobal } from "styled-components";
import AppBarRight from "./common/AppBar.jsx";
import { MuiThemeProvider, getMuiTheme } from "material-ui/styles";
import { deepOrange500 } from "material-ui/styles/colors";
import { RaisedButton, Dialog, FlatButton } from "material-ui";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

injectGlobal`
	h1, h2 {
		font-family: 'Roboto', sans-serif;
	}
`;

const Div = styled.div`
  text-align: center;
  padding-top: 200px;
`;

const store = createStore(rootReducer, { checked: 0, value: 0 });

export default class Main extends Component {
  constructor(properties) {
    super(properties);

    this.muiTheme = getMuiTheme({
      palette: {
        accent1Color: deepOrange500
      },
      userAgent: properties.userAgent
    });

    this.state = {
      open: false
    };
  }

  handleRequestClose = () =>
    this.setState({
      open: false
    });

  handleClick = () =>
    this.setState({
      open: true
    });

  render = () => (
    <MuiThemeProvider muiTheme={this.muiTheme}>
      <Provider store={store}>
        <AppBarRight />
        <Div>
          <h1>Material-UI</h1>
          <h2>example project</h2>
          <RaisedButton
            label="Super Secret Password"
            secondary={true}
            onClick={this.handleClick}
          />

          <Dialog
            open={this.state.open}
            title="Super Secret Password"
            actions={
              <FlatButton
                label="Ok"
                primary={true}
                onClick={this.handleRequestClose}
              />
            }
            onRequestClose={this.handleRequestClose}
          >
            1-2-3-4-5
          </Dialog>
        </Div>
      </Provider>
    </MuiThemeProvider>
  );
}
