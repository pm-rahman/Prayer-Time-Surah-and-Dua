import yearData from "@/data/yearData";
import SingleCalender from "./singleCalender";

const Calender = ({todayDate,monthIndex}) => {
  return (
    <>
      {/* header */}
      <div className="bg-white py-4 flex justify-center items-center rounded-t-md border border-b-0 border-[rgba(76,2,3,.2)]">
        <h2 className="text-lg font-bold">{yearData?.months?.[monthIndex]?.monthName}</h2>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full table-auto text-end border-collapse border border-[rgba(76,2,3,.2)] rounded-b-md font-semibold">
          <thead>
            <tr className="bg-[rgb(234,141,142)]">
              <th className="w-2 last:py-1 px-2 border border-[rgba(76,2,3,.2)]">
                তারিখ
              </th>
              <th className="py-1 px-2 border border-[rgba(76,2,3,.2)]">
                সেহরি শেষ
              </th>
              <th className="py-1 px-2 border border-[rgba(76,2,3,.2)]">ফজর শুরু</th>
              <th className="py-1 px-2 border border-[rgba(76,2,3,.2)]">
                সূর্যোদয়ের সময়
              </th>
              <th className="py-1 px-2 border border-[rgba(76,2,3,.2)]">
                জোহর শুরু
              </th>
              <th className="py-1 px-2 border border-[rgba(76,2,3,.2)]">আছর শুরু</th>
              <th className="py-1 px-2 border border-[rgba(76,2,3,.2)]">
                মাগরিব শুরু, ইফতার শুরু
              </th>
              <th className="py-1 px-2 border border-[rgba(76,2,3,.2)]">এশা শুরু</th>
            </tr>
          </thead>
          <tbody className="cursor-pointer">
            {yearData?.months[monthIndex]?.monthData?.map((month,index) => (<SingleCalender
            key={index+1}
            month={month}
            todayDate={todayDate}
            />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Calender;
