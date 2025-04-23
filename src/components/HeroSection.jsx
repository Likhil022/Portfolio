import React from "react";
import "./herostyle.css";
const HeroSection = () => {
  return (
    <>
      <section className="relative h-screen bg-[radial-gradient(circle_at_top,_#1a1a2e,_#0f0f1e)]">
        <div className="left">
          <div className="flex flex-col gap-3 justify-center items-left h-screen w-[50%]">
            <p className="text-4xl font-semibold text-white">Hello, I'm</p>
            <h3 className="text-5xl font-semibold text-white">Likhil Kosuru</h3>
            <p className="text-2xl">Full Stack Developer</p>
            <p>
              Designing and developing responsive, interactive web experiences
              <br />
              with React and modern technologies.
            </p>
            <div class="status">
              <span class="green-dot"></span> Open to Freelance
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
