"use client";
import React, { useContext } from "react";
import HighlightTimeTop from "./highlightTimeTop";
import HighlightTimeBottom from "./highlightTimeBottom";
import { TimeContext } from "@/context/TimeProvider";

const HighlightTime = () => {
  const { timeSchedule } = useContext(TimeContext);
  return (
    <div className="lg:relative sm:mt-0 bottom-24 sm:bg-white sm:p-5 lg:p-7 rounded-lg sm:shadow-lg">
      {/* top */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
        <HighlightTimeTop stage={timeSchedule?.shari} />
        <HighlightTimeTop stage={timeSchedule?.sunrise} />
        <HighlightTimeTop stage={timeSchedule?.johor} />
        <HighlightTimeTop stage={timeSchedule?.asor} />
        <HighlightTimeTop stage={timeSchedule?.magrib} />
        <HighlightTimeTop stage={timeSchedule?.esa} />
      </div>
      {/* button */}
      <HighlightTimeBottom timeSchedule={timeSchedule} />
    </div>
  );
};

export default HighlightTime;
