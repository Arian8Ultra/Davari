import { createTheme } from "@mui/material/styles";
import {
  primary,
  primaryDark,
  primaryGrey,
  primaryLight,
  secondary,
  secondaryDark,
  secondaryLight
} from "./color";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Shabnam-Light,sans-serif",
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  components:{
    MuiButton:{
      styleOverrides:{
        contained:{
          borderRadius:"0.5rem"
        }
      }
    }
  },
  palette: {
    mode: "light",
    primary: {
      main: primary,
      light: primaryLight,
      dark: primaryDark,
    },
    divider: primaryGrey,
    contrastThreshold: 3,
    secondary: {
      main: secondary,
      light: secondaryLight,
      dark: secondaryDark,
    },
  },
});

export default theme;
