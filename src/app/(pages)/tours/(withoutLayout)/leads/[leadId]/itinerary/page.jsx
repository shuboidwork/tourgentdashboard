import Tile from "@/app/components/views/tile";
import React from "react";
import LeadsItinerary from "../../../components/leads-itinerary";
import "./itinerary.scss";

const page = () => {
  const getContent = () => <LeadsItinerary/>

  return (
      <Tile className="itin-cont" content={getContent()} />
  );
};

export default page;
