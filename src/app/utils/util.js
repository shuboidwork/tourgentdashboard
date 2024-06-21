import { useMediaQuery } from "@mui/material";
import { compile } from "path-to-regexp";

export const createRoutePath = (pathTemplate, params) => {
  const toPath = compile(pathTemplate, { encode: encodeURIComponent });
  return toPath(params);
};

export const getCurrentBreakpoint = (theme) => {
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const isMd = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLg = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isXl = useMediaQuery(theme.breakpoints.up("lg"));

  if (isXs) return "xs";
  if (isSm) return "sm";
  if (isMd) return "md";
  if (isLg) return "lg";
  if (isXl) return "xl";
  return "xs";
};

// Utility function to calculate the width based on a percentage of the screen width
export const getResponsiveWidth = (percent, minWidth, maxWidth = Infinity) => {
  const screenWidth = window.innerWidth;
  const calculatedWidth = screenWidth * (percent / 100);

  return Math.min(Math.max(minWidth, calculatedWidth), maxWidth);
}