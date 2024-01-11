import yearData from "@/data/yearData";
import SingleCalender from "./singleCalender";
import CalenderHeader from "./calenderHeader";
import CalenderTitle from "./calenderTitle";

const Calender = ({ todayDate, monthIndex }) => {
  return (
    <div className="relative sm:bottom-9">
      {/* current month */}
      <CalenderTitle monthIndex={monthIndex} />

      <div className="relative overflow-x-auto">
        <table className="w-full table-auto text-center border-collapse border border-[rgba(76,2,3,.2)] rounded-b-md font-semibold">
          <CalenderHeader />
          <tbody className="cursor-pointer">
            {yearData?.months[monthIndex]?.monthData?.map((month, index) => (
              <SingleCalender
                key={index + 1}
                month={month}
                todayDate={todayDate}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* next month */}
      <CalenderTitle className={'mt-4'} monthIndex={monthIndex+1} />

      <div className="relative overflow-x-auto">
        <table className="w-full table-auto text-center border-collapse border border-[rgba(76,2,3,.2)] rounded-b-md font-semibold">
          <CalenderHeader />
          <tbody className="cursor-pointer">
            {yearData?.months[monthIndex+1]?.monthData.slice(0,5)?.map((month, index) => (
              <SingleCalender
                key={index + 1}
                month={month}
                todayDate={todayDate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calender;
