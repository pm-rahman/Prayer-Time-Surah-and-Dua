import { moreTime } from "@/data/timeDifferenceList";
import React from "react";

const TimeDifferenceContent = ({title,time}) => {
  return (
    <div className="border border-[rgba(76,2,3,.2)] rounded">
      <div className="bg-[rgb(234,141,142)] border-b border-[rgba(76,2,3,.2)] py-1">
        <h5 className="text-lg font-semibold text-center">
          {title}
        </h5>
      </div>
      {/*  */}
      <div className="bg-white border-b border-[rgba(76,2,3,.2)] grid grid-cols-3 font-semibold">
        <div className="col-span-2 border-r border-[rgba(76,2,3,.2)] text-center p-1">
          জেলার নাম
        </div>
        <div className="col-span-1 text-center p-1">
          সময়
        </div>
      </div>
      {time.map((details, index) => (
        <div key={index} className="table_content grid grid-cols-3 cursor-pointer">
          <div className="col-span-2 border-b border-r border-[rgba(76,2,3,.2)] text-center p-1">
            {details?.name?.map((name, index) => (
              <span key={index}>{name}, </span>
            ))}
          </div>
          <div className="col-span-1 border-b border-[rgba(76,2,3,.2)] text-center p-1">
            {details?.time} মিন:
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeDifferenceContent;
