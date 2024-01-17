"use client";
import { useState } from "react";
import ActiveLink from "../activeLink";
import TinyScreenBar from "./tinyScreenBar";

const TinyNavbar = () => {
  const [isNavbarShow, setIsNavbarShow] = useState(false);
  return (
    <div className="md:hidden">
      <TinyScreenBar setIsNavbarShow={setIsNavbarShow} />

      {/* menu */}
      <div
        className={`
        fixed z-[999]
        ${
          isNavbarShow
            ? "visible inset-0 bg-gray-500/60 flex justify-end"
            : "invisible hidden"
        }`}
        onClick={() => setIsNavbarShow((item) => !item)}
      >
        <div className={`bg-[#eed5d5] text-slate-900 border border-r-0 border-[#4C0203] w-1/2 h-full`}>
          <ul className="flex-col gap-5 mt-4">
            <li className="">
              <ActiveLink
                href="#nav-bar"
                className={"py-1 px-3 border-b border-slate-400"}
              >
                হোম
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href="#time-schedule"
                className={"py-1 px-3 border-b border-slate-400"}
              >
                সময় সূচি
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href="#time-difference"
                className={"py-1 px-3 border-b border-slate-400"}
              >
                সময়ের পাথক্য
              </ActiveLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TinyNavbar;
