"use client";
import React, { useState } from "react";
import { createContext, useContext } from "react";
import { PLACE } from "./constants";
import { uuid } from "uuidv4";

const DaysContext = createContext();

export const useDays = () => useContext(DaysContext);

export const DaysProvider = ({ children }) => {
    const [days, setDays] = useState([]);
    const [activeDay, setActiveDay] = useState(days.length && days[0].id || 'overview');

    const addDays = (tabs) => {
        setDays([...tabs]);
        setActiveDay(tabs[0].id);
    };

    const _createPlace = () => ({
      ...PLACE,
      id: uuid()
    })

    const addPlace = (dayId) => {
      setDays(days.map(day => day.id === dayId ? { ...day, places: [...day.places, _createPlace()]} : day));
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
    <DaysContext.Provider value={{ days, activeDay, addDays, addPlace, switchDay, setDayContent, setDayPlaces}}>
      {children}
    </DaysContext.Provider>
  );
};
