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
import { SiGotomeeting } from "react-icons/si";
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
      href:"/",
      icon: <FaHome size={32} color="#015DB9" />,
      onClick: () => {
        scrollToHome();
        closeMenu();
      },
    },
    {
      text: "ABOUT US",
      href:"#aboutus",
      icon: <FaInfoCircle size={32} color="#015DB9" />,
      onClick: scrollToAboutUs,
    },
    {
      text: "EVENTS",
      href:"#events",
      icon: <FaCalendarAlt size={32} color="#015DB9" />,
      onClick: scrollToEvent,
    },
    {
      text: "MENTORS",
      href:"#mentors",
      icon: <FaUsers size={32} color="#015DB9" />,
      onClick: scrollToMentor,
    },
    {
      text: "OUR TEAM",
      href:"#ourteam",
      icon: <FaUserTie size={32} color="#015DB9" />,
      onClick: scrollToOurTeam,
    },
    {
      text:"CLUB SERVICES",
      href:"/clubservice",
      icon:<SiGotomeeting size={32} color="#015DB9" />,
      onClick: closeMenu,
    },
    {
      text: "GALLERY",
      href:"#gallery",
      icon: <FaImages size={32} color="#015DB9" />,
      onClick: scrollToGallery,
    },
  ];

  return (
    <nav className="p-4 lg:px-8 mb-4">
      <div className="px-3 lg:px-14 mx-auto flex items-center justify-between">
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
            {isMenuOpen ? (
              <FaTimes size={32} color="#2c5282" onClick={toggleMenu}></FaTimes>
            ) : (
              <FaBars size={32} color="#2c5282" onClick={toggleMenu}></FaBars>
            )}
        </div>

        <div
          className={`space-y-6 absolute md:mt-0 md:static md:space-y-0 md:flex md:items-center md:w-auto md:space-x-6 lg:space-x-8 md:rounded-none md:bg-opacity-0 top-28 right-2 ${(isMenuOpen)?"mt-0 ":"-mt-[1000px] "} z-50 transition-all duration-300 p-3 rounded-lg`}
        >
          {navLinks.map(({ text, icon, onClick,href}, index) => (
            <div key={index} className="relative">
              <a
                href={href}
                className="flex shadow-lg items-center text-white hover:text-gray-300 md:mt-0 transition duration-300 transform hover:scale-110 bg-slate-200 bg-opacity-90 md:bg-opacity-10 p-3 rounded-full"
                onClick={() => {
                  onClick();
                  closeMenu();
                }}
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
                key={index}
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
