"use client";
import homeDark from "@/assets/icons/home-dark.png";
import addDocDark from "@/assets/icons/add-doc-dark.png";
import editDocDark from "@/assets/icons/edit-doc-dark.png";
import { useState } from "react";
import ActiveLink from "../activeLink";
import GoogleIcon from "@/component/icons/google-icon";
import TinyScreenBar from "./tinyScreenBar";
import Image from "next/image";

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
              ? "absolute w-screen h-screen overflow-hidden top-0 right-0 flex flex-col items-end cursor-pointer backdrop-brightness-75 bg-[rgba(76,2,3,.3)]"
              : "hidden"
          }
        `}
      >
        <div
          className={`bg-slate-50 text-slate-900 border-2 border-[#4C0203] flex flex-col items-end w-1/2 h-full py-2 px-3`}
        >
          <ul className="flex flex-col gap-[1px] items-end">
            <li>
              <ActiveLink href="/">
                <Image src={homeDark} height={18} width={18} alt="home icons" />
                Home
              </ActiveLink>
            </li>
            {user && (
              <>
                <li>
                  <ActiveLink href="/add-month-schedule">
                    <Image
                      src={addDocDark}
                      height={18}
                      width={18}
                      alt="home icons"
                    />
                    Add Schedule
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/update-month-schedule">
                    <Image
                      src={editDocDark}
                      height={18}
                      width={18}
                      alt="home icons"
                    />
                    Update Schedule
                  </ActiveLink>
                </li>
              </>
            )}
          </ul>
          <div className="w-full flex justify-end pb-1 gap-1 items-center cursor-pointer hover:tracking-wide border-b border-[#4C0203]">
            <GoogleIcon /> Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default TinyNavbar;
