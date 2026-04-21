
import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiDaisyui,
  SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiGit, SiVercel,
  SiNextdotjs, SiRedux, SiCanva, SiFramer, SiAxios,
  SiDocker,
  SiNetlify,
  SiPrisma,
  SiPostgresql,
  SiTypescript,
  SiTensorflow,
  SiPytorch
} from "react-icons/si";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaBrain } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdPsychology } from "react-icons/md";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
       { name: "React", icon: <SiReact size={40} />, color: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs size={40} />, color: "#FFFFFF" },
         { name: "JavaScript", icon: <SiJavascript size={40} />, color: "#F7DF1E" },
      { name: "Tailwind", icon: <SiTailwindcss size={40} />, color: "#06B6D4" },
      { name: "CSS3", icon: <SiCss3 size={40} />, color: "#1572B6" },
      { name: "HTML5", icon: <SiHtml5 size={40} />, color: "#E34F26" },
      { name: "Redux", icon: <SiRedux size={40} />, color: "#764ABC" },
      { name: "Shadcn", icon: <BsBoxArrowUpRight size={40} />, color: "#7C3AED" },
    ],
  },
 {
  category: "Backend",
  skills: [
    { name: "Node.js", icon: <SiNodedotjs size={40} />, color: "#339933" },
    { name: "Express", icon: <SiExpress size={40} />, color: "#FFFFFF" },
    { name: "Mongoose", icon: <SiMongodb size={40} />, color: "#47A248" },
    { name: "TypeScript", icon: <SiTypescript size={40} />, color: "#3178C6" },
    { name: "REST API", icon: <SiAxios size={40} />, color: "#5A29E4" },
  ],
},
{
  category: "Database & Tools",
  skills: [
    { name: "MongoDB", icon: <SiMongodb size={40} />, color: "#47A248" },
    { name: "PostgreSQL", icon: <SiPostgresql size={40} />, color: "#336791" },
    { name: "Prisma", icon: <SiPrisma size={40} />, color: "#FFFFFF"},
    { name: "Firebase", icon: <SiFirebase size={40} />, color: "#FFCA28" },
    { name: "Git", icon: <SiGit size={40} />, color: "#F05032" },
    { name: "Vercel", icon: <SiVercel size={40} />, color: "#FFFFFF" },
    { name: "Netlify", icon: <SiNetlify size={40} />, color: "#00C7B7" },
    { name: "Docker", icon: <SiDocker size={40} />, color: "#2496ED" },
  ],
}

];

const SkillCard = ({ category, skills, index }) => (
  <motion.div
    className="rounded-2xl p-6 md:p-8
    bg-[#120020]/40 backdrop-blur-md
    border border-purple-400/10 hover:border-purple-400/30
    transition duration-300 shadow"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
  >
    <h3 className="text-2xl font-semibold text-purple-400 mb-6">
      {category}
    </h3>

    <div className="grid lg:grid-cols-2 grid-cols-3 justify-start gap-6">
      {skills.map(({ name, icon, color }) => (
        <motion.div
          key={name}
          className="w-24 h-24 flex flex-col items-center justify-center
          rounded-xl bg-[#1a0030]
          border border-purple-500/20 hover:border-purple-400
          transition"
          whileHover={{ scale: 1.1 }}
        >
          {/* Icon original color */}
          <div style={{ color }}>{icon}</div>

          {/* Text same color */}
          <span
            className="text-xs mt-2 text-center font-medium"
            style={{ color }}
          >
            {name}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-gray-200">

      <h2 className="text-4xl md:text-5xl font-bold text-purple-400 text-center mb-10">
        My Skills
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skillCategories.map(({ category, skills }, index) => (
          <SkillCard
            key={category}
            category={category}
            skills={skills}
            index={index}
          />
        ))}
      </div>
<div className="mt-16">

  {/* Main Card */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="rounded-2xl p-6 md:p-8
    bg-[#120020]/40 backdrop-blur-md
    border border-purple-400/10 hover:border-purple-400/30
    shadow-xs shadow-purple-500"
  >


    {/* Title (same style as others) */}
    <h2 className="text-2xl font-bold text-purple-400 text-center mb-10">
      Additional Skills
    </h2>

    {/* Inner Cards */}
    <div className="grid md:grid-cols-3 gap-6">

      {/* Languages */}
      <div className="p-4 rounded-xl
      bg-[#120020]/40 backdrop-blur-md
      border border-purple-400/10 hover:border-purple-400/30
      transition duration-300 shadow">
        <h3 className="text-xl text-purple-400 font-semibold mb-3">
          Languages
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
          <li>Bengali — Native</li>
          <li>English — Working Proficiency</li>
          <li>Hindi — Speaking</li>
        </ul>
      </div>

      {/* AI / ML */}
      <div className="p-4 rounded-xl
      bg-[#120020]/40 backdrop-blur-md
      border border-purple-400/10 hover:border-purple-400/30
      transition duration-300 shadow">
        <h3 className="text-xl text-purple-400 font-semibold mb-3">
          AI & Data Skills
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
          <li>Artificial Intelligence</li>
          <li>Machine Learning</li>
          <li>Deep Learning</li>
          <li>Natural Language Processing (NLP)</li>
        </ul>
      </div>

      {/* Soft Skills */}
      <div className="p-4 rounded-xl
      bg-[#120020]/40 backdrop-blur-md
      border border-purple-400/10 hover:border-purple-400/30
      transition duration-300 shadow">
        <h3 className="text-xl text-purple-400 font-semibold mb-3">
          Soft Skills
        </h3>
       <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
          <li>Problem Solving</li>
          <li>Team Collaboration</li>
          <li>Communication</li>
          <li>Time Management</li>
          <li>Adaptability</li>
          <li>Quick Learner</li>
          <li>Critical Thinking</li>
          <li>Project Management</li>
        </ul>
      </div>

    </div>
  </motion.div>
</div>


    </section>
  );
};

export default SkillsSection;