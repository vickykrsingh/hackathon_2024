import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">Food Donation Platform</div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none"
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
          <a href="/" className="text-white block px-4 py-2 hover:bg-gray-700">
            Home
          </a>
          <a href="/donor" className="text-white block px-4 py-2 hover:bg-gray-700">
            Donors
          </a>
          <a href="/ngo" className="text-white block px-4 py-2 hover:bg-gray-700">
            NGOs
          </a>
          <a href="/about" className="text-white block px-4 py-2 hover:bg-gray-700">
            About
          </a>
          <a href="/contact" className="text-white block px-4 py-2 hover:bg-gray-700">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
