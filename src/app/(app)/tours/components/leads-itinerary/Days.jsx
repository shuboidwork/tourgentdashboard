"use client";
import React, { useEffect } from "react";
import clsx from "clsx";
import { useDays } from "./DaysContext";
import Tile from "@/app/components/common/tile";
import { OVERVIEW_TAB } from "./constants";
import {
  formatDateWithoutYear,
  getXDaysFutureDateByStartDate,
} from "@/app/utils/date-utils";
import Button from "@/app/components/common/button";

const Days = ({ noOfDays, startDate, onSave, itinInfo }) => {
  const { days, activeDay, switchDay, addDays } = useDays();

  useEffect(() => {
    const dayTabs = [];
    for (let i = 0; i < noOfDays; i++) {
      let content = "";
      let places = [];
      const dayNumber = i + 1;
      const dayId = `day${dayNumber}`;
      const dayDate = formatDateWithoutYear(
        getXDaysFutureDateByStartDate(startDate, i)
      );

      if (itinInfo?.details) {
        const savedDayData = itinInfo.details.filter(({ id }) => id === dayId);
        content = getSavedDayContent(savedDayData[0]);
        places =  getSavedDayPlaces(savedDayData[0]);
      }

      dayTabs.push({
        dayNumber: dayNumber,
        id: dayId,
        label: dayDate,
        content: content,
        places: places,
      });
    }
    const overviewTab = getOverviewTabDetails(itinInfo?.details);
    addDays([overviewTab, ...dayTabs]);
  }, [noOfDays, itinInfo]);

  const getSavedDayContent = (savedDayData) => {
    return savedDayData?.content ? savedDayData.content : "";
  };

  const getSavedDayPlaces = (savedDayData) => {
    return savedDayData?.places ? savedDayData.places : "";
  };

  const getOverviewTabDetails = (savedDetails) => {
    if (savedDetails) {
      const savedOverviewData = savedDetails.filter(
        ({ id }) => id === "overview"
      );
      const content = savedOverviewData[0]?.content || "";
      return { ...OVERVIEW_TAB, content };
    } else {
      return OVERVIEW_TAB;
    }
  };

  const handleOnSave = () => {
    onSave && onSave(days);
  };

  return (
    <div className="itin-header">
      <div className="itin-day-tabs">
        {days
          ? days.map(({ id, label }) => {
              return (
                <Tile
                  key={id}
                  onClick={() => switchDay(id)}
                  content={label}
                  className={clsx("day-tab", { active: activeDay === id })}
                />
              );
            })
          : null}
      </div>
      <Button className="itin-save" title="Save" onClick={handleOnSave} />
    </div>
  );
};

export default Days;
