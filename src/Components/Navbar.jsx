import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ImgLogo from "../Images/Img_navbar.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    "INICIO",
    "OFERTAS",
    "TOP",
    "FALDAS",
    "VESTIDOS LARGOS",
    "VESTIDOS CORTOS",
    "VESTIDOS NENAS",
    "NOVIAS",
    "QUINCE AÑOS",
    "XXL",
    "TOP FALDA",
    "REMATE DE ROPA", 
    "NOVEDADES",
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const formatLink = (item) =>
    item === "INICIO"
      ? "/"
      : `/${encodeURIComponent(item.toLowerCase().replace(/\s+/g, "-").replace("_", "-"))}`;
  
  const handleItemClick = (item, e) => {
    if (item === "REMATE DE ROPA") {
      e.preventDefault();
      setIsSubMenuOpen(!isSubMenuOpen);
    } else {
      setIsOpen(false);
      setIsSubMenuOpen(false);
    }
  };

  return (
    <nav className="bg-rosa-pastel shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center h-16">
          {/* Botón para menú móvil */}
          <div className="absolute inset-y-0 left-0 flex items-center xl:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Abrir menú principal</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
          <div className="flex-1 flex items-center justify-center sm:justify-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src={ImgLogo}
                  alt="Logo de Muñequita"
                  className="h-20 -mt-2"
                />
              </Link>
            </div>

            {/* Menú de escritorio */}
            <div className="hidden xl:block xl:ml-5">
              <div className="flex space-x-2 justify-center">
                {menuItems.map((item, idx) => {
                  const link = formatLink(item);
                  const isActive =
                    item !== "REMATE DE ROPA" &&
                    location.pathname === link;

                  return (
                    <div key={idx} className="relative">
                      <Link
                        to={item === "REMATE DE ROPA" ? "#" : link}
                        onClick={(e) => handleItemClick(item, e)}
                        className={`px-2 py-1 rounded-md text-xs md:text-sm font-medium transform transition-transform duration-200 ease-in-out hover:scale-105 whitespace-nowrap ${
                          isActive
                            ? "bg-pink-400 text-white"
                            : "text-white hover:text-pink-700"
                        }`}
                      >
                        {item}
                      </Link>

                      {item === "REMATE DE ROPA" && isSubMenuOpen && (
                        <div className="absolute top-full left-0 bg-rosa-pastel shadow-md rounded-md mt-1 w-48 z-10">
                          <div className="h-1 rounded-2xl"></div>
                          <div className="border-t border-pink-400 mx-1 my-1"></div>
                          <Link
                            to="/oferta-ropa-circular"
                            className={`block px-4 py-2 text-sm ${
                              location.pathname === "/oferta-ropa-circular"
                                ? "bg-pink-400 text-white"
                                : "text-white hover:text-pink-700"
                            }`}
                            onClick={() => setIsSubMenuOpen(false)}
                          >
                            CIRCULAR
                          </Link>
                          <Link
                            to="/oferta-ropa-nueva"
                            className={`block px-4 py-2 text-sm ${
                              location.pathname === "/oferta-ropa-nueva"
                                ? "bg-pink-400 text-white"
                                : "text-white hover:text-pink-700"
                            }`}
                            onClick={() => setIsSubMenuOpen(false)}
                          >
                            NUEVA
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } xl:hidden transition-all duration-300 ease-in-out`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item, idx) => {
            const link = formatLink(item);
            const isActive =
              item !== "REMATE DE ROPA" && location.pathname === link;

            return (
              <div key={idx} className="relative">
                <Link
                  to={item === "REMATE DE ROPA" ? "#" : link}
                  onClick={(e) => handleItemClick(item, e)}
                  className={`block px-2 py-1 rounded-md text-xs md:text-sm font-medium transform transition-transform duration-200 ease-in-out hover:scale-105 ${
                    isActive
                      ? "bg-pink-400 text-white"
                      : "text-white hover:text-pink-700"
                  }`}
                >
                  {item}
                </Link>

                {item === "REMATE DE ROPA" && isSubMenuOpen && (
                  <div className="absolute top-full left-0 bg-rosa-pastel shadow-md rounded-md mt-1 w-full z-10">
                    <div className="border-t border-pink-400 mx-1 my-1"></div>
                    <Link
                      to="/oferta-ropa-circular"
                      className={`block px-4 py-2 text-sm ${
                        location.pathname === "/oferta-ropa-circular"
                          ? "bg-pink-400 text-white"
                          : "text-white hover:text-pink-700"
                      }`}
                      onClick={() => {
                        setIsSubMenuOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      CIRCULAR
                    </Link>
                    <Link
                      to="/oferta-ropa-nueva"
                      className={`block px-4 py-2 text-sm ${
                        location.pathname === "/oferta-ropa-nueva"
                          ? "bg-pink-400 text-white"
                          : "text-white hover:text-pink-700"
                      }`}
                      onClick={() => {
                        setIsSubMenuOpen(false);
                        setIsOpen(false);
                      }}
                    >
                      NUEVA
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
