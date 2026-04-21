import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-gray-200">

      {/* Main Card */}
      <div>

        {/* Quote = Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-purple-400 leading-relaxed text-center mb-6">
          Let’s connect and build something amazing together. I’m always excited to explore new ideas and opportunities.
        </h2>

       
        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">

          {/* Email */}
          <a
            href="mailto:your@email.com"
            className="flex items-center gap-2 px-5 py-2 rounded-xl
            bg-purple-900/30 border border-purple-500/30
            hover:bg-purple-800/40 transition"
          >
            <MdEmail size={18} className="text-purple-300" />
            <span className="text-sm text-white">Email Me</span>
          </a>

          {/* Messenger */}
          <a
            href="https://m.me/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-xl
            bg-purple-900/30 border border-purple-500/30
            hover:bg-purple-800/40 transition"
          >
            <FaFacebookMessenger size={18} className="text-purple-300" />
            <span className="text-sm text-white">SMS me</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/8801732341938"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-xl
            bg-purple-900/30 border border-purple-500/30
            hover:bg-purple-800/40 transition"
          >
            <FaWhatsapp size={18} className="text-purple-300" />
            <span className="text-sm text-white">DM Me</span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;