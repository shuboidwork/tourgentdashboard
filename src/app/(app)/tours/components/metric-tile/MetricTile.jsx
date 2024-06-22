"use client";
import React from "react";
import "./metric-tile.scss";
import Tile from "@/app/components/common/tile";
import Icon from "@/app/components/common/icon";
import PropTypes from "prop-types";
import { redirect, usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
const MetricTile = ({ id, icon, label, count, href }) => {
  const path = usePathname();

  const onClickHandler = () => {
    redirect(href);
  };
  const getView = () => {
    return (
      <Link href={href} className="mtrc-link">
        <div className="mtrc-header">
          <Icon className={"mtrc-icon"} icon={icon} />
          <div className="mtrc-label">{label}</div>
        </div>
        <div className="mtrc-count">{count}</div>
      </Link>
    );
  };

  return (
    <Tile
      className={clsx("mtrc-cont", { active: path.includes(href) })}
      content={getView()}
      key={id}
      onClick={onClickHandler}
    />
  );
};
MetricTile.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
  count: PropTypes.string,
  href: PropTypes.string,
};
export default MetricTile;
