"use client";
import React from "react";
import { useDays } from "./DaysContext";
import Input from "@/app/components/views/input";
import { InputTypes } from "@/app/components/views/input/constants";

import Place from "./Place";
// import RichTextEditor from "@/app/components/views/rich-text-editor/RichTextEditor";
import { IconTypes } from "@/app/facts/icon-list";
import Tile from "@/app/components/views/tile";
import Icon from "@/app/components/views/icon";

const DayForm = () => {
  const { days, activeDay, setDayContent, setDayPlaces, addPlace} = useDays();
  const {
    content,
    id: dayId,
    label,
    places,
    dayNumber,
  } = days.find((day) => day.id === activeDay) || {};

  const addBullets = (items) => {
    if (!items || items == "") {
      return items;
    }
    return items.map((item) => `• ${item}`).join("\n");
  };

  const processContent = (value) => {
    const removeBulletsAndClean = (text) => {
      return text
        .split("\n")
        .map((line) => line.replace(/•\s*/, "").trim())
        .map((line) => line.replace(/\s+/g, " "));
    };
    return removeBulletsAndClean(value);
  };

  const handleContentChange = (e) => {
    const processedText = processContent(e.target.value);
    setDayContent(dayId, processedText);
  };

  const getPlacesView = () => {
    return places
      ? places.map((place) => {
          return (
            <Place
              key={place.id}
              dayId={dayId}
              place={place}
              places={places}
              setPlaces={setDayPlaces}
            />
          );
        })
      : null;
  };

  const addPlaceView = () => (
    <>

      <Icon className="add-icon" icon={IconTypes.ADD} />
      <div className="add-label">Add Place</div>
    </>
  );
  
  const addPlaceHandler = () => {
    addPlace(activeDay);
  }

  return (
    <div className="day-content">
      <div className="day-frm-hdr">
        <div className="frm-hdr-label">
          {dayId === "overview" ? label : `Day ${dayNumber}`}
        </div>
        <Tile className="frm-hdr-add" content={addPlaceView()} onClick={addPlaceHandler}/>
      </div>
      <form className="day-frm">
        <Input
          type={InputTypes.MULTILINE}
          rows={4}
          className="day-content-inp"
          value={addBullets(content)}
          onChange={handleContentChange}
        />
        {/* <RichTextEditor  /> */}

        <div className="day-locs">{getPlacesView()}</div>
      </form>
    </div>
  );
};

export default DayForm;
