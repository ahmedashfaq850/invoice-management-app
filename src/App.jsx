import React from "react";
import Header from "./Components/Header";
import useDarkMode from "./hooks/useDarkMode";
import MainContainer from "./Components/MainContainer";
import { useState } from "react";
import Form from "./Components/Form";
const App = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [openForm, setOpenForm] = useState(false);

  const handleClick = () => {
    toggleDarkMode();
  };
  return (
    <div
      className={`${
        isDarkMode ? "bg-[#141625] text-white" : "bg-white text-[#141625]"
      } min-h-screen`}
    >
      <div className="flex flex-col lg:flex-row lg:items-start">
        {/* Sidebar */}
        <Header handleFunction={handleClick} darkMode={isDarkMode} />
        {/* Main Content */}
        <div className="relative w-full">
          <div
            className={`${
              openForm ? "inline-block" : "hidden"
            } absolute inset-0 z-10`}
          >
            <div className='w-full h-screen bg-black bg-opacity-70 lg:ml-[-10px]'>
              <Form openFormState={openForm} setOpenFormFunc={setOpenForm} darkMode={isDarkMode}/>
            </div>
          </div>
          <div className="relative z-0">
            <MainContainer darkMode={isDarkMode} setOpenFormFunc={setOpenForm}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
