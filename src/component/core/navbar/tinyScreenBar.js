"use client";
const TinyScreenBar = ({ setIsNavbarShow }) => {
  return (
    <button
      onClick={() => setIsNavbarShow((item) => !item)}
      className="flex justify-end"
    >
      bar
    </button>
  );
};

export default TinyScreenBar;
