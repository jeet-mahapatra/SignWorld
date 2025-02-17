import React, { useState } from 'react';
import logo from "../../assets/logo.jpg"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    
    <nav className="bg-white w-full border-b z-50 m-2 p-2 shadow-md">
      <div id='home' className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a onClick={() => scrollToSection('home')} className="cursor-pointer">
              <img
                className="h-12 w-auto"
                src={logo}
                alt="SignWorld Logo"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a
              onClick={() => scrollToSection('home')}
              className="relative group px-2 py-1 cursor-pointer"
            >
              <span className="text-gray-600 hover:text-blue-600 transition duration-300">
                Home
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              onClick={() => scrollToSection('about')}
              className="relative group px-2 py-1 cursor-pointer"
            >
              <span className="text-gray-600 hover:text-blue-600 transition duration-300">
                About Us
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              onClick={() => scrollToSection('work')}
              className="relative group px-2 py-1 cursor-pointer"
            >
              <span className="text-gray-600 hover:text-blue-600 transition duration-300">
                Services
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              onClick={() => scrollToSection('client')}
              className="relative group px-2 py-1 cursor-pointer"
            >
              <span className="text-gray-600 hover:text-blue-600 transition duration-300">
                Clients
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              onClick={() => scrollToSection('contact')}
              className="relative group px-2 py-1 cursor-pointer"
            >
              <span className="text-gray-600 hover:text-blue-600 transition duration-300">
                Contact
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ">
            <button
              onClick={toggleMenu}
              className="text-gray-600  cursor-pointer hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden  cursor-pointer">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition duration-300"
              >
                Home
              </a>
              <a
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition duration-300"
              >
                About Us
              </a>
              <a
                onClick={() => scrollToSection('work')}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition duration-300"
              >
                Services
              </a>
              <a
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;