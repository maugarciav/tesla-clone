import React from "react";
import TeslaLogo from "../assets/TeslaLogo";


const NavBar = () => {
  return (
    <div className= "flex justify-between items-center p-4 px-8 text-xs font-semibold">
      <div>
        <TeslaLogo/>
      </div>
      <div className="hidden lg:inline">
        <ul className="flex justify-center hover:cursor-pointer">
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">Vehicles</li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">Energy</li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">Charging</li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">Discover</li>
          <li className="py-1 px-3 hover:rounded hover:bg-black/5">Shop</li>
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
        <button className= "inline-flex item-center roaded-md py-2 px-4 text-sm font-medium bg-black/5 shadow-sm hover:bg-black/10">Menu</button>
      </div>


    </div>
  );
};

export default NavBar;
