"use client";
import React from "react";
import Link from "next/link";
import "./lead-info-header.scss";
import clsx from "clsx";
import { Tiles } from "./constants";
import { useParams, usePathname } from "next/navigation";
import { createRoutePath } from "@/app/utils/util";
import Icon from "@/app/components/views/icon";
import Tile from "@/app/components/views/tile";


const LeadInfoHeader = () => {
  const { leadId } = useParams();
  const path = usePathname();
  console.log("path");

  console.log(path);


  const getTileView = ({ label, icon, href, disabled }) => {
    const routePath = createRoutePath(href, { leadId });
    return (
      <div className="info-tile">
        <Icon className={clsx("info-icon",{active: (path === routePath)})} icon={icon} />
        <Link
          className={clsx("info-lable", { disabled, active: (path === routePath) })}
          href={routePath}
        >
          {label}
        </Link>
      </div>
    );
  };

  return (
    <div className="ldinf-hdr-cont">
      {Tiles.map((tile) => {
        const { id } = tile;
        return <Tile content={getTileView(tile)} key={id} className="" />;
      })}
    </div>
  );
};

export default LeadInfoHeader;
