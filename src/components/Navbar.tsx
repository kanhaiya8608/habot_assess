import { useState } from "react";
import { IoIosArrowDown, IoIosMenu, IoIosClose } from "react-icons/io";
import img1 from '../assets/logo.png';

const Navbar = ({ className = "" }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Navigation options with sub-options and icons
  const navOptions = [
    { id: 1, text: "Find Suppliers", icon: null },
    {
      id: 2,
      text: "Find Service Tags",
      icon: <IoIosArrowDown />,
      subOptions: [
        { id: 21, text: "Option 1" },
        { id: 22, text: "Option 2" },
    
      ],
    },
  ];

  return (
    <div className="bg-white  shadow-[0px_9px_26px_rgba(115,_115,_115,_0.1)] sticky top-0 z-50">
    <header
      className={`md:max-w-7xl md:mx-auto  flex flex-row items-center justify-between  py-4 px-5 box-border  text-base-3 text-dimgray font-poppins ${className}`}
    >
      <img
        className="h-10 w-36 object-cover cursor-pointer"
        loading="lazy"
        alt="Logo"
        src={img1}
      />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-row items-center justify-end gap-8">
        {navOptions.map((option) => (
          <div key={option.id} className="relative">
            {option.subOptions ? (
              <div
                className="relative flex items-center gap-1 cursor-pointer"
                onClick={toggleDropdown}
              >
                <a className="text-inherit cursor-pointer">{option.text}</a>
                {option.icon}
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-md flex flex-col items-start">
                    {option.subOptions.map((subOption) => (
                      <a
                        key={subOption.id}
                        className="px-4 py-2 w-full text-left hover:bg-gray-100 cursor-pointer"
                      >
                        {subOption.text}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a className="text-inherit cursor-pointer">{option.text}</a>
            )}
          </div>
        ))}
        <button className="px-4 py-2 bg-transparent border text-emerald-500 hover:text-white border-emerald-500 rounded hover:bg-emerald-700 hover:border-white text-center cursor-pointer">
          <span className="text-darkgreen font-bold hover:text-white">
            Login / Sign Up
          </span>
        </button>
      </nav>

      {/* Mobile Menu Toggler */}
      <button
        className="md:hidden flex items-center justify-center w-10 h-10 cursor-pointer"
        onClick={toggleMenu}
      >
        {menuOpen ? <IoIosClose className="h-6 w-6" /> : <IoIosMenu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center p-4 md:hidden transition-opacity duration-700 ease-in-out">
          {navOptions.map((option) => (
            <div key={option.id} className="relative w-full text-center py-2">
              {option.subOptions ? (
                <>
                  <button
                    className="flex items-center justify-center w-full cursor-pointer"
                    onClick={toggleDropdown}
                  >
                    <span className="text-inherit cursor-pointer">{option.text}</span>
                    {option.icon}
                  </button>
                  {dropdownOpen && (
                    <div className="w-full bg-white md:shadow-md flex flex-col justify-center mt-2 z-10">
                      {option.subOptions.map((subOption) => (
                        <a
                          key={subOption.id}
                          className="px-4 py-2 w-full text-center hover:bg-gray-100 cursor-pointer"
                        >
                          {subOption.text}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a className="text-inherit py-2 w-full text-center cursor-pointer">
                  {option.text}
                </a>
              )}
            </div>
          ))}
          {/* Login / Sign Up Button */}
          <div className="peer w-full text-center mt-2">
            <button className="peer px-4 py-2 bg-transparent border text-emerald-500 hover:text-white border-emerald-500 rounded hover:bg-emerald-700 hover:border-white w-full text-center cursor-pointer">
              <span className="font-bold">Login / Sign Up</span>
            </button>
          </div>
        </nav>
      )}
    </header>
    </div>
  );
};

export default Navbar;
