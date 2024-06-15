"use client";
import React from "react";
import { DaysProvider } from "./DaysContext";
import Days from "./Days";
import DayForm from "./DayForm";
import "./leads-itinerary.scss"

const LeadsItinerary = () => {
  return (
    <DaysProvider>
      <Days />
      <DayForm />
    </DaysProvider>
  );
};

export default LeadsItinerary;
