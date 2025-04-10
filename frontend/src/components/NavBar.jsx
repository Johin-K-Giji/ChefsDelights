import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FiSearch, FiShoppingBag, FiMenu, FiX, FiHome } from "react-icons/fi";
import Logo from "../images/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Shop", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
  ];

  const getLinkClass = ({ isActive }) =>
    `hover:text-[#157EE1] transition-all duration-200 ${
      isActive ? "text-[#157EE1]" : "text-gray-800"
    }`;

  return (
    <nav className="bg-[#FCFAF4] shadow-md py-6 px-4 md:px-12 font-instrument">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Navigation (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-8 font-semibold text-xl items-center flex-1">
          {location.pathname !== "/" && (
            <Link to="/" className="text-xl text-gray-800 hover:text-[#157EE1]">
              <FiHome />
            </Link>
          )}
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path} className={getLinkClass}>
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Logo Centered */}
        <div className="mx-auto">
          <img src={Logo} alt="Chef Delights Logo" className="h-14 md:h-16" />
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4 md:space-x-6 flex-1 justify-end">
          {/* Search Bar */}
          <div className="relative flex items-center">
            {showSearch && (
              <input
                type="text"
                placeholder="Search..."
                className="absolute right-8 w-40 md:w-60 bg-white shadow-md rounded-full p-2 text-sm border border-gray-300 transition-all duration-300"
              />
            )}
            <FiSearch
              className="text-gray-800 text-xl cursor-pointer hover:text-[#157EE1]"
              onClick={() => setShowSearch(!showSearch)}
            />
          </div>

          <FiShoppingBag className="text-gray-800 text-xl cursor-pointer hover:text-[#157EE1]" />

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FiX className="text-gray-800 text-2xl" />
            ) : (
              <FiMenu className="text-gray-800 text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center py-6 space-y-4 bg-[#FCFAF4] border-t border-gray-300">
          {location.pathname !== "/" && (
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 text-xl hover:text-[#157EE1]"
            >
              <FiHome />
            </Link>
          )}
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-lg font-semibold hover:text-[#157EE1] ${
                  isActive ? "text-[#157EE1]" : "text-gray-800"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
