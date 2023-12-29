import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Board = ({ mentor }) => {
  return (
    <div className="flex flex-col justify-center max-w-xs p-4 shadow-md rounded-xl bg-[#0e2032e5] text-gray-100 transition-all hover:scale-110">
      <img
        src={mentor.img_url}
        alt={mentor.name}
        className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
      />
      <div className="space-y-4 text-center divide-y dark:divide-gray-700">
        <div className="my-2 space-y-1">
          <h2 className="text-xl font-semibold ">{mentor.name}</h2>
          <p className="px-2 text-xs sm:text-base dark:text-gray-400">
            {mentor.position}
          </p>
        </div>
        <div className="flex justify-center pt-2 space-x-4 align-center">
          <a
            rel="noopener noreferrer"
            href={mentor.github_link}
            target="_blank"
            aria-label="GitHub"
            className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
          >
            <FaGithub className="w-6 h-6 fill-current" />
          </a>
          <a
            rel="noopener noreferrer"
            href={mentor.linkedin_link}
            target="_blank"
            aria-label="LinkedIn"
            className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
          >
            <FaLinkedin className="w-6 h-6 fill-current" />
          </a>
          <a
            rel="noopener noreferrer"
            href={mentor.instagran_link}
            target="_blank"
            aria-label="Instagram"
            className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
          >
            <FaInstagram className="w-6 h-6 fill-current"></FaInstagram>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Board;
