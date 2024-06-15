"use client";
import React from "react";
import clsx from "clsx";
import { useDays } from "./DaysContext";
import Tile from "@/app/components/views/tile";

const Days = () => {
  const { days, activeDay, switchDay } = useDays();
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
