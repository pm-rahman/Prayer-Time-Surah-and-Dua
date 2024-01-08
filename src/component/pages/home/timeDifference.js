import TimeDifferenceLeft from "./timeDifferenceLeft";
import TimeDifferenceRight from "./timeDifferenceRight";
import TimeDifferenceTable from "./timeDifferenceTable";
import TimeDifferenceTitle from "./timeDifferenceTitle";

const TimeDifference = () => {
  return (
    <div id="time-difference" className="mt-6 sm:mt-7 rounded">
      <h3 className="text-xl font-bold text-center">
        ইসলামিক ফাউন্ডেশন বাংলাদেশ কর্তৃক নির্ধারিত সময়।
      </h3>

      <div className="col-span-4 md:col-span-8 grid grid-cols-4 md:grid-cols-8">
        <TimeDifferenceLeft />
        <TimeDifferenceRight />
      </div>
    </div>
  );
};

export default TimeDifference;
