import React, { useState } from "react";
import logo from "../assets/iceon/Logo.svg";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md"; // Import icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    // <div className="">
    <div className="flex justify-between items-center text-base font-bold py-10">
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-24" />

      {/* Menu icon for small devices */}
      <div className="lg:hidden">
        {menuOpen ? (
          <MdClose className="text-3xl" onClick={toggleMenu} /> // X icon when menu is open
        ) : (
          <MdMenu className="text-3xl" onClick={toggleMenu} /> // 3-bar icon when menu is closed
        )}
      </div>

      {/* Navigation menu */}
      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-24 left-4 w-full bg-white lg:bg-transparent lg:relative lg:top-0 lg:w-auto lg:flex space-y-6 md:space-y-0 lg:space-x-16 lg:justify-end lg:items-center`}
      >
        <Link to="">
          <li>Destinations</li>
        </Link>
        <Link to="">
          <li>Hotels</li>
        </Link>
        <Link to="">
          <li>Flights</li>
        </Link>
        <Link to="">
          <li>Bookings</li>
        </Link>
        <Link to="">
          <li>Login</li>
        </Link>
        <Link to="">
          <li>Sign Up</li>
        </Link>
        <Link className="flex items-center" to="">
          <li>EN</li>
          <MdKeyboardArrowDown />
        </Link>
      </ul>
    </div>

    // </div>
  );
};

export default Header;
