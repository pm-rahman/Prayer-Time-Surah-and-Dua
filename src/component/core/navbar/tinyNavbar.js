"use client";

import { useState } from "react";
import ActiveLink from "../activeLink";
import GoogleIcon from "@/component/icons/google-icon";
import TinyScreenBar from "./tinyScreenBar";

const TinyNavbar = ({ user }) => {
  const [isNavbarShow, setIsNavbarShow] = useState(true);
  return (
    <div className="md:hidden">
      <TinyScreenBar setIsNavbarShow={setIsNavbarShow} />

      {/* menu */}
      <div
        onClick={()=>setIsNavbarShow((item) => !item)}
        className={
          isNavbarShow
            ? "px-2 absolute w-screen h-screen top-0 right-0 flex flex-col items-end cursor-pointer backdrop-brightness-75 bg-[rgba(76,2,3,.3)]"
            : "hidden"
        }
      >
        <div className="bg-slate-50 text-slate-900 flex flex-col items-end w-1/2 h-full py-2 px-3">
          <ul className="flex flex-col items-end">
            <li>
              <ActiveLink href="/">Home</ActiveLink>
            </li>
            {user && (
              <>
                <li>
                  <ActiveLink href="/add-month-schedule">
                    Add Schedule
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/update-month-schedule">
                    Update Schedule
                  </ActiveLink>
                </li>
              </>
            )}
          </ul>
          <div className="flex gap-1 items-center cursor-pointer hover:tracking-wide">
            <GoogleIcon /> login
          </div>
        </div>
      </div>
    </div>
  );
};

export default TinyNavbar;
