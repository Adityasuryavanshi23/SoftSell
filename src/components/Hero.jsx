import React from "react";
import logo from "../assets/light icons/logo-removebg-preview.png";

export const Hero = ({ handleScroll, setDarkMode, DarkMode }) => {
  return (
    <header>
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center mt-[-20px] px-4 ">
        <div className="flex items-center mr-[84px] ">
          <img src={logo} alt="SoftSellLogo" className="max-w-[340px]" />
          <h1 className=" text-4xl dark:text-cyan-400 ml-[-195px] text-black font-montserrat font-semibold">
            oft<span className="uppercase">s</span>ell
          </h1>
        </div>

        <h1 className="font-montserrat font-semibold text-4xl mt-[-30px] max-[521px]:text-2xl max-[521px]:text-center max-[415px]:text-center max-[390px]:text-xl   max-[390px]:text-center">
          Sell Your Unused Software Licenses for Instant cash
        </h1>
        <p className="font-poppins text-center fonr-semibold text-xl mt-4 max-w-screen-md  max-[420px]:text-sm   max-[390px]:text-sm   max-[415px]:text-center">
          SoftSell helps you quickly sell unused or extra software licenses. Get
          a fair valuation and get paid fast — all in a few simple steps.
        </p>
        <div className="flex justify-between items-center mt-12">
          <button
            onClick={handleScroll}
            type="button"
            className="text-white max-[414px]:text-sm bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2 "
          >
            Sell My Licenses
          </button>
          <button
            onClick={() => setDarkMode(!DarkMode)}
            className="max-[414px]:text-sm relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br bg-blue-700 hover:bg-blue-800 hover:text-white dark:text-white   dark:focus:ring-cyan-800"
          >
            <span className="max-[414px]:text-[14px] max-[414px]:px-[13px] max-[414px]:py-[8px] relative px-5 py-2.5 transition-all ease-in duration-75 bg-cyan-200 text-black hover:text-white dark:text-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              {DarkMode ? (
                <i className="bi bi-brightness-alt-high-fill mr-1 text-yellow-400"></i>
              ) : (
                <i className="bi bi-moon-fill mr-1 text-black"></i>
              )}
              {"   "}
              {DarkMode ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
