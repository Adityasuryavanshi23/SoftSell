import React from "react";
import sarah from "../assets/sarah rb.png";
import micheal from "../assets/micheal_new-removebg-preview.png";
export const TestiMonials = () => {
  const testimonials = [
    {
      photo: sarah,
      name: "sarah m.",
      role: "it manager | tech solutions",
      message:
        "softsell made selling our unused licenses simple and profitable",
    },
    {
      photo: micheal,
      name: "Micheal J.",
      role: "startup founder | tech solutions",
      message:
        "softsell made selling our unused licenses simple and profitable",
    },
  ];
  return (
    <section className="mt-16">
      <h1 className="text-center mb-4 uppercase text-2xl max-[415px]:text-xl font-semibold font-montserrat">
        customer testimonials
      </h1>
      <div className="max-w-screen-sm mx-auto flex flex-col max-[415px]:px-6 gap-4">
        {testimonials.map((item, index) => (
          <div className="border px-3 py-2 rounded-lg shadow-xl border-black/20 dark:border-white/20 dark:bg-slate-900/50 ">
            <div
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              data-aos-duration="500"
              data-aos-easing="ease-out-cubic"
              data-aos-anchor-placement="top-bottom"
              className="flex items-center gap-2"
            >
              <img
                src={item.photo}
                alt="testimonials-image"
                className="bg-transparent max-w-48 max-[415px]:max-w-32 max-[415px]:border max-[415px]:border-white/20 max-[415px]:rounded-lg dark:bg-slate-950/50   p-4   object-fit"
              />
              <div className="">
                <p className="capitalize font-montserrat font-medium text-md max-[415px]:text-sm  mb-2">
                  {item.message}
                </p>
                <p className="capitalize text-xl  max-[415px]:text-md font-medium font-montserrat mb-2">
                  {item.name}
                </p>
                <p className="capitalize text-black/80 dark:text-gray-400">
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
