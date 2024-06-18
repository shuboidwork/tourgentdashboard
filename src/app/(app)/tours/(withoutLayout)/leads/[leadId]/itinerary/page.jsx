import Tile from "@/app/components/views/tile";
import React from "react";
import LeadsItinerary from "../../../../components/leads-itinerary";
import "./itinerary.scss";
import getLeadInfo from "../actions";

const page = async ({params}) => {
  const {leadId} = params;
  const leadInfo = await getLeadInfo(leadId) || {};
  const getContent = () => <LeadsItinerary lead={leadInfo}/>

  return (
      <Tile className="itin-cont" content={getContent()} />
  );
};

export default page;
