import Image from "next/image";
import masjid from "@/assets/masjid.png";
import sunset from "@/assets/sunset.jpg";

const namaz = [
  {
    _id: 1,
    name: "ফজর",
    time: "৫:২১",
  },
  {
    _id: 2,
    name: "সূযোদয়",
    time: "৬:৪২",
  },
  {
    _id: 3,
    name: "জোহর",
    time: "১২:০৮",
  },
  {
    _id: 4,
    name: "আছর",
    time: "৩:৪৯",
  },
  {
    _id: 5,
    name: "মাগরিব",
    time: "৫:২৯",
  },
  {
    _id: 6,
    name: "এশা",
    time: "৬:৪৮",
  },
];

const Header = () => {
  const todayDate = new Date().toISOString().slice(0, 10).split("-").reverse().join("-");

  return (
    <div className="mt-4">
      {/* top side */}
      <div className="rounded-lg overflow-hidden shadow-md">
        <div className="py-2 px-4 flex items-center justify-between bg-[rgb(234,141,142)]">
          <div className="flex items-center gap-2 text-xl">
            <figure className="w-12 h-12 overflow-hidden bg-white rounded-full flex justify-center items-center">
              <Image src={masjid} alt="masjid image" width={25} height={25} />
            </figure>
            নামাজের সময় সূচি
          </div>
          <h4 className="text-base font-semibold ">ঢাকার সময় অনুযায়ী</h4>
        </div>
        <div className="h-28 lg:h-48 relative overflow-hidden">
          <Image
            src={sunset}
            alt="sunset image"
            width={1200}
            height={300}
            className="w-full relative bottom-3 lg:bottom-12"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(76,2,3,.3)] flex justify-center items-center">
            <h4 className="relative bottom-6 text-lg font-semibold">
              তারিখ: {todayDate}
            </h4>
          </div>
        </div>
      </div>
      {/* middle */}
      <div className="relative bottom-10 px-6 lg:px-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {namaz.map((salat) => (
          <div
            key={salat._id}
            className="lg:col-span-1 bg-[rgb(234,141,142)] shadow-md py-3 rounded-md flex flex-col justify-center items-center"
          >
            <h3 className="text-lg font-semibold">{salat.name}</h3>
            <h2 className="text-2xl font-bold">{salat.time}</h2>
          </div>
        ))}
      </div>
      {/* button */}
      <div className="relative bottom-6 grid grid-cols-2 gap-4">
        <div className="lg:col-span-1 bg-[rgb(234,141,142)] shadow-md py-3 rounded-md flex flex-col justify-center items-center">
          <h2 className="text-lg font-semibold">সাহারী: ৫:২১</h2>
        </div>
        <div className="lg:col-span-1 bg-[rgb(234,141,142)] shadow-md py-3 rounded-md flex flex-col justify-center items-center">
          <h2 className="text-lg font-semibold">ইফতার: ৫:২৯</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
