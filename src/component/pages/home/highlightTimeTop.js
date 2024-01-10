const HighlightTimeTop = ({stage}) => {
  return (
    <div className="lg:col-span-1 bg-[rgb(234,141,142)] shadow hover:shadow-md cursor-pointer py-3 rounded-md flex flex-col justify-center items-center">
      <h3 className="text-lg font-semibold">{stage?.name}</h3>
      <h2 className="text-2xl font-bold">{stage?.time}</h2>
    </div>
  );
};

export default HighlightTimeTop;
