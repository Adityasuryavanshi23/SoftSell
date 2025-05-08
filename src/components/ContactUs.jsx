import React, { useRef, useState } from "react";
import toast from "react-hot-toast";

export const ContactUs = () => {
  const [loading, setloading] = useState(false);
  const formRef = useRef(null);
  const handlesubmit = (e) => {
    e.preventDefault();
    setloading(true);

    setTimeout(() => {
      toast.success("Message Submmited!! contact you soon");
      formRef.current.reset();
      setloading(false);
    }, 2000);
  };
  return (
    <section className="mt-12 overflow-hidden max-[415px]:px-6">
      <h1 className="text-center mb-4  uppercase text-2xl max-[415px]:text-xl font-semibold font-montserrat">
        contact us
      </h1>

      <form
        ref={formRef}
        onSubmit={handlesubmit}
        className="max-w-screen-sm mx-auto  p-4 rounded-md dark:bg-slate-900/50 border  border-black/20 shadow-xl dark:border-white/20  "
      >
        <div data-aos="fade-up" data-aos-duration="200" data className="mb-5">
          <label
            for="name"
            className="block font-montserrat mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="name"
            id="name"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            placeholder="your name..."
            required
            autoComplete="off"
          />
        </div>
        <div data-aos="fade-up" data-aos-duration="300" className="mb-5">
          <label
            for="email"
            className="block font-montserrat capitalize mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            required
            placeholder="your email..."
            autoComplete="off"
          />
        </div>
        <div data-aos="fade-up" data-aos-duration="400" className="mb-5">
          <label
            for="Company"
            className="block font-montserrat mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Company
          </label>
          <input
            type="text"
            id="Company"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
            required
            autoComplete="off"
            placeholder="company name...."
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className=" items-start "
        >
          <label
            className="  text-sm font-montserrat  font-medium capitalize"
            htmlFor="choose"
            aria-required
          >
            choose A License Type
          </label>
          <select
            id="small"
            className=" mt-1 mb-4 shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:shadow-xs-light "
            required
          >
            <option selected> License Type</option>
            <option value="US">Window</option>
            <option value="CA">Adobe</option>
            <option value="FR">Antivirus</option>
            <option value="DE">Microsoft Office License</option>
          </select>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className="flex items-center mb-4"
        >
          <input
            id="terms"
            type="checkbox"
            value=""
            className="w-4 cursor-pointer h-4 border border-gray-300 rounded-sm bg-gray-50   dark:bg-gray-700 dark:border-gray-600  dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
          <label
            for="terms"
            aria-required
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
          </label>
        </div>
        <div data-aos="fade-up" data-aos-duration="600">
          <label
            for="message"
            className="block  font-montserrat mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none mb-4"
            placeholder="Tell us about your license, questions, or how we can help..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="font-montserrat w-full active:scale-95 transition ease-in-out text-white bg-blue-800 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center  capitalize"
        >
          {loading ? "submiting...." : "send message"}
        </button>
      </form>
    </section>
  );
};
