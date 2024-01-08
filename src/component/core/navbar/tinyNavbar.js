"use client";
import { useState } from "react";
import ActiveLink from "../activeLink";
import TinyScreenBar from "./tinyScreenBar";

const TinyNavbar = ({ user }) => {
  const [isNavbarShow, setIsNavbarShow] = useState(false);
  return (
    <div className="md:hidden">
      <TinyScreenBar setIsNavbarShow={setIsNavbarShow} />

      {/* menu */}
      <div
        onClick={() => setIsNavbarShow((item) => !item)}
        className={`
          ${
            isNavbarShow
              ? "absolute z-50 w-screen h-screen overflow-hidden top-0 right-0 flex flex-col items-end cursor-pointer backdrop-brightness-75 bg-[rgba(76,2,3,.3)]"
              : "hidden"
          }
        `}
      >
        <div
          className={`bg-[#f9ecec] text-slate-900 border-2 border-[#4C0203] flex flex-col items-end w-1/2 h-full py-2 px-3`}
        >
          <ul className="flex gap-5">
            <li>
              <ActiveLink href="#nav-bar">হোম</ActiveLink>
            </li>
            <li>
              <ActiveLink href="#time-schedule">সময় সূচি</ActiveLink>
            </li>
            <li>
              <ActiveLink href="#time-difference">সময়ের পাথক্য</ActiveLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TinyNavbar;
