"use client";
import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  zIndex: {
    drawer: 1200,
    appBar: 1300,
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
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
