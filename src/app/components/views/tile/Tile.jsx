import React from "react";
import PropTypes from "prop-types";
import "./tile.scss";
import clsx from "clsx";

const Tile = ({ id, content, size, className, onClick}) => {
  return (
    <div className={clsx("tile-cont", size, className)} key={id} onClick={onClick}>
      {content}
    </div>
  );
};
Tile.propTypes = {
  id: PropTypes.string,
  content: PropTypes.shape({}),
  size: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
export default Tile;
