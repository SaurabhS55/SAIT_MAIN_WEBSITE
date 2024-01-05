import React, { Suspense } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Board = ({ mentor }) => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="max-w-[300px] min-w-[250px] group relative cursor-pointer overflow-hidden bg-[#0e2032e5] py-6 px-6 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-lg">
          <span className="absolute top-20 left-24 z-0 h-20 w-20 rounded-full bg-[#183b5ce5] transition-all duration-700 group-hover:scale-[10]"></span>
          <div className="relative z-10 mx-auto max-w-md space-y-3 transition-all group-hover:shadow-lg">
            {React.lazy(() => (
              <img
                src={mentor.Photo}
                alt={mentor.Name}
                className="w-[9rem] h-[9rem] mx-auto rounded-full aspect-square bg-gray-400 transition-all duration-300"
              ></img>
            ))}
            <div className="space-y-4 text-center divide-y divide-gray-600">
              <div className="my-2 space-y-1 text-white">
                <h2 className="text-xl font-semibold ">{mentor.Name}</h2>
                <p className="text-xs sm:text-base ">{mentor.Position}</p>
              </div>
              <div className="flex justify-center pt-2 space-x-4 align-center">
                <a
                  rel="noopener noreferrer"
                  href={mentor.GitHubProfile}
                  target="_blank"
                  aria-label="GitHub"
                  className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-500 transition-all hover:scale-105 group-hover:bg-[#0e2032e5]"
                >
                  <FaGithub className="w-6 h-6 fill-current" />
                </a>
                <a
                  rel="noopener noreferrer"
                  href={mentor.LinkedInProfile}
                  target="_blank"
                  aria-label="LinkedIn"
                  className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-500 transition-all hover:scale-105 group-hover:bg-[#0e2032e5]"
                >
                  <FaLinkedin className="w-6 h-6 fill-current" />
                </a>
                <a
                  rel="noopener noreferrer"
                  href={mentor.InstagramProfile}
                  target="_blank"
                  aria-label="Instagram"
                  className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-500 transition-all hover:scale-105 group-hover:bg-[#0e2032e5]"
                >
                  <FaInstagram className="w-6 h-6 fill-current"></FaInstagram>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default Board;
