import React from "react";

const CalenderHeader = () => {
  return (
    <thead>
      <tr className="bg-[rgb(234,141,142)]">
        <th className="w-2 last:py-1 px-2 border border-[rgba(76,2,3,.2)]">
          তারিখ
        </th>
        <th className="py-1 px-2 border border-[rgba(76,2,3,.2)]">সেহরি শেষ</th>
        <th className="py-1 px-2 border border-[rgba(76,2,3,.2)]">ফজর শুরু</th>
        <th className="py-1 px-2 border border-[rgba(76,2,3,.2)]">
          সূর্যোদয়ের সময়
        </th>
        <th className="py-1 px-2 border border-[rgba(76,2,3,.2)]">জোহর শুরু</th>
        <th className="py-1 px-2 border border-[rgba(76,2,3,.2)]">আছর শুরু</th>
        <th className="w-fit py-1 px-2 border border-[rgba(76,2,3,.2)]">
          মাগরিব শুরু, ইফতার শুরু
        </th>
        <th className="py-1 px-2 border border-[rgba(76,2,3,.2)]">এশা শুরু</th>
      </tr>
    </thead>
  );
};

export default CalenderHeader;
