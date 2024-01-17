import yearData from "@/data/yearData";
import Banner from "./banner";
import HighlightTime from "./highlightTime";

const Header = ({ monthIndex }) => {
  const todayDate = new Date()
    .toISOString()
    .slice(5, 10)
    .split("-")
    .reverse()
    .join("-");
  const todayData = yearData?.months[monthIndex]?.monthData.find(day=>day.date===todayDate);
  return (
    <div id="time-schedule" className="mt-4">
      {/* Banner */}
      <Banner todayDate={todayDate} />
      <div className="py-6 sm:px-8">
        <HighlightTime todayData={todayData} />
      </div>
    </div>
  );
};

export default Header;
