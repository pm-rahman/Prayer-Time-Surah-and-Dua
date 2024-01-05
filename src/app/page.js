import Calender from "@/component/pages/home/calender";
import Header from "@/component/pages/home/header";
import TagLine from "@/component/pages/home/tagLine";

export default function Home() {
  return <div
  className="mt-10 md:mt-24 border-t border-[rgba(76,2,3,.2)] container"
  >
    <TagLine/>
    <Header/>
    <Calender/>
  </div>;
}