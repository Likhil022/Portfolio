/* eslint-disable no-undef */
import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "MERN Stack",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Redux" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "JWT" },
    ],
  },
  {
    title: "Java Full Stack",
    skills: [
      { name: "React.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "Hibernate" },
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "JWT" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "AWS" },
      { name: "Apache Kafka" },
      { name: "RabbitMQ" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Linux" },
      { name: "Postman" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 pl-14 pr-12 w-full text-gray-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[150px_1fr] gap-40 items-start">
        {/* Left column - Skills tag */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-left flex items-start justify-start"
        >
          <h2 className="text-3xl font-bold text-blue-500 rotate-0 mt-10 md:rotate-0">
            Skills
          </h2>
        </motion.div>

        {/* Right column - Skills content */}
        <div className="grid grid-rows-[1fr_1fr] gap-6">
          {/* Top row: MERN & Java side by side */}
          <div className="grid grid-cols-2 gap-6">
            {/* MERN Stack */}
            <div className="bg-blue-900/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-300">
                {skillCategories[0].title}
              </h3>
              <div className="grid grid-cols-2 gap-2 pl-1.5">
                {skillCategories[0].skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    viewport={{ once: true }}
                    className="text-sm text-gray-200 hover:text-white transition-colors"
                  >
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Java Full Stack */}
            <div className="bg-red-900/30 rounded-xl p-4">
              <h3 className="text-lg font-semibold mb-3 text-red-300">
                {skillCategories[1].title}
              </h3>
              <div className="grid grid-cols-2 gap-2 pl-1.5">
                {skillCategories[1].skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    viewport={{ once: true }}
                    className="text-sm text-gray-200 hover:text-white transition-colors"
                  >
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row: DevOps & Tools full width */}
          <div className="bg-green-900/30 rounded-xl p-6 h-fit">
            <h3 className="text-lg font-semibold mb-3 text-green-300">
              {skillCategories[2].title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 pl-1.5">
              {skillCategories[2].skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  viewport={{ once: true }}
                  className="text-sm text-gray-200 hover:text-white transition-colors"
                >
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
