// eslint-disable-next-line no-unused-vars
import React from "react";

function Services() {
  return (
    <div className="py-16">
      <h3 className="text-center text-4xl font-bold mb-16 w-full">
        Our Services
      </h3>
      <div className="flex justify-center gap-36 ">
        <div className=" w-80 h-96 bg-white bg-opacity-25 px-12 py-6 flex flex-col justify-center items-center rounded-xl shadow-3xl gap-6 hover:border-2 border-spacing-10 border-blue-500 hover:scale-105 duration-300 ">
          <h3 className="text-2xl font-bold ">Front End</h3>
          <p className="text-lg ">
            I create visually appealing and responsive web applications using
            HTML, CSS, JavaScript, and React. With a focus on clean code and
            user-friendly design, I ensure that each project is interactive,
            accessible, and optimized across all devices.
          </p>
        </div>
        <div className=" w-80 h-96 bg-white bg-opacity-25 px-12 py-6 flex flex-col justify-center items-center rounded-xl shadow-3xl gap-6 hover:border-2 hover:scale-105 duration-300 border-blue-500">
          <h3 className="text-2xl font-bold ">Java Developer</h3>
          <p className="text-lg ">
            I have a strong command of Java, focusing on problem-solving and
            building efficient algorithms. I&apos;ve successfully solved over 50
            problems on LeetCode, showcasing my ability to tackle complex
            challenges with clean and optimized code.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
