import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const heroName = document.getElementById("hero-name");
    const onScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      if (!heroName) return;
      const rect = heroName.getBoundingClientRect();
      if (rect.top < 40) {
        setShowNavbar(true);
      }
      if (rect.top > 40) {
        setShowNavbar(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cursor glow effect
  useEffect(() => {
    const cursorGlow = document.getElementById("cursor-glow");
    const move = (e) => {
      const x = e.clientX - cursorGlow.offsetWidth / 2;
      const y = e.clientY - cursorGlow.offsetHeight / 2;
      cursorGlow.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Cursor Glow */}
      {/* <div
        id="cursor-glow"
        className="pointer-events-none fixed w-12 h-12 rounded-full bg-[#43aaf4]
                   shadow-[0_0_645px_rgba(8,112,184,1)] opacity-100 transition-all
                   duration-75 blur-3xl z-50"
      ></div> */}

      {/* Navbar */}
      <Navbar show={showNavbar} />

      {/* Animate entire app */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-white"
      >
        <section className="relative h-full">
          <div className="px-36 flex flex-col justify-center items-center">
            <HeroSection scrollY={scrollY} />
            <AboutMe />
            <Skills />
          </div>
        </section>
      </motion.div>
    </>
  );
}

export default App;
