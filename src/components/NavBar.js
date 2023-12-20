import React, { useState } from "react";
import TeslaLogo from "../assets/TeslaLogo";
import Icon from "../components/Icon"
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { TbWorld } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";



const NavBar = () => {
  return (
    <div className=" z-[20] flex justify-between items-center p-4 px-8 text-xs font-semibold">
      <div className="z-[20]">
        <a href="https://tesla.com">
          <TeslaLogo />
        </a>
      </div>
      <div className="hidden lg:inline">
        <ul className="flex justify-center hover:cursor-pointer">
          <Icon icon={"Vehicles"} />
          <Icon icon={"Energy"} />
          <Icon icon={"Charging"} />
          <Icon icon={"Discover"} />
          <Icon icon={"Shop"} />
        </ul>
      </div>

      <div className="hidden lg:inline z-[20]">
        <ul className="flex justify-center hover:cursor-auto">
          <li className="py-1 px-2  text-xl hover:rounded hover:bg-black/5"><HiOutlineQuestionMarkCircle/></li>
          <li className="py-1 px-2 text-xl hover:rounded hover:bg-black/5"><TbWorld/></li>
          <li className="py-1 px-2 text-xl hover:rounded hover:bg-black/5"><CgProfile/></li>
          
        </ul>
      </div>

      <div className="lg:hidden">
        <button className="inline-flex item-center roaded-md py-2 px-4 text-sm font-medium bg-black/5 shadow-sm hover:bg-black/10">
          Menu
        </button>
      </div>
    </div>
  );
};


export default NavBar;


