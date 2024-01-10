import yearData from "@/data/yearData";
import React from "react";

const CalenderTitle = ({ className, monthIndex }) => {
  return (
    <div
      className={`${className} bg-white py-4 flex justify-center items-center rounded-t-md border border-b-0 border-[rgba(76,2,3,.2)]`}
    >
      <h2 className="text-lg font-bold">
        {yearData?.months?.[monthIndex]?.monthName}
      </h2>
    </div>
  );
};

export default CalenderTitle;
