import React, { useState } from 'react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0e4b5b] text-white px-6 flex justify-between items-center z-50">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-28" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 font-semibold">
        <li><a href="#" className="hover:text-gray-300">Home</a></li>
        <li><a href="#Categories" className="hover:text-gray-300">Categories</a></li>
        <li><a href="#about" className="hover:text-gray-300">About</a></li>
        <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
      </ul>

      {/* Desktop Log in */}
      <div className="hidden md:block">
          <ul className="hidden md:flex gap-6 font-semibold">
        <li><a href="#contact" className="hover:text-gray-300">My Account</a></li>
        </ul>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(true)} className="text-white text-2xl">
          <span className="material-icons">menu</span>
        </button>
      </div>

      {/* Off-Canvas Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0e4b5b]  text-white z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="text-white text-2xl">
            <span className="material-icons">close</span>
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col items-start px-6 space-y-4 font-semibold">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#Categories" className="hover:text-gray-300">Categories</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
          <a href="#contact" className="hover:text-gray-300">My Account</a>
        </div>
      </div>
    </nav>
  );
}
