import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-6 py-16 text-[#D6E6F2]"
    >
      {/* Main Card */}
      <div>
        {/* Quote = Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#4980aa] leading-relaxed text-center mb-10 playfair">
          Let's connect and build something amazing together. I'm always excited
          to explore new ideas and opportunities.
        </h2>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-5">
          {/* Email */}
          <a
            href="mailto:your@email.com"
            className="flex items-center gap-3 px-8 py-4 rounded-2xl
            bg-[rgba(20,42,67,0.55)]
            border border-[#2D5B8F]/50
            hover:border-[#7FB3D5]
            hover:bg-[rgba(20,42,67,0.8)]
            shadow-[0_4px_24px_rgba(0,0,0,0.3)]
            transition duration-300 group"
          >
            <MdEmail
              size={22}
              className="text-[#7FB3D5] group-hover:text-[#D6E6F2] transition duration-300"
            />
            <span className="font-bold text-xl text-[#B8D4E3] group-hover:text-[#D6E6F2] playfair transition duration-300">
              Email Me
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/8801732341938"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-2xl
            bg-[rgba(20,42,67,0.55)]
            border border-[#2D5B8F]/50
            hover:border-[#7FB3D5]
            hover:bg-[rgba(20,42,67,0.8)]
            shadow-[0_4px_24px_rgba(0,0,0,0.3)]
            transition duration-300 group"
          >
            <FaWhatsapp
              size={22}
              className="text-[#7FB3D5] group-hover:text-[#D6E6F2] transition duration-300"
            />
            <span className="font-bold text-xl text-[#B8D4E3] group-hover:text-[#D6E6F2] playfair transition duration-300">
              DM Me
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
