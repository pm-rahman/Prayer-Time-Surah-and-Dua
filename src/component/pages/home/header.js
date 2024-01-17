import Banner from "./banner";
import HighlightTime from "./highlightTime";

const Header = () => {
  return (
    <div id="time-schedule" className="mt-4">
      {/* Banner */}
      <Banner />
      <div className="py-6 sm:px-8">
        <HighlightTime />
      </div>
    </div>
  );
};

export default Header;
