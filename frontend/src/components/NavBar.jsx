import { useState } from "react";
import { FiSearch, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import Logo from "../images/Logo.png"; // Update the path to your logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="bg-[#FCFAF4] shadow-md py-8 px-6 md:px-12 font-instrument">
      <div className="container mx-auto flex items-center justify-between relative">
        
        {/* Left Navigation (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-8 text-gray-800 font-semibold text-xl">
          <a href="#" className="hover:text-[#157EE1]">Shop</a>
          <a href="#" className="hover:text-[#157EE1]">About</a>
          <a href="#" className="hover:text-[#157EE1]">Products</a>
        </div>

        {/* Logo - Always Centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src={Logo} alt="Chef Delights Logo" className="h-16" />
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Expanding Search - Expands to the Left */}
          <div className="relative flex items-center">
            {showSearch && (
              <input
                type="text"
                placeholder="Search..."
                className="absolute right-8 w-48 md:w-60 bg-white shadow-md rounded-full p-2 text-sm border border-gray-300 transition-all duration-300"
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

      {/* Mobile Menu - Centered & Styled */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center py-6 space-y-4 bg-[#FCFAF4] border-t border-gray-300">
          <a href="#" className="text-lg font-semibold hover:text-[#157EE1]" onClick={() => setIsOpen(false)}>Shop</a>
          <a href="#" className="text-lg font-semibold hover:text-[#157EE1]" onClick={() => setIsOpen(false)}>About</a>
          <a href="#" className="text-lg font-semibold hover:text-[#157EE1]" onClick={() => setIsOpen(false)}>Products</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
