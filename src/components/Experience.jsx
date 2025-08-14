// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const experiences = [
  {
    year: "Sep 2023 – Dec 2023",
    role: "Java Full Stack Developer Intern",
    company: "Cognizant",
    details:
      "Full-time role focusing on new features, bug fixes, and performance optimization. Integrated REST APIs, implemented complex UI components, and collaborated with cross-functional teams.",
    color: "blue",
  },
  {
    year: "Dec 2023 – Present",
    role: "Java Full Stack Developer",
    company: "Cognizant",
    details:
      "Worked on Altrista Health's Guiding Care platform. Assisted in frontend development with React, backend APIs in Java Spring Boot, and database handling with MySQL.",
    color: "blue",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 pl-14 pr-12 w-full text-gray-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[150px_1fr] gap-40 items-start">
        {/* Left column - Title */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="text-left flex items-start justify-start"
        >
          <h2 className="text-3xl font-bold text-blue-500 mt-10">Experience</h2>
        </motion.div>

        {/* Right column - Timeline */}
        <div className="relative border-l h-72 border-gray-600 pl-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-10 relative"
            >
              {/* Circle */}
              <motion.span
                initial={{ opacity: 0, y: +100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className={`absolute -left-[2.5rem] w-8 h-8 rounded-full flex items-center justify-center ring-4 ring-gray-900 bg-${exp.color}-500`}
              >
                {index + 1}
              </motion.span>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: +200 }}
                whileInView={{ opacity: 1, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-lg font-semibold text-white">
                  {exp.role} - {exp.company}
                </h3>
                <time className="block mb-2 text-sm text-gray-400">
                  {exp.year}
                </time>
                <p className="text-sm text-gray-300">{exp.details}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
