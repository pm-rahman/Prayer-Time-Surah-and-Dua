"use client";
import Image from "next/image";
import masjid from "@/assets/masjid.png";
import sunset from "@/assets/sunset.jpg";
import { useContext } from "react";
import { TimeContext } from "@/context/TimeProvider";

const Banner = () => {
  const { todayDate, dayName } = useContext(TimeContext);
  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <div className="py-2 px-4 flex flex-col sm:flex-row gap-3 items-center justify-between bg-[rgb(255,183,185)]">
          <div className="flex-1">
            <div className="flex items-center gap-3">
          <figure className="w-11 h-11 overflow-hidden bg-white rounded-full flex justify-center items-center">
            <Image src={masjid} alt="masjid image" width={25} height={25} />
          </figure>
          <span className="text-xl">নামাজের সময় সূচি <h4 className="sm:hidden text-base font-semibold ">ঢাকার সময় অনুযায়ী</h4></span>
            </div>
          </div>
        <h4 className="hidden sm:block text-base font-semibold ">ঢাকার সময় অনুযায়ী</h4>
      </div>
      <div className="h-auto relative overflow-hidden">
        <Image
          src={sunset}
          alt="sunset image"
          width={1200}
          height={300}
          className="w-full h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(76,2,3,.3)] flex flex-col justify-center items-center">
          <h4 className="backdrop-brightness-50 relative px-5 py-2 rounded sm:bottom-6 text-white text-lg font-semibold">
            তারিখ: {todayDate}<span>{dayName ?` - { ${dayName} }` : ""}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Banner;
