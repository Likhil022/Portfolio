import HeroSection from "./components/HeroSection";
import { useEffect } from "react";

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
      <div
        id="cursor-glow"
        className="pointer-events-none fixed w-12 h-12 rounded-full bg-[#0870b8]
                   shadow-[0_0_645px_rgba(8,112,184,1)] opacity-100 transition-all
                   duration-75 blur-3xl z-50"
      ></div>
      <div className="px-36">
        <HeroSection />
      </div>
    </>
  );
}

export default App;
