import Calender from "@/component/pages/home/calender";
import Header from "@/component/pages/home/header";
import TagLine from "@/component/pages/home/tagLine";
import TimeDifference from "@/component/pages/home/timeDifference";
import Link from "next/link";

export default function Home() {
  const todayDate = new Date()?.toISOString()?.slice(0, 10)?.split("-")?.reverse()?.join("-");
  const monthIndex=new Date()?.getMonth();
  return <div
  className="mt-10 md:mt-24 border-t border-[rgba(76,2,3,.2)] container"
  >
    <TagLine/>
    <div className="pt-3"><Link href="#time-difference" className="underline text-blue-600">বি:দ্র: ঢাকার সময় হতে কতক্ষন বাড়াতে হবে, চাপ ‍দিয়ে জেনে নিন।</Link></div>
    <Header todayDate={todayDate} monthIndex={monthIndex}/>
    <Calender todayDate={todayDate} monthIndex={monthIndex}/>
    <TimeDifference/>
  </div>;
}