"use client";

import BarIcon from "@/component/icons/bar-icon";

const TinyScreenBar = ({ setIsNavbarShow }) => {
  return (
    <button
      onClick={() => setIsNavbarShow((item) => !item)}
      className="flex justify-end"
    >
      <BarIcon/>
    </button>
  );
};

export default TinyScreenBar;
