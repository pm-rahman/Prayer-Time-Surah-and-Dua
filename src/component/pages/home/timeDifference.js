import TimeDifferenceContent from "./timeDifferenceContent";
import { moreTime } from "@/data/timeDifferenceList";
import { lessTime } from "@/data/timeDifferenceList";

const TimeDifference = () => {
  return (
    <div id="time-difference" className="mt-6 sm:mt-7 rounded">
      <h3 className="text-xl font-bold text-center">
        ইসলামিক ফাউন্ডেশন বাংলাদেশ কর্তৃক নির্ধারিত সময়।
      </h3>

      <div className="flex flex-col gap-4 mt-5">
        <TimeDifferenceContent
          title={"ঢাকার সময় হতে বাড়াতে হবে।"}
          time={moreTime}
        />
        <TimeDifferenceContent
          title={"ঢাকার সময় হতে কমাতে হবে।"}
          time={lessTime}
        />
      </div>
    </div>
  );
};

export default TimeDifference;
