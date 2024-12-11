// eslint-disable-next-line no-unused-vars
import React from "react";
import HeroI from "../assets/Hero.jpg";

function Hero() {
  return (
    <div className="flex p-12 items-center h-screen justify-between">
      <div>
        <div className="flex flex-col  gap-1 text-white text-lg sm:text-4xl md:text-5xl lg:text-6xl font-bold ">
          <p>Likhil Kosuru</p>
          <code className="  text-2xl px-1 sm:px-2 py-0.5 sm:py-1 rounded">
            &lt;Frontend Developer/&gt;
          </code>
        </div>
        <div className="text-white text-xl">
          <span className="text-xl ml-2 font-semibold">Tech Stack :</span> HTML,
          CSS, JS, React.js, Redux, Tailwind CSS
        </div>
      </div>
      <div>
        <img className=" rounded-full h-96 p-2 -pl-2" src={HeroI} alt="" />
      </div>
    </div>
  );
}

export default Hero;
