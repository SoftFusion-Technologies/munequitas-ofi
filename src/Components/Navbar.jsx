import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImgLogo from '../Images/Img_navbar.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-rosa-pastel shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center h-16">
          {/* Button for mobile menu */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex-1 flex items-center justify-center sm:items-center sm:justify-center">
            <div className="flex-shrink-0">
              <a href="/">
                <img
                  src={ImgLogo}
                  alt="Logo de Muñequita"
                  className="h-20 -mt-2"
                />
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:block sm:ml-5">
              <div className="flex space-x-4 justify-center">
                {[
                  'INICIO',
                  'OFERTAS',
                  'VESTIDOS LARGOS',
                  'VESTIDOS CORTOS',
                  'VESTIDOS NENAS',
                  'NOVIAS',
                  'QUINCE AÑOS',
                  'XXL',
                  'TOP_FALDA'
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    to={
                      item === 'INICIO'
                        ? '/'
                        : `/${item.toLowerCase().replace(' ', '-')}`
                    }
                    className="text-white hover:text-pink-700  px-3 py-2 rounded-md text-sm font-medium transform transition-transform duration-200 ease-in-out hover:scale-110"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } sm:hidden transition-all duration-300 ease-in-out`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {[
            'INICIO',
            'OFERTAS',
            'VESTIDOS LARGOS',
            'VESTIDOS CORTOS',
            'VESTIDOS NENAS',
            'NOVIAS',
            'QUINCE AÑOS',
            'XXL',
            'TOP_FALDA'
          ].map((item, idx) => (
            <Link
              key={idx}
              to={
                item === 'INICIO'
                  ? '/'
                  : `/${item.toLowerCase().replace(' ', '-')}`
              }
              className="text-white hover:text-pink-700  block px-3 py-2 rounded-md text-base font-medium transform transition-transform duration-200 ease-in-out hover:scale-110"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
