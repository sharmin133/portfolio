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
    <section className="max-w-6xl mx-auto px-6 py-16 text-gray-200">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-purple-400 text-center mb-10">
        Publications
      </h2>

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
            bg-[#120020]/40 backdrop-blur-md
            border border-purple-400/10 hover:border-purple-400/30
            transition duration-300 shadow"
          >
            {/* Title */}
            <h3 className="text-lg md:text-xl font-semibold text-purple-300">
              {pub.title}
            </h3>

            {/* Meta */}
            <div className="flex items-center gap-3 mt-3 text-sm text-gray-400">
              <span className="px-3 py-1 rounded-full text-xs
              bg-purple-900/30 border border-purple-500/20 text-purple-300">
                {pub.publisher}
              </span>
              <span>{pub.date}</span>
            </div>

            {/* Link */}
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-cyan-400 hover:underline"
            >
              Read Paper <BsBoxArrowUpRight size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Publications;