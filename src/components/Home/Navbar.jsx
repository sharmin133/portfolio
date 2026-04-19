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
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-purple-900"
  style={{ background: 'linear-gradient(to right, #0a0010, #1a0030)' }}>
  <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
    <div className='flex items-center gap-3'>
      <img className='w-16 h-16' src="/all image/picture/logo-portfolio.png" alt="Logo" />
      <div className="text-2xl font-bold text-purple-400">SHARMIN</div>
    </div>

    <div className="hidden md:flex space-x-6 items-center">
      {scrollLinks.map((link) => (
        <ScrollLink key={link.to} to={link.to} spy smooth offset={-70} duration={500}
          className="cursor-pointer text-purple-300 hover:text-purple-100 transition flex items-center gap-1">
          {link.icon}
          <span>{link.name}</span>
        </ScrollLink>
      ))}
      <a href="https://drive.google.com/..." target="_blank" rel="noopener noreferrer"
        className="ml-4 px-4 py-2 rounded-lg font-semibold text-white"
        style={{ background: 'linear-gradient(to right, #7c3aed, #a855f7)' }}>
        Resume
      </a>
    </div>

    <div className="md:hidden">
      <button onClick={() => setOpen(!open)}>
        {open ? <FaTimes className="text-purple-400 text-2xl" /> : <FaBars className="text-purple-400 text-2xl" />}
      </button>
    </div>
  </div>

  {open && (
    <div className="md:hidden px-4 pt-2 pb-4 space-y-3 shadow-lg rounded-b-xl border-t border-purple-900"
      style={{ background: '#1a0030' }}>
      {scrollLinks.map((link) => (
        <ScrollLink key={link.to} to={link.to} spy smooth offset={-70} duration={500}
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 text-purple-300 hover:text-purple-100 transition">
          {link.icon}
          <span>{link.name}</span>
        </ScrollLink>
      ))}
      <a href="https://drive.google.com/..." target="_blank" rel="noopener noreferrer"
        onClick={() => setOpen(false)}
        className="block px-4 py-2 text-white rounded-md text-center font-semibold"
        style={{ background: 'linear-gradient(to right, #7c3aed, #a855f7)' }}>
        Resume
      </a>
    </div>
  )}
</nav>
  );
};

export default Navbar;

