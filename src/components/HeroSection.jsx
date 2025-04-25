import React from "react";
import "./herostyle.css";
import AMB from "../assets/AMB.jpg";
const HeroSection = () => {
  return (
    <>
      <section className="relative h-screen flex basis-full justify-evenly">
        <div className="left w-[70%] z-10">
          <div className="flex flex-col gap-3 justify-center items-left h-screen">
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
        <div className="right w-80 my-auto rounded-lg overflow-hidden z-20 mr-20 shadow-[0_0px_645px_rgba(8,_112,_184,_0.5)]">
          <img src={AMB} alt="Hero.jpg" srcset="" className="" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
