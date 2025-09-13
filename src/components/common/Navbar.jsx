import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLinks } from "../../data/NavLinks";

const Navbar = () => {
  const [current, setCurrent] = useState("Home");

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0f0f0f]/70 via-[#1a1a1a]/50 to-[#0f0f0f]/70 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent drop-shadow-md">
          Trippies
        </div>

        {/* Links */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          {NavLinks.map((link) => (
             <li key={`${link.id}`} className={`${current === link.name ? 'text-yellow-400' : 'text-white'}`}>
              <Link to={`${link.link}`} onClick={() => setCurrent(link.name)}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
