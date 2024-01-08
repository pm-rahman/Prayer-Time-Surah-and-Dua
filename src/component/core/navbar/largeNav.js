import React from "react";
import ActiveLink from "../activeLink";

const LargeNav = () => {
  return (
    <div className="hidden md:flex items-center justify-end gap-5">
      <ul className="flex gap-5">
        <li>
          <ActiveLink href="#nav-bar">
            হোম
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="#time-schedule">
            সময় সূচি
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="#time-difference">
            সময়ের পাথক্য
          </ActiveLink>
        </li>
      </ul>
    </div>
  );
};

export default LargeNav;
