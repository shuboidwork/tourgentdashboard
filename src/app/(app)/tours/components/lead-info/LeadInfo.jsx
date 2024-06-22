"use client";
import React, { useEffect, useState } from "react";
import "./lead-info.scss";
import Divider from "@/app/components/common/divider";
import { DividerTypes } from "@/app/components/common/divider/constants";
import Avatar from "@/app/components/common/avatar";
import {
  LeadInfoPropertiesIconMapping,
  LeadInfoSectionNamePropsMapping,
  LeadInfoSections,
} from "./constants";
import Icon from "@/app/components/common/icon";
import { IconTypes } from "@/app/facts/icon-list";
import { useStore } from "@/app/components/enhancers/useStore";
import getLeadInfo from "../../(withoutLayout)/leads/[leadId]/actions";

const LeadInfo = ({ children, leadId }) => {
  const [lead, setLead] = useState({});
  const { storeId } = useStore();

  useEffect(() => {
    const fetchLeadInfo = async () => {
      if (leadId && storeId) {
        const leadInfo = await getLeadInfo(leadId, storeId);
        setLead(leadInfo);
      }
    };
    fetchLeadInfo();
  }, [leadId, storeId, getLeadInfo]);
  
  const getView = () => {
    const getSections = () => {
      return Object.values(LeadInfoSections).map((sectionName) => {
        return (
          <>
            <div className="info-block" key={sectionName}>
              <div className="info-heading">{sectionName}</div>

              {LeadInfoSectionNamePropsMapping[sectionName].map((property) =>
                getPropView(property)
              )}
            </div>
          </>
        );
      });
    };

    const getPropView = (property) => {
      return (
        <div className="info-tile" key={property}>
          <div className="icon">
            <Icon
              icon={
                LeadInfoPropertiesIconMapping[property] || IconTypes.EMAIL_OL
              }
            />
          </div>
          <div className="text">{lead[property]}</div>
        </div>
      );
    };

    return (
      <>
        <div className="ld-info-lft">
          <div className="top">
            <div className="ld-info-avatar">
              <Avatar />
            </div>
            <div className="ld-info-name">{lead?.name}</div>
          </div>
          <div className="bottom">{getSections()}</div>
        </div>
        <Divider type={DividerTypes.VERTICLE} />
        <div className="ld-info-rgt">{children}</div>
      </>
    );
  };

  return <div className="ld-info-cont">{getView()}</div>;
};
export default LeadInfo;
