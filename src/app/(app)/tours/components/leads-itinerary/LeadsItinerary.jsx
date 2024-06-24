"use client";
import React, { useEffect } from "react";
import { DaysProvider, useDays } from "./DaysContext";
import Days from "./Days";
import DayForm from "./DayForm";
import "./leads-itinerary.scss"
import { useStore } from "@/app/components/enhancers/useStore";
import saveItin from "../../(withoutLayout)/leads/[leadId]/itinerary/actions";
import { LeadInfoProperties } from "../lead-info/constants";

const LeadsItinerary = ({lead = {}}) => {
  const {days, startDate} = lead;
  const {storeId} = useStore();

  const handleItinSave = (data) => {
    const destinations = lead[LeadInfoProperties.DESTINATION];
    saveItin(storeId, data,destinations.split(','));
  }


  return (
    <DaysProvider>
      <Days noOfDays={days} startDate={startDate} onSave={handleItinSave}/>
      <DayForm />
    </DaysProvider>
  );
};

export default LeadsItinerary;
