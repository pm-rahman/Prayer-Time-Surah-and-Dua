import React from "react";

const BarIcon = ({ borderColor }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex w-12 gap-1">
        <span
          className={`w-[6px] h-[4px] border-2 ${borderColor?"border-slate-200":borderColor} rounded-full`}
        ></span>
        <span
          className={`w-8 h-[4px] border-2 ${borderColor?"border-slate-200":borderColor} rounded-lg`}
        ></span>
      </div>
      <div className="flex w-12 gap-1">
        <span
          className={`w-[6px] h-[4px] border-2 ${borderColor?"border-slate-200":borderColor} rounded-full`}
        ></span>
        <span
          className={`w-8 h-[4px] border-2 ${borderColor?"border-slate-200":borderColor} rounded-lg`}
        ></span>
      </div>
      <div className="flex w-12 gap-1">
        <span
          className={`w-[6px] h-[4px] border-2 ${borderColor?"border-slate-200":borderColor} rounded-full`}
        ></span>
        <span
          className={`w-8 h-[4px] border-2 ${borderColor?"border-slate-200":borderColor} rounded-lg`}
        ></span>
      </div>
    </div>
  );
};

export default BarIcon;
