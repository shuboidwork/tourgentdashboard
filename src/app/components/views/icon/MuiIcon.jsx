import React from "react";
import Icons from "@/app/facts/icon-list";
import PropTypes from "prop-types";
import clsx from "clsx";
import "./icon.scss";

const MuiIcon = ({ icon, className }) => {
  const Icon = Icons[icon];

  return (
    <div className={clsx("icon", className)}>
      <Icon style={{ width: "inherit", height: "inherit" }} />
    </div>
  );
};
MuiIcon.propTypes = {
  icon: PropTypes.shape({}),
  className: PropTypes.string,
};
export default MuiIcon;
