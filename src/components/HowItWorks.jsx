import React from "react";
import dollar from "../assets/dollar (2).png";
import valuelight from "../assets/light icons/quality-service.png";
import rupeelight from "../assets/light icons/coin.png";
import upload from "../assets/light icons/upload.png";

export const HowItWorks = ({ DarkMode }) => {
  return (
    <>
      <section className="mt-12">
        <h1 className="text-center mb-4 uppercase text-2xl font-semibold font-montserrat max-[415px]:text-xl">
          how it Works
        </h1>
        <div className="max-w-screen-sm mx-auto flex justify-around ">
          <div className="flex gap-4 flex-wrap  justify-between max-[415px]:justify-center ">
            <div
              data-aos="fade-right"
              className=" border-black/20  min-w-[200px] flex flex-col border dark:border-white/20 shadow-xl items-center  gap-2 dark:bg-slate-900/50 p-4 rounded-lg "
            >
              {DarkMode ? (
                <i className="bi bi-file-earmark-arrow-up text-5xl text-[#f5f5f5f]"></i>
              ) : (
                <img src={upload} alt="" className="max-w-[58px]" />
              )}
              <p className="uppercase text-black dark:text-gray-200 mt-3">
                <strong>upload license</strong>
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="flex border-black/20 min-w-[200px]  flex-col border dark:border-white/20 shadow-xl items-center  gap-2 dark:bg-slate-900/50 p-4 rounded-lg"
            >
              {DarkMode ? (
                <i className="bi bi-currency-dollar text-4xl text-[#f5f5f5f] p-1 border-[3px] rounded-md"></i>
              ) : (
                <img src={valuelight} alt="" className="max-w-16" />
              )}

              <p className="uppercase text-black dark:text-gray-200 mt-2">
                <strong>get valuation</strong>
              </p>
            </div>
            <div
              data-aos="fade-left"
              className="flex  border-black/20 min-w-[200px]  flex-col border dark:border-white/20 shadow-xl items-center  gap-2 dark:bg-slate-900/50 p-4 rounded-lg"
            >
              {DarkMode ? (
                <img src={dollar} alt="dollar" className="max-w-16" />
              ) : (
                <img src={rupeelight} alt="dollar" className="max-w-16" />
              )}

              <p className="uppercase  text-black dark:text-gray-200 mt-2">
                <strong>get paid</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
