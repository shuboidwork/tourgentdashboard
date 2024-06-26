"use client";
import React, { useEffect, useState } from "react";
import { DaysProvider, useDays } from "./DaysContext";
import Days from "./Days";
import DayForm from "./DayForm";
import "./leads-itinerary.scss";
import { useStore } from "@/app/components/enhancers/useStore";
import { LeadInfoProperties } from "../lead-info/constants";
import getItineraryInfo, {
  saveItin,
  setItineraryIdForLead,
} from "../../(withoutLayout)/leads/[leadId]/itinerary/actions";
import getLeadInfo from "../../(withoutLayout)/leads/[leadId]/actions";
import { useRouter } from "next/router";
import Loader from "@/app/components/common/loading";

const LeadsItinerary = ({ leadId }) => {
  const [lead, setLead] = useState({});
  const [itinInfo, setItinInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const { storeId } = useStore();
  const { id, days: noOfDays, startDate, itineraryId } = lead;

  useEffect(() => {
    const fetchLeadInfo = async () => {
      if (leadId && storeId) {
        const leadInfo = await getLeadInfo(leadId, storeId);
        setLead(leadInfo);
      }
    };
    fetchLeadInfo();
    if(saved){
      setSaved(false);
    }
  }, [leadId, storeId, getLeadInfo, saved]);


  useEffect(() => {
    const fetchItinInfo = async () => {
      if (itineraryId) {
        const itinInfo = await getItineraryInfo(itineraryId);
        setItinInfo(itinInfo);
      }
    };
    fetchItinInfo();
    if(saved){
      setSaved(false);
    }
  }, [itineraryId, saved, getItineraryInfo]);


  const handleItinSave = async (data) => {
    const destinations = lead[LeadInfoProperties.DESTINATION];
    setLoading(true);
    const res = await saveItin(
      itineraryId,
      storeId,
      { details: data },
      destinations.split(",")
    );
    if (!itineraryId && res?.itinId) {
      const response = await setItineraryIdForLead(storeId, id, res.itinId);
      if (response?.itinerary) {
        setSaved(true);
        setLoading(false);
      }
    } else {
        setSaved(true);
        setLoading(false);
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <DaysProvider>
      <Days
        noOfDays={noOfDays}
        startDate={startDate}
        onSave={handleItinSave}
        itinInfo={itinInfo}
      />
      <DayForm />
    </DaysProvider>
  );
};

export default LeadsItinerary;
