import { ArrowDown } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import "./herostyle.css";
import AMB from "../assets/AMB.jpg";
const HeroSection = () => {
  return (
    <>
      <section className="relative h-screen ">
        <div className="flex basis-full justify-evenly gap-5 pl-10">
          <div className="left w-[70%] z-10 flex flex-col gap-3 justify-center items-left h-screen">
            <p className="text-4xl font-semibold text-white">Hello, I'm</p>
            <motion.h3
              id="hero-name"
              layoutId="site-name"
              style={{
                transition: "font-size 0.3s ease",
              }}
              className="text-5xl font-semibold text-white"
            >
              Likhil Kosuru
            </motion.h3>
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

          <div className="right w-80 my-auto rounded-lg overflow-hidden z-20 mr-20 shadow-[0_0px_645px_rgba(8,_112,_184,_0.5)]">
            <img src={AMB} alt="Hero.jpg" srcset="" className="" />
          </div>
        </div>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white text-sm ">
          <span className="mb-1 pb-1 opacity-70">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown className="opacity-60" />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
