"use client";
import React from "react";
import "./lead-tile.scss";
import Avatar from "@/app/components/common/avatar";
import FlagIcon, { IconFlagTypes } from "@/app/components/common/flag-icon";
import { IconTypes } from "@/app/facts/icon-list";
import Icon from "@/app/components/common/icon";
import clsx from "clsx";
import PropTypes from "prop-types";
import RouteUrls from "@/app/facts/route-urls";
import { createRoutePath } from "@/app/utils/util";
import Link from "next/link";
import Tile, { TileSizes } from "@/app/components/common/tile";
import { formatDate } from "@/app/utils/date-utils";
import { GroupTypes, GroupTypesIconMap, GroupTypesLabelMap } from "../../facts/leads-metadata";

const LeadTile = ({
  id,
  name,
  phone,
  email,
  // fromCountry = "India",
  // toCountry = "India",
  startDate,
  endDate,
  groupType = GroupTypes.SOLO,
  status,
  statusType = "blue",
}) => {
  const getView = () => {
    return (
      <div className="ld-cont">
        <div className="ld-lft">
          <div className="ld-avatar">
            <Avatar />
          </div>
          <div className="ld-countries">
            <FlagIcon height="15px" width="30px" type={IconFlagTypes.INDIA} />
            <Icon icon={IconTypes.SWAP_HORIZ} />
            <FlagIcon height="15px" width="30px" type={IconFlagTypes.INDIA} />
          </div>
        </div>
        <div className="ld-mid">
          <div className="ld-header">
            <div className="ld-name">{name}</div>
            <Tile
              content={status}
              color="gray"
              size={TileSizes.SMALL}
              className={clsx("ld-status", statusType)}
            />
          </div>
          <div className="ld-contact-dtls">
            <div className="ld-contact-item">
              <Icon icon={IconTypes.CALL_OL} className="ld-icon" />
              {phone}
            </div>
            <div className="ld-contact-item">
              <Icon icon={IconTypes.EMAIL_OL} className="ld-icon" />
              {email}
            </div>
          </div>
          <div className="ld-info">
            <div className="ld-dates">
              <div className="ld-date">{formatDate(startDate)}</div>
              <Icon icon={IconTypes.SWAP_HORIZ} className="ld-icon" />
              <div className="ld-date"> {formatDate(endDate)}</div>
            </div>
            <div className="ld-task">
              <div className="ld-item">
                <Icon icon={IconTypes.POST_ADD} className="ld-icon" />
                Itinerary Creation
              </div>
            </div>
            <div className="ld-type">
              <div className="ld-item">
                <div className="ld-icon">
                  <Icon icon={GroupTypesIconMap[groupType] || IconTypes.SOLO} className="ld-icon" />
                </div>
                {GroupTypesLabelMap[groupType]}
              </div>
            </div>
          </div>
        </div>
        <div className="ld-rgt">
          <div className="ld-rgt-top">
            <Tile
              content={"Call"}
              size={TileSizes.LARGE}
              className={clsx("ld-call")}
            />
            <Icon icon={IconTypes.MORE_VERTICLE} className="ld-more-icon" />
          </div>
          <div className="ld-rgt-btm">
            <Link className="ld-link" href={createRoutePath(RouteUrls.lead, {leadId: id})}>More Info</Link>
            <Icon className="ld-arrow-icon" icon={IconTypes.ARROW_RIGHT} />
          </div>
        </div>
      </div>
    );
  };

  return <Tile content={getView()} color={"gray"} key={id} />;
};
LeadTile.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  fromCountry: PropTypes.string,
  toCountry: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  groupType: PropTypes.oneOf(Object.values(GroupTypes)),
  status: PropTypes.string,
  statusType: PropTypes.string,
};
export default LeadTile;
