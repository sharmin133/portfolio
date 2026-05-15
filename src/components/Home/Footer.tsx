import React from "react";

import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="max-w-6xl mx-auto px-6 py-8
      border-t border-[#35597C]/25"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-5">

        {/* Left */}
        <p
          className="text-base md:text-lg
          text-[#BFD3E3]
          text-center md:text-left
          playfair"
        >
          Copyright © 2026 — All rights reserved by{" "}
          <span className="text-[#8FC4EA] font-semibold">
            Sharmin
          </span>
        </p>

        {/* Right (Social Icons) */}
        <div className="flex gap-4">

          {/* Linkedin */}
          <a
            href="https://www.linkedin.com/in/mst-sharmin-akter3740/"
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 flex items-center justify-center
            rounded-full
            bg-[rgba(20,42,67,0.4)]
            border border-[#4C7399]/35
            text-[#8FC4EA]
            hover:scale-110
            hover:border-[#7FB3D5]/60
            hover:bg-[rgba(20,42,67,0.6)]
            transition duration-300"
          >
            <FaLinkedinIn size={18} />
          </a>

          {/* Github */}
          <a
            href="https://github.com/sharmin133"
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 flex items-center justify-center
            rounded-full
            bg-[rgba(20,42,67,0.4)]
            border border-[#4C7399]/35
            text-[#D6E6F2]
            hover:scale-110
            hover:border-[#7FB3D5]/60
            hover:bg-[rgba(20,42,67,0.6)]
            transition duration-300"
          >
            <FaGithub size={18} />
          </a>

   

          {/* Whatsapp */}
          <a
            href="https://wa.me/881732341938"
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 flex items-center justify-center
            rounded-full
            bg-[rgba(20,42,67,0.4)]
            border border-[#4C7399]/35
            text-[#8FC4EA]
            hover:scale-110
            hover:border-[#7FB3D5]/60
            hover:bg-[rgba(20,42,67,0.6)]
            transition duration-300"
          >
            <FaWhatsapp size={18} />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;