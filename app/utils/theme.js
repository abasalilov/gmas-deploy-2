import { createMuiTheme } from '@material-ui/core/styles';

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
export const muiTheme = createMuiTheme({
  // palette: {
  //   primary: { main: purple[500] }, // Purple and green play nicely together.
  //   secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  // },
  appBar: {
    height: 50,
  },
});
