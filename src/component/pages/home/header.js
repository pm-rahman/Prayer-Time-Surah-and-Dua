import yearData from "@/data/yearData";
import Banner from "./banner";
import HighlightTime from "./highlightTime";

const namaz = [
  {
    _id: 1,
    name: "ফজর শুরু",
    time: "৫:২১",
  },
  {
    _id: 2,
    name: "সূর্যোদয়ের সময়",
    time: "৬:৪২",
  },
  {
    _id: 3,
    name: "জোহর শুরু",
    time: "১২:০৮",
  },
  {
    _id: 4,
    name: "আছর শুরু",
    time: "৩:৪৯",
  },
  {
    _id: 5,
    name: "মাগরিব শুরু",
    time: "৫:২৯",
  },
  {
    _id: 6,
    name: "এশা শুরু",
    time: "৬:৪৮",
  },
];

const Header = ({ monthIndex }) => {
  const todayDate = new Date().toISOString().slice(0, 10).split("-").reverse().join("-");
  const todayData = yearData?.months[monthIndex]?.monthData?.find(
    (month) => month.date === todayDate
  );
  return (
    <div id="time-schedule" className="mt-4">
      {/* Banner */}
      <Banner todayDate={todayDate} />
      <HighlightTime todayData={todayData} />
    </div>
  );
};

export default Header;
