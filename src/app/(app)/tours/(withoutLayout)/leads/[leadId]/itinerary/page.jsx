import Tile from "@/app/components/common/tile";
import React from "react";
import LeadsItinerary from "../../../../components/leads-itinerary";
import "./itinerary.scss";

const page = async ({ params }) => {
  const { leadId } = params;
  const getContent = () => <LeadsItinerary leadId={leadId} />;

  return <Tile className="itin-cont" content={getContent()} />;
};

export default page;
