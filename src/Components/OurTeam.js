import React, { useState, forwardRef } from "react";
import Board from "./Board";

import team from "../Data/sait_main";
import assistant from "../Data/sait_assistant";

const OurTeam = forwardRef((props, ref) => {
  const [ourTeam, setourTeam] = useState(1);

  return (
    <div ref={ref} className="flex flex-col justify-between items-center mt-12">
      <h2 className="text-[50px]  font-bold  text-center gradient-text event_section_heading  mt-5">
        Our Team
      </h2>

      <div className=" text-white text-center  mt-4  mb-4  ">
        <button
          className={`w-fit mx-auto rounded-md px-4 py-3 mb-2 ${
            ourTeam === 1 ? "bg-blue-500" : "bg-black"
          } hover:bg-blue-600 transition duration-300 ease-in-out`}
          onClick={() => setourTeam(1)}
        >
          Main Board
        </button>
        <div className="flex gap-2 justify-center">
          <button
            className={`rounded-md px-4 py-2 ${
              ourTeam === 0 ? "bg-blue-500" : "bg-black"
            } hover:bg-blue-600 transition duration-300 ease-in-out`}
            onClick={() => setourTeam(0)}
          >
            Member Board
          </button>
          <button
            className={`rounded-md px-4 py-2 ${
              ourTeam === 2 ? "bg-blue-500" : "bg-black"
            } hover:bg-blue-600 transition duration-300 ease-in-out`}
            onClick={() => setourTeam(2)}
          >
            Assistant Board
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 items-center gap-16 justify-center px-16  ">
        {ourTeam === 1 &&
          team &&
          team.map((mentor) => {
            return (
              <div className="" key={mentor.Name}>
                <Board mentor={mentor} />
              </div>
            );
          })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 items-center gap-16 justify-center px-16 ">
        {ourTeam === 2 &&
          assistant &&
          assistant.map((mentor) => {
            return (
              <div className="" key={mentor.Name}>
                <Board mentor={mentor} />
              </div>
            );
          })}
      </div>
    </div>
  );
});

export default OurTeam;
