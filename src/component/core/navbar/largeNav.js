import Link from "next/link";
import React from "react";
import ActiveLink from "../activeLink";
import GoogleIcon from "@/component/icons/google-icon";

const LargeNav = ({ user }) => {
  return (
    <div className="hidden md:flex items-center justify-end gap-5">
      <ul className="flex gap-5">
        <li>
          <ActiveLink href="/">Home</ActiveLink>
        </li>
        {user && (
          <>
            <li>
              <ActiveLink href="/add-month-schedule">Add Schedule</ActiveLink>
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
  );
};

export default LargeNav;
