import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-zinc-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Heading */}
        <h1 className="text-white text-2xl font-medium">
          <span className="text-3xl font-semibold">My</span> <span className="text-blue-400">Portfolio</span>
        </h1>

        {/* Hamburger Icon for small screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`md:flex md:space-x-4 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li className="text-white">
            <a 
              href="#about" 
              className="block py-2 md:py-0 transition duration-300 ease-in-out hover:text-blue-400 hover:underline"
            >
              About
            </a>
          </li>
          <li className="text-white">
            <a 
              href="#portfolio" 
              className="block py-2 md:py-0 transition duration-300 ease-in-out hover:text-blue-400 hover:underline"
            >
              Portfolio
            </a>
          </li>
          <li className="text-white">
            <a 
              href="#contact" 
              className="block py-2 md:py-0 transition duration-300 ease-in-out hover:text-blue-400 hover:underline"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
