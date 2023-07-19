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
