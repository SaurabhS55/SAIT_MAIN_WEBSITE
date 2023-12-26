import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaCalendarAlt,
  FaUsers,
  FaUserTie,
  FaImages,
} from "react-icons/fa";
import SvgImage from "../Assets/Rectangle 2.png";

const CustomNavbar = ({
  scrollToHome,
  scrollToAboutUs,
  scrollToGallery,
  scrollToEvent,
  scrollToMentor,
  scrollToOurTeam,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setHoveredLink(null);
  };

  const navLinks = [
    {
      text: "HOME",
      icon: <FaHome size={32} color="#015DB9" />,
      onClick: () => {
        scrollToHome();
        closeMenu();
      },
    },
    {
      text: "ABOUT US",
      icon: <FaInfoCircle size={32} color="#015DB9" />,
      onClick: scrollToAboutUs,
    },
    {
      text: "EVENTS",
      icon: <FaCalendarAlt size={32} color="#015DB9" />,
      onClick: scrollToEvent,
    },
    {
      text: "MENTORS",
      icon: <FaUsers size={32} color="#015DB9" />,
      onClick: scrollToMentor,
    },
    {
      text: "OUR TEAM",
      icon: <FaUserTie size={32} color="#015DB9" />,
      onClick: scrollToOurTeam,
    },
    {
      text: "GALLERY",
      icon: <FaImages size={32} color="#015DB9" />,
      onClick: scrollToGallery,
    },
  ];

  return (
    <nav className="p-4">
      <div className="px-6 lg:px-12 mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center text-white">
          <img
            src={SvgImage}
            alt="Logo"
            width="60"
            height="63"
            className="mr-2"
          />
          <span className="text-xl font-semibold">SAIT</span>
        </a>

        <div className="md:hidden">
          <button className="bg-white flex justify-center items-center w-14 h-14 bg-opacity-25" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes size={32} color="#0e2032e5"></FaTimes>
            ) : (
              <FaBars size={32} color="#0e2032e5"></FaBars>
            )}
          </button>
        </div>

        <div
          className={`space-y-8 absolute md:mt-0 md:static md:space-y-0 md:flex md:items-center md:w-auto md:space-x-6 lg:space-x-8 md:bg-none md:rounded-none md:bg-opacity-0 top-28 right-8 ${(isMenuOpen)?"mt-0 ":"-mt-[720px]"} transition-all duration-300  p-3 rounded-lg`}
        >
          {navLinks.map(({ text, icon, onClick }, index) => (
            <div key={index} className="relative">
              <a
                href={`#${text.toLowerCase()}`}
                className="flex items-center text-white hover:text-gray-300 md:mt-0 transition duration-300 transform hover:scale-110 bg-slate-200 bg-opacity-90 md:bg-opacity-10 p-3 rounded-full"
                onClick={() => {
                  onClick();
                  closeMenu();
                }}
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {icon}
              </a>
              {hoveredLink === index && (
                <div className="absolute w-auto bg-white text-black font-bold p-2 rounded-md text-xs opacity-50 text-center scale-75">
                  {text}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
