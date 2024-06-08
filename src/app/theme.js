"use client";
import { createTheme } from "@mui/material/styles";
// import { poppins_init } from "./utils/fonts";

// const { fontFamily } = poppins_init.style;


const theme = createTheme({
  zIndex: {
    drawer: 1200,
    appBar: 1300,
  },
  // components: {
  //   MuiTypography: {
  //     defaultProps: {
  //       fontFamily: fontFamily,
  //     },
  //   },
  // },
  // typography: {
  //   fontFamily: [
  //     fontFamily
  //   ].join(','),
  // },
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: { main: "#FF7F50" },
    gray: { main: "#939393" },
    black: { main: "#000000" },
  },
});

export default theme;
