import React from "react";
import { motion } from "framer-motion";
import { BsBoxArrowUpRight } from "react-icons/bs";

const publications = [
  {
    title:
      "Evaluating the Performance of Machine Learning Models in Handwritten Signature Verification",
    date: "2025",
    publisher: "IEEE",
    link: "https://ieeexplore.ieee.org/document/10673648",
  },
  {
    title:
      "Evaluating Machine Learning Methods for Bangla Text Emotion Analysis",
    date: "2025",
    publisher: "IEEE",
    link: "https://ieeexplore.ieee.org/document/10673544",
  },
  {
    title:
      "Predicting Credit Card Approvals with Machine Learning and Deep Learning Techniques",
    date: "2025",
    publisher: "IEEE",
    link: "https://ieeexplore.ieee.org/document/11013451",
  },
];

const Publications = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-[#D6E6F2] bg-transparent">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl text-[#D6E6F2] text-center mb-4 tracking-wide elsie">
        Publications
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
      <div className="space-y-6">
        {publications.map((pub, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl p-6 md:p-8
            bg-[rgba(11,22,36,0.6)] backdrop-blur-sm
            border border-[#2D5B8F]/20 hover:border-[#2D5B8F]/50
            transition duration-300
            shadow-[0_8px_48px_rgba(0,0,0,0.4)]"
          >
            {/* Title */}
            <h3 className="text-xl md:text-2xl font-semibold text-[#e3ebf0] playfair">
              {pub.title}
            </h3>

            {/* Meta */}
            <div className="flex items-center gap-3 mt-3 text-[#B8D4E3] playfair">
              <span
                className="px-4 py-1 rounded-full text-lg
              bg-[rgba(20,42,67,0.55)]
              border border-[#2D5B8F]/40 text-[#7FB3D5]"
              >
                {pub.publisher}
              </span>
              <span className="text-lg">{pub.date}</span>
            </div>

            {/* Link */}
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4
              text-[#7FB3D5] hover:text-[#D6E6F2]
              transition duration-200 playfair text-lg"
            >
              Read Paper <BsBoxArrowUpRight size={18} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
