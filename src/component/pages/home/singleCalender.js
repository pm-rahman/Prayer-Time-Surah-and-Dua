import React from "react";

const SingleCalender = ({month,todayDate}) => {
    const {
        banglaDate,
        shari,
        fazar,
        sunrise,
        johor,
        asor,
        magrib,
        esa
    }=month;
  return (
    <tr
      className={`${
        month?.date === todayDate && "bg-[rgba(76,2,3,.3)]"
      } table_content`}
    >
      <td className="w-2 py-1 px-2 border border-[rgba(76,2,3,.2)]">{banglaDate.split("-")[0]}</td>
      <td className="py-1 px-2 border border-[rgba(76,2,3,.2)]">{shari.time}</td>
      <td className="py-1 px-2 border border-[rgba(76,2,3,.2)]">{fazar.time}</td>
      <td className="py-1 px-2 border border-[rgba(76,2,3,.2)]">{sunrise.time}</td>
      <td className="py-1 px-2 border border-[rgba(76,2,3,.2)]">{johor.time}</td>
      <td className="py-1 px-2 border border-[rgba(76,2,3,.2)]">{asor.time}</td>
      <td className="py-1 px-2 border border-[rgba(76,2,3,.2)]">{magrib.time}</td>
      <td className="py-1 px-2 border border-[rgba(76,2,3,.2)]">{esa.time}</td>
    </tr>
  );
};

export default SingleCalender;
