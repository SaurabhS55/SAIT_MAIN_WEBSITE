import React, { useState, forwardRef,useEffect } from "react";
import Board from "./Board";

import team from "../Data/sait_main";
import assistant from "../Data/sait_assistant";
import mentor from "../Data/sait_mentor";
import TeamMobile from "./TeamMobile";

const OurTeam = forwardRef((props, ref) => {
  const [ourTeam, setourTeam] = useState(1);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // Remove the event listener when the component is unmounted
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line
  }, []);
  return (
    <>{
      (screenWidth > 768) ?  <div
      ref={ref}
      className="flex flex-col justify-between items-center pt-6 pb-12"
    >
      <h2 className="text-[50px]  font-bold  text-center  text-blue-600">
        Our Team
      </h2>

      <div className=" text-white text-center  mt-4  mb-4  ">
        <div className="flex gap-2 justify-center p-1">
          <button
            className={`rounded-md px-1 md:px-4 py-2 ${
              ourTeam === 0 ? "bg-blue-500" : "bg-black"
            } hover:bg-blue-600 transition duration-300 ease-in-out`}
            onClick={() => setourTeam(0)}
          >
            Mentor Board
          </button>
          <button
            className={`rounded-md px-1 md:px-4 py-2 mb-2 ${
              ourTeam === 1 ? "bg-blue-500" : "bg-black"
            } hover:bg-blue-600 transition duration-300 ease-in-out`}
            onClick={() => setourTeam(1)}
          >
            Main Board
          </button>
          <button
            className={`rounded-md px-1 md:px-4 py-2 ${
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
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 items-center gap-16 justify-center px-16 ">
        {ourTeam === 0 &&
          mentor &&
          mentor.map((mentor) => {
            return (
              <div className="" key={mentor.Name}>
                <Board mentor={mentor} />
              </div>
            );
          })}
      </div>
    </div>:<>
    <TeamMobile/>
    </>
    }
    </>
   
  );
});

export default OurTeam;
