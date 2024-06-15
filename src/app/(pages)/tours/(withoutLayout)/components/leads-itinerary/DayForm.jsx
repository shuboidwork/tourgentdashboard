'use client'
import React from "react";
import { useDays } from "./DaysContext";
import Input from "@/app/components/views/input";
import { InputTypes } from "@/app/components/views/input/constants";

import Place from "./Place";

const DayForm = () => {
  const { days, activeDay, setDayContent, setDayPlaces} = useDays();
  const { content, id: dayId, label, places} = days.find((day) => day.id === activeDay) || {};
  console.log(days);

  const addBullets = (items) => {
    if(!items || items == ""){
      return items;
    }
    return items.map((item) => `• ${item}`).join("\n");
  };

  const processContent = (value) => {
    const removeBulletsAndClean = (text) => {
      return text
        .split("\n")
        .map((line) => line.replace(/•\s*/, "").trim())
        .filter((line) => line.length > 0)
        .map((line) => line.replace(/\s+/g, " "));
    };
    return removeBulletsAndClean(value);
  };

  const handleContentChange = (e) => {
    const processedText = processContent(e.target.value);
    setDayContent(dayId, processedText);
  };
  
  const getPlacesView = () => {
    return places ? places.map((place)=> {
      return <Place key={place.id} dayId={dayId} place={place} places={places} setPlaces={setDayPlaces}/>
    }): null;
  }

  return (
    <div className="day-content">
      <div className="day-frm-hdr">{label}</div>
      <form className="day-frm">
        <Input
          type={InputTypes.MULTILINE}
          row={50}
          className="day-content-inp"
          value={addBullets(content)}
          onChange={handleContentChange}
        />
        <div className="day-locs">
          {getPlacesView()}
        </div>
      </form>
    </div>
  );
};

export default DayForm;
