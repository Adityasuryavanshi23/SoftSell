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

function App() {
  const [DarkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    DarkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
    localStorage.setItem("darkMode", DarkMode);
  }, [DarkMode]);

  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const contactRef = useRef(null);
  const handleScroll = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className=" bg-white min-h-screen dark:bg-gradient-to-b from-[#141b22] via-[#133457] to-[#0e151d] dark:text-white
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
  );
}

export default App;
