import { useEffect, useRef, useState } from "react";
import "./App.css";
import {
  ContactUs,
  Hero,
  HowItWorks,
  TestiMonials,
  WhyChooseUs,
} from "./components";
import Aos from "aos";
import "aos/dist/aos.css";
import { ChatWidget } from "./components/ChatWidget";
import chatbot from "../src/assets/svgs/chatbot.png";

function App() {
  const [DarkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [openbot, setopenbot] = useState(false);

  useEffect(() => {
    DarkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
    localStorage.setItem("darkMode", DarkMode);
  }, [DarkMode]);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const contactRef = useRef(null);
  const handleScroll = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div
        className="z-10 bg-white min-h-screen dark:bg-gradient-to-b from-[#141b22] via-[#133457] to-[#0e151d] dark:text-white
"
      >
        <Hero
          handleScroll={handleScroll}
          DarkMode={DarkMode}
          setDarkMode={setDarkMode}
        />
        <HowItWorks DarkMode={DarkMode} setDarkMode={setDarkMode} />
        <WhyChooseUs DarkMode={DarkMode} setDarkMode={setDarkMode} />
        <TestiMonials />
        <div ref={contactRef}>
          <ContactUs />
        </div>
      </div>

      <button
        onClick={() => setopenbot(!openbot)}
        className="fixed right-12 max-[415px]:right-0  bottom-4 max-[415px]:bottom-12 "
      >
        <img
          src={chatbot}
          alt="chatbot"
          className="max-w-20 max-[425px]:max-w-14  hover:scale-110 active:scale-100 transition-all duration-300"
        />
      </button>
      {openbot && <ChatWidget />}
    </>
  );
}

export default App;
