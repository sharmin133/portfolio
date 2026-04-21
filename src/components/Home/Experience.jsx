import React from "react";
import { motion } from "framer-motion";

const ExperienceCard = ({
  role,
  company,
  location,
  duration,
  type,
  responsibilities,
  techStack,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl p-6 md:p-8
      bg-[#120020]/40 backdrop-blur-md
      border border-purple-400/10 hover:border-purple-400/30
      transition duration-300 shadow"
    >
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">

        {/* Left */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-white">
            {role}
          </h3>

          <p className="text-gray-400">{company}</p>

          <p className="text-gray-400 text-sm mt-1">
            {location}
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col items-start md:items-end gap-1">

          <span className="px-3 py-1 text-xs rounded-full
          bg-purple-900/30 border border-purple-500/30 text-purple-300">
            {type}
          </span>

          <span className="text-sm text-gray-300 font-medium">
            {duration}
          </span>

        </div>

      </div>

      {/* Divider */}
      <div className="h-[1px] my-6 bg-purple-500/30"></div>

      {/* Responsibilities */}
      <h4 className="text-lg text-purple-400 font-semibold mb-3">
        Key Responsibilities
      </h4>

      <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
        {responsibilities.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {/* Tech Stack */}
      <h4 className="text-lg text-purple-400 font-semibold mt-6 mb-3">
        Tech Stack
      </h4>

      <div className="flex flex-wrap gap-3">
        {techStack.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 text-sm bg-purple-900/30 border border-purple-500/20 rounded-lg"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const experienceData = [
    {
      role: "Frontend Developer",
      company: "Zettabyte Technology Inc.",
      location: "Dhaka, Bangladesh",
      duration: "September 2025 – Present",
      type: "Onsite",
      responsibilities: [
  "Developed modern and user-friendly interfaces using React and Next.js",
  "Improved application performance and user experience",
  "Integrated REST APIs and collaborated with backend teams",
  "Ensured cross-browser compatibility across different devices and platforms",
],
      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "PostgreSQL",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-16 text-gray-200">
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-purple-400 text-center mb-10">
          Experience
        </h2>

        {/* Cards */}
        <div className="grid gap-8">
          {experienceData.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;