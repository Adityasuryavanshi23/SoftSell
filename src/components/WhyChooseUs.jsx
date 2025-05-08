import React from "react";
import thunderDark from "../assets/thunder (3).png";
import dollarDark from "../assets/dollar (2).png";
import shieldDark from "../assets/verified (3).png";
import padDark from "../assets/pad-dar.png";
import shieldLight from "../assets/light icons/security.png";
import padLight from "../assets/light icons/padlock.png";
import thunderLight from "../assets/light icons/thunder.png";
import dollarLight from "../assets/light icons/offer.png";

export const WhyChooseUs = ({ DarkMode }) => {
  const content = [
    {
      heading: "Trusted by Thousands ",
      subheading: "provided by trunsens",
      icon: DarkMode ? shieldDark : shieldLight,
    },
    {
      heading: "Quick and Easy process",
      subheading: "A lightning fast process",
      icon: DarkMode ? thunderDark : thunderLight,
    },
    {
      heading: "competitive offer",
      subheading: "In a very affordale range",
      icon: DarkMode ? dollarDark : dollarLight,
    },
    {
      heading: "secure transaction",
      subheading: "secure payment process",
      icon: DarkMode ? padDark : padLight,
    },
  ];
  return (
    <section className="max-w-screen-sm mx-auto mt-16 ">
      <div className="mt-8 ">
        <h1 className="text-center dark:text-cyan-400 mb-4 uppercase text-2xl font-semibold font-montserrat max-[415px]:text-xl">
          why choose us
        </h1>
        <div className="grid grid-cols-2 max-[415px]:grid-cols-1 max-[415px]:px-4 gap-4">
          {content.map((item, index) => {
            const direction = index < 2 ? "zoom-in-left" : "zoom-in-right";
            return (
              <div
                key={index}
                data-aos={direction}
                data-aos-delay={index * 100}
                data-aos-duration="500"
                data-aos-easing="ease-out-cubic"
                data-aos-anchor-placement="top-bottom"
                className="flex items-center gap-3  shadow-xl  dark:bg-slate-900/50 py-6 px-4 rounded-lg border border-black/20 dark:border-white/20"
              >
                <img src={item.icon} alt={item.heading} className="max-w-14" />
                <div className="flex flex-col gap-2">
                  <p>
                    <strong className="font-montserrat uppercase">
                      {item.heading}
                    </strong>
                  </p>
                  <p className="text-black/80 font-montserrat dark:text-gray-400 capitalize">
                    {item.subheading}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
