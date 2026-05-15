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
      viewport={{ once: true }}
      className="rounded-2xl p-6 md:p-8
      bg-[rgba(11,22,36,0.6)] backdrop-blur-sm
      border border-[#2D5B8F]/20 hover:border-[#2D5B8F]/50
      transition duration-300
      shadow-[0_8px_48px_rgba(0,0,0,0.4)]"
    >
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">

        {/* Left */}
        <div>
          <h3 className="text-2xl md:text-[32px]
            leading-snug
            font-semibold
            text-[#F2F7FB]
            playfair">
            {role}
          </h3>
          <p className="text-[#D4E3EF] text-xl mt-2 playfair">{company}</p>
          <p className="text-[#9FB8CC] text-lg mt-1 playfair">{location}</p>
        </div>

        {/* Right */}
        <div className="flex flex-col items-start md:items-end gap-1">
          <span className="px-3 py-1 text-base rounded-full
          bg-[rgba(20,42,67,0.55)]
          border border-[#2D5B8F]/40 text-[#7FB3D5] playfair">
            {type}
          </span>
          <span className="text-lg text-[#B8D4E3] font-medium playfair">
            {duration}
          </span>
        </div>

      </div>

      {/* Divider */}
      <div className="h-[1px] my-6 bg-[#2D5B8F]/30"></div>

      {/* Responsibilities */}
      <h4 className="text-xl text-[#7FB3D5] font-semibold mb-3 playfair">
        Key Responsibilities
      </h4>
      <ul className="list-disc list-inside space-y-2 text-[#B8D4E3] text-lg md:text-xl playfair">
        {responsibilities.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {/* Tech Stack */}
      <h4 className="text-xl text-[#7FB3D5] font-semibold mt-6 mb-3 playfair">
        Tech Stack
      </h4>
      <div className="flex flex-wrap gap-3">
        {techStack.map((tech, i) => (
          <span
            key={i}
            className="px-4 py-2 text-lg playfair
            bg-[rgba(20,42,67,0.55)]
            border border-[#2D5B8F]/40
            text-[#B8D4E3] rounded-lg"
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
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-16 text-[#D6E6F2] bg-transparent">
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <h2 className="text-4xl md:text-5xl text-[#D6E6F2] text-center mb-4 tracking-wide elsie">
          Experience
        </h2>

        {/* Underline */}
        <div className="flex justify-center mb-10">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ height: "4px", borderRadius: "9999px" }}
            className="bg-[#2D5B8F] shadow-[0_0_15px_rgba(45,91,143,0.6)]"
          />
        </div>

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