"use client";
import React from "react";
import "./metric-tile.scss";
import Tile from "@/app/components/views/tile";
import Icon from "@/app/components/views/icon";
import PropTypes from "prop-types";
import {redirect} from 'next/navigation'
const MetricTile = ({id, icon, label, count, href}) => {

  const onClickHandler = () => {
    redirect(href);
  }
  const getView = () => {
    return (<>       <div className="mtrc-header">
          <Icon className={"mtrc-icon"} icon={icon}/>
          <div className="mtrc-label">{label}</div>
        </div>
        <div className="mtrc-count">
          {count}
        </div></>
    );
  };

  return <Tile className="mtrc-cont" content={getView()} key={id} onClick={onClickHandler} />;
};
MetricTile.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
  count: PropTypes.string,
  href: PropTypes.string,
};
export default MetricTile;
