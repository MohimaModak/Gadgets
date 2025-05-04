import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <div className="fixed w-full text-white font-medium top-0 z-50 shadow-sm">
      <div className="flex justify items-center">
        <div className="md:hidden  sm:block text-sm p-4" onClick={toggleButton}>
          <div className="cursor-pointer">
            <div>
              <div className="w-8 h-1 bg-yellow-200"></div>
              <div className="w-8 h-1 mt-1 bg-yellow-200"></div>
              <div className="w-8 h-1 mt-1 bg-yellow-200"></div>
            </div>
          </div>
        </div>
      </div>
      <div className={`mobile-menu ${toggle ? "open" : ""} bg-teal-500`}>
        <div className="navbar-links font-bold text-yellow-200">
          <div className="flex items-center justify-center">
            <h1 className="font-bold  text-yellow-200 text-3xl text-center p-4">Gadgets</h1></div>
          <Link to="/" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
            Home
          </Link>
          <Link to="/Product" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
          Products
          </Link>
          <Link to="/Contact" smooth={true} duration={1000} className="text-xl p-4 block" onClick={toggleButton}>
          Contact
          </Link>
        </div>
      </div>


      <div className="flex justify-between items-center bg-white/10 backdrop-blur-3xl">
        <div className="hidden md:block w-full ">
          <nav className="navbar flex justify-between items-center">
            <div className="flex justify-center items-center">
              <h1 className="font-bold  text-yellow-200 text-3xl text-center">Gadgets</h1>
            </div>
            <div className="navbar-links lg:flex justify-center items-center gap-5">
              <Link to="/" smooth={true} duration={1000} className="text-xl text-gray-700 hover:underline">
                Home
              </Link>
              <Link to="/Product" smooth={true} duration={1000} className="text-xl text-gray-700 hover:underline">
              Products
              </Link>
              <Link to="/Contact" smooth={true} duration={1000} className="text-xl text-gray-700 hover:underline">
                Contact
              </Link>

            </div>
            <Link to='/Contact' smooth={true} duration={1000}>
            <div className="flex justify-center items-center">
            <button className='bg-yellow-200 text-gray-800 uppercase px-4 py-2.5 font-medium rounded-md'>Order Now</button>            </div>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}