import React from "react";
import { FaLinkedinIn, FaGithub, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-6 text-gray-400">

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left */}
        <p className="text-sm text-center md:text-left">
          Copyright © 2026 - All right reserved by Sharmin
        </p>

        {/* Right (Social Icons) */}
        <div className="flex gap-3">

          <a
            href="https://www.linkedin.com/in/mst-sharmin-akter3740/"
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full
            bg-[#0A66C2] text-white hover:scale-110 transition"
          >
            <FaLinkedinIn size={16} />
          </a>

          <a
            href="https://github.com/sharmin133"
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full
            bg-gray-700 text-white hover:scale-110 transition"
          >
            <FaGithub size={16} />
          </a>

          <a
            href="https://facebook.com/your-profile"
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full
            bg-[#1877F2] text-white hover:scale-110 transition"
          >
            <FaFacebookF size={16} />
          </a>

          <a
            href="https://wa.me/881732341938"
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full
            bg-green-500 text-white hover:scale-110 transition"
          >
            <FaWhatsapp size={16} />
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;