// src/components/Navbar.jsx

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {!isOpen && (
          <div className="text-white text-xl font-bold">MyLogo</div>
        )}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
            <></>
            ) : (
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
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <ul className={`lg:flex lg:flex-row lg:space-x-4 ${isOpen ? 'flex flex-col absolute left-0 w-full bg-blue-600 p-4' : 'hidden'} lg:flex relative lg:top-0 lg:w-auto lg:bg-transparent`}>
          <li className="self-end lg:hidden mb-2">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen && (
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
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              )}
            </button>
          </li>
          <li><a href="/" className="text-white block px-2 py-1">Home</a></li>
          <li><a href="/about" className="text-white block px-2 py-1">About</a></li>
          <li><a href="/services" className="text-white block px-2 py-1">Services</a></li>
          <li><a href="/contact" className="text-white block px-2 py-1">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
