"use client";
import React, { useEffect } from "react";
import clsx from "clsx";
import { useDays } from "./DaysContext";
import Tile from "@/app/components/views/tile";
import { OVERVIEW_TAB } from "./constants";
import { formatDateWithoutYear, getXDaysFutureDateByStartDate } from "@/app/utils/date-utils";

const Days = ({noOfDays, startDate}) => {
  const { days, activeDay, switchDay, addDays } = useDays();

  useEffect(() => {
    const dayTabs = [];
    for (let i = 0; i < noOfDays; i++) {
      const dayNumber = i + 1;
      const dayDate = formatDateWithoutYear(getXDaysFutureDateByStartDate(startDate, i));
      dayTabs.push({
        dayNumber: dayNumber,
        id: `day${dayNumber}`,
        label: dayDate,
        content: "",
        places: []
      });
    }
    addDays([OVERVIEW_TAB, ...dayTabs]);
  },[]);

  return (
    <>
      <div className="day-tabs">
        {days
          ? days.map(({ id, label }) => {
              return (<Tile
                key={id}
                onClick={() => switchDay(id)}
                content={label}
                className={clsx("day-tab", { active: activeDay === id })}
              />);
            })
          : null}
      </div>
    </>
  );
};

export default Days;
