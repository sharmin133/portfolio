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
    <nav className="w-full fixed top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className='flex items-center justify-center'>
            <img className='w-16 h-16 ' src="/src/assets/picture/logo1.jpg" alt="" />
            <div className="text-2xl font-bold text-blue-800">SHARMIN</div>
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
    className="cursor-pointer text-gray-700 hover:text-blue-700 hover:underline transition flex items-center gap-1"
  >
    {link.icon}
    <span>{link.name}</span>
  </ScrollLink>
))}
         
         <a
  href="https://drive.google.com/uc?export=download&id=16-GjlxrxPsluismSQnd86x-THeLbu2ri"
  download
  className="ml-4 px-4 py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition"
>
  Resume
</a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <FaTimes className="text-2xl text-blue-800" />
            ) : (
              <FaBars className="text-2xl text-blue-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-3">
         {scrollLinks.map((link) => (
  <ScrollLink
    key={link.to}
    to={link.to}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    onClick={() => setOpen(false)}
    className="block text-gray-700 hover:text-blue-700 hover:underline transition flex items-center gap-1"
  >
    {link.icon}
    <span>{link.name}</span>
  </ScrollLink>
))}
          
         <a
  href="https://drive.google.com/uc?export=download&id=16-GjlxrxPsluismSQnd86x-THeLbu2ri"
  download
  onClick={() => setOpen(false)}
  className="block px-4 py-2 text-white bg-blue-700 rounded-md text-center hover:bg-blue-800 transition"
>
  Resume
</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

