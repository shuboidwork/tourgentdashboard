import React from "react";
import { Divider } from "@mui/material";
import { DividerTypes } from "./constants";
import PropTypes from "prop-types";

const MuiDivider = ({ type = DividerTypes.HORIZONTAL }) => {
  switch (type) {
    case DividerTypes.VERTICLE:
       return <Divider orientation="vertical" variant="middle" flexItem />
       
    case DividerTypes.HORIZONTAL:
    default:
      return <Divider variant="fullWidth" style={{ width: "100%" }} />;
  }
};

MuiDivider.propTypes = {
    type: PropTypes.oneOf(Object.values(DividerTypes)),
}
export { MuiDivider as default, DividerTypes};
