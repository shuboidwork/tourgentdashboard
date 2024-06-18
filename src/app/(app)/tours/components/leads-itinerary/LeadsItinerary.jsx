"use client";
import React, { useEffect } from "react";
import { DaysProvider } from "./DaysContext";
import Days from "./Days";
import DayForm from "./DayForm";
import "./leads-itinerary.scss"

const LeadsItinerary = ({lead}) => {
  const {days, startDate} = lead;

  return (
    <DaysProvider>
      <Days noOfDays={days} startDate={startDate}/>
      <DayForm />
    </DaysProvider>
  );
};

export default LeadsItinerary;
