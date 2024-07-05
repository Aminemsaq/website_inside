/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-950 p-5 fixed top-0 left-0 w-full z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <a href="/" aria-label="Home">
            GamirAcademy
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            className="text-white hover:text-orange-500 px-3 py-3 transition duration-300 text-sm md:text-base cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className="text-white hover:text-orange-500 px-3 py-3 transition duration-300 text-sm md:text-base cursor-pointer"
          >
            About Us
          </Link>
          <Link
            to="buy"
            smooth={true}
            duration={500}
            offset={-70}
            className="text-white hover:text-orange-500 px-3 py-3 transition duration-300 text-sm md:text-base cursor-pointer"
          >
            Offers
          </Link>
          <Link
            to="testimonials"
            smooth={true}
            duration={500}
            offset={-50}
            className="text-white hover:text-orange-500 px-3 py-3 transition duration-300 text-sm md:text-base cursor-pointer"
          >
            Testimonials
          </Link>
          <a
            href="/register"
            className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-5 py-2 rounded-md transition duration-300 cursor-pointer text-sm md:text-base"
          >
            Let's Connect
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none transition duration-300"
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-1 mt-6 text-left">
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={toggleMenu}
            className="text-white hover:text-orange-500 px-3 py-2 rounded text-lg cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={toggleMenu}
            className="text-white hover:text-orange-500 px-3 py-2 rounded text-lg cursor-pointer"
          >
            About
          </Link>
          <Link
            to="buy"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={toggleMenu}
            className="text-white hover:text-orange-500 px-3 py-2 rounded text-lg cursor-pointer"
          >
            Offers
          </Link>
          <Link
            to="testimonials"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={toggleMenu}
            className="text-white hover:text-orange-500 px-3 py-2 rounded text-lg cursor-pointer"
          >
            Testimonials
          </Link>
          <a
            href="/register"
            className="bg-orange-500 text-white hover:bg-orange-400 px-3 py-2 rounded text-lg"
            onClick={toggleMenu}
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
