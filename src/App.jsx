import HeroSection from "./components/HeroSection";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect } from "react";
import AboutMe from "./components/AboutMe";

function App() {
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
      <div
        id="cursor-glow"
        className="pointer-events-none fixed w-12 h-12 rounded-full bg-[#0870b8]
                   shadow-[0_0_645px_rgba(8,112,184,1)] opacity-100 transition-all
                   duration-75 blur-3xl z-50"
      ></div>

      {/* Animate entire app */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-white"
      >
        {/* Content wrapper */}
        <section className="relative h-screen">
          <div className="px-36 flex flex-col justify-center items-center">
            <HeroSection />
            <AboutMe />
          </div>
        </section>

        {/* Future sections */}
        {/* <About /> */}
        {/* <Projects /> */}
        {/* <Footer /> */}
      </motion.div>
    </>
  );
}

export default App;
