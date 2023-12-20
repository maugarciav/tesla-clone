import React from "react";
import TeslaLogo from "../assets/TeslaLogo";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-4 px-8 text-xs font-semibold">
      <div>
        <a href="https://tesla.com">
          <TeslaLogo />
        </a>
      </div>
      <div className="hidden lg:inline">
        <ul className="flex justify-center hover:cursor-pointer">
          <SideBarIcon icon={"Vehicles"} />
          <SideBarIcon icon={"Energy"} />
          <SideBarIcon icon={"Charging"} />
          <SideBarIcon icon={"Discover"} />
          <SideBarIcon icon={"Shop"} />
        </ul>
      </div>

      <div className="hidden lg:inline">
        <ul className="flex justify-center hover:cursor-auto">
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">Shop</li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">Account</li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">Menu</li>
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

const SideBarIcon = ({ icon, text = "tooltip" }) => (
  <>
    <li className="py-1 px-3 hover:rounded hover:bg-black/5 group">
      {icon}
    <div className="absolute inset-0 bottom-[40%] scale-0 shadow-lg bg-white duration-500 origin-top  group-hover:scale-100">
      {icon}
    </div>
    </li>
  </>
);

export default NavBar;
