import React from "react";
import logo from "../assets/iceon/Logo.svg";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <div className="flex justify-between items-center text-base font-bold py-10">
      <img src={logo} alt="" />

      <ul className="flex  space-x-16">
        <Link to="">
          <li>Desitnations</li>
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
          <li>Sing Up</li>
        </Link>
        <Link className="flex items-center" to="">
          <li>EN</li>
          <MdKeyboardArrowDown />
        </Link>
      </ul>
    </div>
  );
};

export default Header;
