import Calender from "@/component/pages/home/calender";
import Header from "@/component/pages/home/header";
import TagLine from "@/component/pages/home/tagLine";

export default function Home() {
  const todayDate = new Date().toISOString().slice(0, 10).split("-").reverse().join("-");
  const monthIndex=new Date().getMonth()
  return <div
  className="mt-10 md:mt-24 border-t border-[rgba(76,2,3,.2)] container"
  >
    <TagLine/>
    <Header todayDate={todayDate} monthIndex={monthIndex}/>
    <Calender todayDate={todayDate} monthIndex={monthIndex}/>
  </div>;
}