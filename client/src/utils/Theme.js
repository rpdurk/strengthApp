import { createMuiTheme } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: deepOrange,
    secondary: {
      main: "#00C49F",
    },
  },
});

export default theme;
