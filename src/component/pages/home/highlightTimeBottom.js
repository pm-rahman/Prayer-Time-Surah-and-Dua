const HighlightTimeBottom = ({timeSchedule}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="lg:col-span-1 bg-[rgb(234,141,142)] cursor-pointer shadow hover:shadow-md py-3 rounded-md flex flex-col justify-center items-center">
        <h2 className="text-lg font-semibold">
          {timeSchedule?.shari?.name}:{" "}
          {timeSchedule?.shari?.time}
        </h2>
      </div>
      <div className="lg:col-span-1 bg-[rgb(234,141,142)] cursor-pointer shadow hover:shadow-md py-3 rounded-md flex flex-col justify-center items-center">
        <h2 className="text-lg font-semibold">
          {timeSchedule?.magrib?.name}:{" "}
          {timeSchedule?.magrib?.time}
        </h2>
      </div>
    </div>
  );
};

export default HighlightTimeBottom;
