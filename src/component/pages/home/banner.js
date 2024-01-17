import Image from "next/image";
import masjid from "@/assets/masjid.png";
import sunset from "@/assets/sunset.jpg";
import weekDay from "@/data/weekDayData";

const Banner = ({ todayDate }) => {
  const todayDayIndex = new Date().getDay();
  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <div className="py-2 px-4 flex items-center justify-between bg-[rgb(255,183,185)]">
        <div className="flex items-center gap-2 text-xl">
          <figure className="w-11 h-11 overflow-hidden bg-white rounded-full flex justify-center items-center">
            <Image src={masjid} alt="masjid image" width={25} height={25} />
          </figure>
          নামাজের সময় সূচি
        </div>
        <h4 className=" text-base font-semibold ">ঢাকার সময় অনুযায়ী</h4>
      </div>
      <div className="h-28 lg:h-auto relative overflow-hidden">
        <Image
          src={sunset}
          alt="sunset image"
          width={1200}
          height={300}
          className="w-full h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(76,2,3,.3)] flex flex-col justify-center items-center">
          <h4 className="backdrop-brightness-75 relative px-4 py-1 rounded sm:bottom-6 text-white text-lg font-semibold">
            তারিখ: {todayDate} (
            {weekDay.map((day, index) => (
              <span key={day._id}>{todayDayIndex === index && day.day}</span>
            ))}
            )
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Banner;
