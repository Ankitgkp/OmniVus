import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-700">
          Omni<span className="text-black">Vus.</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
          <a href="#" className="text-blue-600">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Pages</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </nav>

        {/* Icons + Button */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:block bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
            Free Consulting →
          </button>

          {/* Hamburger (mobile) */}
          <button className="md:hidden text-2xl">&#9776;</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
