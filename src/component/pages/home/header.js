import yearData from "@/data/yearData";
import Banner from "./banner";
import HighlightTime from "./highlightTime";

const Header = ({ monthIndex }) => {
  const todayDate = new Date()
    .toISOString()
    .slice(0, 10)
    .split("-")
    .reverse()
    .join("-");
  const todayData = yearData?.months[monthIndex]?.monthData?.find(
    (month) => month.date === todayDate
  );
  return (
    <div id="time-schedule" className="mt-4">
      {/* Banner */}
      <Banner todayDate={todayDate} />
      <div className="sm:px-8">
        <HighlightTime todayData={todayData} />
      </div>
    </div>
  );
};

export default Header;
