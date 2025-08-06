import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <div className="max-w-4xl mx-auto text-white text-lg leading-relaxed opacity-80">
        <p>
          I'm a dedicated{" "}
          <span className="font-semibold text-blue-400">
            Full Stack Developer
          </span>{" "}
          skilled in both{" "}
          <span className="font-medium text-blue-400">Java Full Stack</span> and{" "}
          <span className="font-medium text-blue-400">MERN Stack</span>{" "}
          technologies. I love building end-to-end web applications that are
          scalable, performant, and user-friendly.
        </p>
        <p className="mt-4">
          On the backend, I work with{" "}
          <span className="font-medium text-blue-400">
            Java, Spring Boot, Hibernate, and MySQL
          </span>{" "}
          to design robust{" "}
          <span className="font-medium text-blue-400">RESTful APIs</span>. For
          modern JavaScript development, I build APIs using{" "}
          <span className="font-medium text-blue-400">Node.js and Express</span>{" "}
          with <span className="font-medium text-blue-400">MongoDB</span> for
          database management.
        </p>
        <p className="mt-4">
          On the frontend, I specialize in{" "}
          <span className="font-medium text-blue-400">React.js</span> along with{" "}
          <span className="font-medium text-blue-400">Tailwind CSS</span> to
          create responsive and interactive <br></br>user interfaces.
        </p>
        <p className="mt-4">
          My dual expertise allows me to choose the right stack based on project
          requirements, ensuring flexibility and efficiency in development.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
