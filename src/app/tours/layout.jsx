import PropTypes from "prop-types";
import React from "react";
export default function ToursLayout({
    children,
  }) {
    return <section>{children}</section>
  }

  ToursLayout.propTypes = {
    children: PropTypes.shape({}),
  };
  