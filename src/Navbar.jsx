import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => setSidebar((preValue) => !preValue);
  {
    /*! syntax means setting boolean value from true false, vice versa */
  }

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="h-10" />

      <nav className="flex items-center -ml-4 space-x-5 px-4 font-display border-b border-b-black/15 text-sm p-4 max-w-410">
        <div className="flex-1" aria-hidden="true"></div>

        <h1 className="font-bold text-lg p-2 pl-0">
          <Link to="/">Code+Girls</Link></h1>

        <ul className="hidden md:flex">
          <Link to="/About" className="p-2 pl-0 hover:text-gray-900 transition hover:scale-[1.02]">
            About
          </Link>
          <Link to="/Contact" className="p-2 hover:text-gray-900 transition hover:scale-[1.02]">
            Contact
          </Link>
        </ul>

        <div className="flex-3"></div>
        <div onClick={handleSidebar} className="block md:hidden cursor-pointer">
          {sidebar ? <IoCloseOutline size={20} /> : <CiMenuBurger size={20} />}
        </div>
        {/*if sidebar is true (sidedraw open), render X icon, otherwise render burger icon.*/}
        <div
          className={
            sidebar
              ? "z-50 md:hidden fixed left-0 top-0 w-[60%] h-full bg-white border-r border-gray-300 ease-in-out duration-500"
              : "z-50 fixed -left-full top-0 w-[60%] h-full bg-white ease-in-out duration-500"
          }
        >
          <h1 className="font-bold p-2 m-4">Code+Girls</h1>
          <ul className="p-4 pt-2">
            <Link to="/about" className="flex p-2  hover:text-gray-900">
              About
            </Link>
            <Link to="/contact" className="flex p-2 hover:text-gray-900">
              Contact
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
