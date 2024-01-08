import { lessTime } from "@/data/timeDifferenceList";
import React from "react";

const TimeDifferenceRight = () => {
  return (
    <>
      <div className="mt-3 col-span-4 border border-[rgba(76,2,3,.2)] py-1 bg-[rgb(234,141,142)]">
        <h5 className="text-lg font-semibold text-center">
          ঢাকার সময় হতে কমাতে হবে
        </h5>
      </div>
      {/*  */}
      <div className="col-span-4 bg-white grid grid-cols-3 font-semibold">
        <div className="col-span-2 border border-[rgba(76,2,3,.2)] text-center p-1">
          জেলার নাম
        </div>
        <div className="col-span-1 border border-[rgba(76,2,3,.2)] text-center p-1">
          সময়
        </div>
      </div>
      {lessTime.map((details, index) => (
        <div key={index} className="table_content col-span-4 grid grid-cols-3">
          <div className="col-span-2 border border-[rgba(76,2,3,.2)] text-center p-1">
            {details?.name?.map((name, index) => (
              <span key={index}>{name}, </span>
            ))}
          </div>
          <div className="col-span-1 border border-[rgba(76,2,3,.2)] text-center p-1">
            {details?.time} মিন:
          </div>
        </div>
      ))}
    </>
  );
};

export default TimeDifferenceRight;
