import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaHome,
  FaUser,
  FaGraduationCap,
  FaTools,
  FaEnvelope,
  FaFolderOpen,
} from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollLinks = [
    {
      name: "Home",
      to: "about",
      icon: <FaHome className="text-[#7FB3D5]" />,
    },
   
    {
      name: "Skills",
      to: "skills",
      icon: <FaTools className="text-[#7FB3D5]" />,
    },
    {
      name: "Education",
      to: "education",
      icon: <FaGraduationCap className="text-[#7FB3D5]" />,
    },
    {
      name: "Projects",
      to: "projects",
      icon: <FaFolderOpen className="text-[#7FB3D5]" />,
    },
    {
      name: "Contact",
      to: "contact",
      icon: <FaEnvelope className="text-[#7FB3D5]" />,
    },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50
      border-b border-[#1E3A5F]
      bg-[linear-gradient(90deg,#142A43_0%,#000000_100%)]
      shadow-[0_0_25px_rgba(20,42,67,0.45)]"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide text-[#D6E6F2]">
          SHARMIN
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {scrollLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              spy
              smooth
              offset={-70}
               activeClass="text-white"
              duration={500}
              className="cursor-pointer
              text-[#B8D4E3]
              hover:text-white
              transition duration-300
              flex items-center gap-2"
            >
              {link.icon}
              <span>{link.name}</span>
            </ScrollLink>
          ))}

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1Vio-m41_ca454U5Vjz4nRpBNqAqMGM-H/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-5 py-2 rounded-xl font-semibold
            text-[#EAF4FF]
            border border-[#2D5B8F]
            bg-[#18344F]
            hover:bg-[#21496F]
            transition duration-300
            shadow-[0_0_15px_rgba(20,42,67,0.5)]"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <FaTimes className="text-[#D6E6F2] text-2xl" />
            ) : (
              <FaBars className="text-[#D6E6F2] text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="md:hidden px-4 pt-2 pb-4 space-y-4
          border-t border-[#1E3A5F]
          bg-[linear-gradient(180deg,#142A43_0%,#000000_100%)]
          shadow-[0_0_20px_rgba(20,42,67,0.5)]"
        >
          {scrollLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              spy
              smooth
              offset={-70}
              duration={500}
              activeClass="text-white"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3
              text-[#B8D4E3]
              hover:text-white
              transition duration-300"
            >
              {link.icon}
              <span>{link.name}</span>
            </ScrollLink>
          ))}

          {/* Mobile Resume Button */}
          <a
            href="https://drive.google.com/..."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 text-center rounded-xl font-semibold
            text-[#EAF4FF]
            border border-[#2D5B8F]
            bg-[#18344F]
            hover:bg-[#21496F]
            transition duration-300"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;