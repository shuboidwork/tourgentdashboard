import React from "react";
import Icons from "@/app/facts/icon-list";
import PropTypes from "prop-types";
import "./icon.scss";

const MuiIcon = ({ icon, ...props }) => {
  const Icon = Icons[icon];

  return <Icon {...props} />;
};
MuiIcon.propTypes = {
  icon: PropTypes.shape({}),
  className: PropTypes.string,
};
export default MuiIcon;
