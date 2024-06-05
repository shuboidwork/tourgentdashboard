import PropTypes from "prop-types";
import React from "react";
export default function ToursLayout({
    children,
  }) {
    return <>{children}</>
  }

  ToursLayout.propTypes = {
    children: PropTypes.shape({}),
  };
  