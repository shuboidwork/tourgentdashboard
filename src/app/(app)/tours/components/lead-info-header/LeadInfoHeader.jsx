"use client";
import React from "react";
import Link from "next/link";
import "./lead-info-header.scss";
import clsx from "clsx";
import { Tiles } from "./constants";
import { useParams, usePathname } from "next/navigation";
import Icon from "../../../../components/views/icon";
import Tile from "../../../../components/views/tile";
import { createRoutePath } from "../../../../utils/util";


const LeadInfoHeader = () => {
  const { leadId } = useParams();
  const path = usePathname();

  const getTileView = ({ label, icon, href, disabled }) => {
    const routePath = createRoutePath(href, { leadId });
    const isActive = path === routePath;

    return (
      <>
        <Icon className={clsx("info-icon",{active: isActive})} icon={icon} />
        <Link
          className={clsx("info-label", { disabled, active: isActive })}
          href={routePath}
        >
          {label}
        </Link>
      </>
    );
  };

  return (
    <div className="ldinf-hdr-cont">
      {Tiles.map((tile) => {
        const { id, href} = tile;
        const routePath = createRoutePath(href, { leadId });
        const isActive = path === routePath;
        return <Tile content={getTileView(tile)} key={id} className={clsx("info-tile", {active : isActive})} />;
      })}
    </div>
  );
};

export default LeadInfoHeader;
