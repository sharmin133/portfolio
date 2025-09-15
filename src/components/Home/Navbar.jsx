import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaHome, FaUser, FaGraduationCap, FaTools, FaEnvelope, FaFolderOpen } from 'react-icons/fa';

const Navbar = () => {
  const [open, setOpen] = useState(false);

 const scrollLinks = [ 
  { name: 'Home', to: 'home', icon: <FaHome className="text-pink-600" /> }, 
  { name: 'About', to: 'about', icon: <FaUser className="text-amber-600" /> }, 
  { name: 'Skills', to: 'skills', icon: <FaTools className="text-cyan-600" /> },
   { name: 'Education', to: 'education', icon: <FaGraduationCap className="text-green-600" /> }, 
   { name: 'Projects', to: 'projects', icon: <FaFolderOpen className="text-blue-600" /> },
    { name: 'Contact', to: 'contact', icon: <FaEnvelope className="text-purple-600" /> },
   ];

 
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-white to-yellow-200 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className='flex items-center gap-3'>
          <img className='w-16 h-16' src="/all image/picture/logo-portfolio.png" alt="Logo" />
          <div className="text-2xl font-bold text-yellow-800">SHARMIN</div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {scrollLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer text-yellow-800 hover:text-yellow-900 transition flex items-center gap-1"
            >
              {link.icon}
              <span>{link.name}</span>
            </ScrollLink>
          ))}

          {/* Gradient Button */}
          <a
            href="https://drive.google.com/file/d/158sTRpyI1fRhGknsIhk3IOJKRo3sTHNp/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-600 to-yellow-500 text-white font-semibold shadow-md hover:from-yellow-700 hover:to-yellow-600 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <FaTimes className="text-yellow-800 text-2xl" />
            ) : (
              <FaBars className="text-yellow-800 text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white/70 backdrop-blur-sm px-4 pt-2 pb-4 space-y-3 shadow-lg rounded-b-xl">
          {scrollLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-yellow-800 hover:text-yellow-900 transition"
            >
              {link.icon}
              <span>{link.name}</span>
            </ScrollLink>
          ))}

          {/* Gradient Button Mobile */}
          <a
            href="https://drive.google.com/file/d/158sTRpyI1fRhGknsIhk3IOJKRo3sTHNp/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 text-white bg-gradient-to-r from-yellow-400 to-yellow-900 rounded-md text-center font-semibold shadow-md hover:from-yellow-800 hover:to-yellow-600 transition"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

