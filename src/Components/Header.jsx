import React from "react";
import invoice from "../assets/invoice.png";
import { BsMoonFill } from "react-icons/bs";
import { BiSun } from "react-icons/bi";

const Header = ({ handleFunction, darkMode }) => {
  console.log(darkMode);
  return (
    <section className="z-50">
      {/* Large Screen header */}
      <div className="hidden lg:block">
        <div className="bg-[#373b53] w-[70px] flex flex-col items-center rounded-r-xl h-screen">
          {/* logo  */}
          <div className="flex-grow">
            <img
              className="mx-auto pt-4 "
              src={invoice}
              alt="logo"
              width={50}
              height={50}
            />
          </div>

          {/* Toggle Mode */}
          <button className="pb-5">
          {darkMode ? (<BsMoonFill onClick={handleFunction} className="text-purple-300" />) : 
            <BiSun onClick={handleFunction} className="text-purple-300" />}
          </button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="block lg:hidden">
        <div className="w-full h-[50px] flex justify-between items-center my-auto bg-[#373b53] px-5">
          {/* Logo */}
          <div className="">
            <img
              className="mx-auto"
              src={invoice}
              alt="logo"
              width={35}
              height={25}
            />
          </div>

          {/* Toggle Mode */}
          <div>
            {darkMode ? (<BsMoonFill onClick={handleFunction} className="text-purple-300" />) : 
            <BiSun onClick={handleFunction} className="text-purple-300" />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
