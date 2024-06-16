"use client";
import React, { useState } from "react";
import { createContext, useContext } from "react";
import { Days } from "../../leads/[leadId]/itinerary/constanst";

const DaysContext = createContext();

export const useDays = () => useContext(DaysContext);

export const DaysProvider = ({ children }) => {
    const [days, setDays] = useState(Days);
    const [activeDay, setActiveDay] = useState(days.length && days[0].id || 'overview');

    const addDays = (tabs) => {
        setDays([...tabs]);
        setActiveDay(tabs[0]);
    };

    const setDayContent = (dayId, content) => {
        setDays(days.map(day => day.id === dayId ? { ...day, content} : day));
    }
    
    const setDayPlaces = (dayId, places) => {
      setDays(days.map(day => day.id === dayId ? { ...day, places} : day));
    }

    const switchDay = (id) =>{
        setActiveDay(id)
    }

  return (
    <DaysContext.Provider value={{ days, activeDay, addDays, switchDay, setDayContent, setDayPlaces}}>
      {children}
    </DaysContext.Provider>
  );
};
