import React, { useState } from "react";
import NavBarInfo from "../components/NavBarInfo"


const Icon = ({ icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <li
        onMouseOver={toggleNavBar}
        onMouseLeave={toggleNavBar}
        className="selection:py-1 px-3 z-[20] hover:rounded hover:bg-black/5"
      >
        {icon}
      </li>
      <NavBarInfo isOpen={isOpen} />
    </>
  );
};

export default Icon