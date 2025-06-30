import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "React", level: 90 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Daisy UI", level: 85 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 90 },
      { name: "REST APIs", level: 95 },
      { name: "Authentication", level: 90 },
      { name: "JWT", level: 85 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "Firebase", level: 80 },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "Vercel", level: 80 },
      { name: "Render", level: 85 },
    ],
  },
];

const SkillBar = ({ level }) => (
  <div className="w-full bg-gray-200 rounded-full h-3">
    <div
      className="bg-indigo-600 h-3 rounded-full transition-all duration-1000"
      style={{ width: `${level}%` }}
    />
  </div>
);

const SkillCard = ({ category, skills, index }) => (
  <motion.div
    className="bg-white shadow-md rounded-lg p-6 flex-1 min-w-[280px]"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
  >
    <h3 className="text-xl font-semibold text-indigo-700 mb-6">{category}</h3>
    <div className="space-y-5">
      {skills.map(({ name, level }) => (
        <div key={name}>
          <div className="flex justify-between mb-1 text-gray-800 font-medium">
            <span>{name}</span>
            <span>{level}%</span>
          </div>
          <SkillBar level={level} />
        </div>
      ))}
    </div>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <motion.section
      id="skills"
      className="max-w-7xl mx-auto p-6 md:p-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-3 text-center">
        My Skills
      </h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "6rem" }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="h-1 bg-indigo-600 mx-auto mb-8 rounded-full"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map(({ category, skills }, index) => (
          <SkillCard
            key={category}
            category={category}
            skills={skills}
            index={index}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsSection;

