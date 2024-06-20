import React from "react";
import PropTypes from "prop-types";
import "./flag-icon.scss";
import Flags, { IconFlagTypes } from "@/app/facts/icon-flag-list";

const MuiFlagIcon = ({
  height = "15px",
  width = "30px",
  type = IconFlagTypes.INDIA,
}) => {
  const IconFlag = Flags[type];
  return (
    // <div className="icon-cont" style={{height, width}}>
    <IconFlag style={{ width: width, height: height }} />
    // </div>
  );
};
MuiFlagIcon.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  type: PropTypes.oneOf(Object.values(IconFlagTypes)),
};
export { MuiFlagIcon as default, IconFlagTypes };
