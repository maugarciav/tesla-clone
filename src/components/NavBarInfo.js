import React from "react";

const NavBarInfo = ({ isOpen }) => (
  <>
    <div
      className={`z-[10] absolute inset-0 bottom-[55%] origin-top shadow-lg bg-white  ${
        isOpen ? "scale-100" : "scale-y-0 scale-x-100"
      } duration-700`}
    ></div>
    <div
      className={`z-[5] absolute inset-0  backdrop-blur-sm ${
        isOpen ? "scale-100" : "scale-0"
      }`}
    ></div>
  </>
);

export default NavBarInfo;


