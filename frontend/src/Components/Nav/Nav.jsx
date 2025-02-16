import React, { useState } from "react";
import { CiDark } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import LogoImg from "../../assets/logo.png";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#17192E] text-white px-6 md:px-20 py-3 flex justify-between items-center relative">
      <Link to="/" className="flex items-center">
        <img height="60px" width="60px" src={LogoImg} alt="Logo" className="mr-2" />
        <h1 className="text-xl font-semibold">ImgGen</h1>
      </Link>

      {/* Hamburger Menu Button */}
      <button 
        className="md:hidden text-2xl" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Menu Items */}
      <div className={`absolute md:static top-16 left-0 w-full md:w-auto bg-[#17192E] md:bg-transparent md:flex items-center md:space-x-6 p-4 md:p-0 transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
        <Link 
          to="/generate" 
          className="block text-center md:inline cursor-pointer bg-[#5254B7] px-4 py-2 rounded-lg hover:bg-[#494a86]"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
