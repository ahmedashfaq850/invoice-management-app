import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { useState } from "react";



const MainContainer = ({ darkMode, setOpenFormFunc }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [checkboxes, setCheckboxes] = useState({
    paid: false,
    pending: false,
    draft: false,
  });

  /* handle Checkbox functionality */
  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }));
  };

  /* Handle Filter box show and hide functionality */

  const handleFilterBox = () => {
    setShowFilter((prevShowFilter) => !prevShowFilter);
  }

  const handleNewinvoice = () => {
    setOpenFormFunc(true)
  }

  return (
    <div>
      <div className="lg:w-[60%] w-full lg:mt-20 mt-10 px-5 lg:px-0  lg:mx-auto flex items-center justify-between">
        {/* Left side */}
        <div>
          <h1 className="font-bold text-xl lg:text-3xl">Invoices</h1>
          <p className="text-gray-400 text-[10px] lg:text-sm mt-1">
            There are 7 total invoices.
          </p>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-3 lg:gap-8 relative">
          <p className="flex gap-1 lg:gap-2 font-semibold text-sm">
            Filter <span className="hidden lg:block">by status</span>{" "}
            <span>
              {showFilter ? (<BiChevronUp
              onClick={handleFilterBox}
                className="cursor-pointer"
                color="#896efa"
                size={20}
              />) : <BiChevronDown
              onClick={handleFilterBox}
                className="cursor-pointer"
                color="#896efa"
                size={20}
              />}
            </span>
          </p>
          <button onClick={handleNewinvoice} className="flex justify-center items-center gap-2 bg-[#896efa] text-white font-semibold px-3 py-1 lg:py-2 rounded-full">
            <BiPlus
              className="bg-white rounded-full w-[30px] h-[28px]"
              color="#896efa"
              size={20}
            />{" "}
            <p>
              New <span className="hidden lg:inline-block">invoce</span>
            </p>
          </button>
          {/* Model Box */}
          <div className={`w-[130px] min-h-[80px] p-4 rounded-md shadow-md ${darkMode ? 'bg-[#1e2139] text-white' : 'text-gray-500 bg-white'} ${showFilter ? 'inline-block' : 'hidden'} absolute top-10 left-[-5px] z-50  text-md`}>
            <div className="flex flex-col gap-1">
              <label>
                <input
                  className="mr-2 checked:bg-[#896efa] checked:border-transparent checked:text-white"
                  type="checkbox"
                  checked={checkboxes.paid}
                  onChange={() => handleCheckboxChange("paid")}
                />
                paid
              </label>
              <label>
                <input
                  className="mr-2"
                  type="checkbox"
                  checked={checkboxes.pending}
                  onChange={() => handleCheckboxChange("pending")}
                />
                pending
              </label>
              <label>
                <input
                  className="mr-2"
                  type="checkbox"
                  checked={checkboxes.draft}
                  onChange={() => handleCheckboxChange("draft")}
                />
                draft
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
