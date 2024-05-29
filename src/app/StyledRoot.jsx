"use client";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

export function StyledRoot({
  // eslint-disable-next-line react/prop-types
  children,
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
