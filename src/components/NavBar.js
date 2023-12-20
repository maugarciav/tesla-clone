import React, { useState } from "react";
import TeslaLogo from "../assets/TeslaLogo";
import Icon from "../components/Icon";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { TbWorld } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { TfiClose } from "react-icons/tfi";
import Page from "../components/Page";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center p-4 px-8 text-xs font-semibold">
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
          <li className="py-1 px-2  text-xl hover:rounded hover:bg-black/5">
            <HiOutlineQuestionMarkCircle />
          </li>
          <li className="py-1 px-2 text-xl hover:rounded hover:bg-black/5">
            <TbWorld />
          </li>
          <li className="py-1 px-2 text-xl hover:rounded hover:bg-black/5">
            <CgProfile />
          </li>
        </ul>
      </div>

      <div className="lg:hidden">
        <button
          onClick={handleNav}
          className="inline-flex item-center roaded-md py-2 px-4 text-sm font-medium bg-black/5 shadow-sm hover:bg-black/10"
        >
          Menu
        </button>
      </div>

      <div
        className={
          nav
            ? "bg-white absolute right-0 top-0 w-full h-full z-20"
            : "fixed right-[-100%]"
        }
      >
        <div className="flex justify-end pr-8 pt-8">
          <TfiClose
            onClick={handleNav}
            className="rounded p-1 hover:bg-black/5"
            size={32}
          />
        </div>
        <ul className="pt-8 px-6">
          <Page title={"Vehicles"} />
          <Page title={"Energy"} />
          <Page title={"Charging"} />
          <Page title={"Discover"} />
          <Page title={"Shop"} />
          <Page title={"Support"} />
          <Page title={"United States"} />
          <Page title={"Account"} />
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
