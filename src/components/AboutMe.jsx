import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-14">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left Side - Heading */}
        <div className="text-left">
          <h2 className="text-3xl font-bold text-blue-500 mt-14">About Me</h2>
        </div>

        {/* Right Side - Content */}
        <div className="md:col-span-2 text-white text-lg leading-relaxed opacity-80 text-justify scale-90">
          <p>
            I'm a dedicated{" "}
            <span className="underline-hover">Full Stack Developer</span>{" "}
            skilled in both{" "}
            <span className="underline-hover">Java Full Stack</span> and{" "}
            <span className="underline-hover">MERN Stack</span> technologies. I
            love building end-to-end web applications that are scalable,
            performant, and user-friendly.
          </p>
          <p className="mt-4">
            On the backend, I work with{" "}
            <span className="underline-hover text-justify">Java,</span>{" "}
            <span className="underline-hover text-justify">Spring Boot,</span>{" "}
            <span className="underline-hover text-justify">Hibernate</span>{" "}
            <span className="underline-hover text-justify">and MySQL</span> to
            design robust <span className="underline-hover">RESTful APIs</span>.
            For modern JavaScript development, I build APIs using{" "}
            <span className="underline-hover">Node.js and Express</span> with{" "}
            <span className="underline-hover">MongoDB</span> for database
            management.
          </p>
          <p className="mt-4">
            On the frontend, I specialize in{" "}
            <span className="underline-hover">React.js</span> along with{" "}
            <span className="underline-hover">Tailwind CSS</span> to create
            responsive and interactive user interfaces.
          </p>
          <p className="mt-4">
            My dual expertise allows me to choose the right stack based on
            project requirements, ensuring flexibility and efficiency in
            development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
