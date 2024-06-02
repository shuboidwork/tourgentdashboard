import React from "react";
import PropTypes from "prop-types";
import "./tile.scss";
import clsx from "clsx";

const Tile = ({ id, content, color, size, className }) => {
  return (
    <div className={clsx("tile-cont", color, size, className)} key={id}>
      {content}
    </div>
  );
};
Tile.propTypes = {
  id: PropTypes.string,
  content: PropTypes.shape({}),
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
};
export default Tile;
