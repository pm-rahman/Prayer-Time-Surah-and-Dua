import homeImage from "@/assets/icons/home.png";
import addDoc from "@/assets/icons/add-doc.png";
import editDoc from "@/assets/icons/edit-doc.png";
import React from "react";
import ActiveLink from "../activeLink";
import GoogleIcon from "@/component/icons/google-icon";
import Image from "next/image";

const LargeNav = ({ user }) => {
  return (
    <div className="hidden md:flex items-center justify-end gap-5">
      <ul className="flex gap-5">
        <li>
          <ActiveLink href="/">
            <Image
              src={homeImage}
              height={18}
              width={18}
              alt="home icons"
            />
            Home
          </ActiveLink>
        </li>
        {user && (
          <>
            <li>
              <ActiveLink href="/add-month-schedule">
                <Image
                  src={addDoc}
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
              src={editDoc}
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
      <div className="flex gap-1 items-center cursor-pointer hover:tracking-wide">
        <GoogleIcon /> Login
      </div>
    </div>
  );
};

export default LargeNav;
