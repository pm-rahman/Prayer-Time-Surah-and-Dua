import React from "react";
import HighlightTimeTop from "./highlightTimeTop";
import HighlightTimeBottom from "./highlightTimeBottom";

const HighlightTime = ({ todayData }) => {
  const timeSchedule = todayData?.timeSchedule;
  return (
    <>
      {/* top */}
      <div className="relative bottom-10 px-6 lg:px-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <HighlightTimeTop stage={timeSchedule?.shari} />
        <HighlightTimeTop stage={timeSchedule?.sunrise} />
        <HighlightTimeTop stage={timeSchedule?.johor} />
        <HighlightTimeTop stage={timeSchedule?.asor} />
        <HighlightTimeTop stage={timeSchedule?.magrib} />
        <HighlightTimeTop stage={timeSchedule?.esa} />
      </div>
      {/* button */}
      <HighlightTimeBottom timeSchedule={timeSchedule} />
    </>
  );
};

export default HighlightTime;
