import React, { useState, forwardRef } from "react";
import Board from "./Board";

import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";

import team from "../Data/sait_main";
import assistant from "../Data/sait_assistant";


const TeamMobile = forwardRef((props, ref) => {
  const [ourTeam, setourTeam] = useState(1);
  const [currentCard, setCurrentCard] = useState(0);
  const [data, setData] = useState(team);

  const handleNext = () => {
    if (currentCard < data.length - 1) {
      setCurrentCard(currentCard + 1);
    } else {
      setCurrentCard(0); // Wrap to the first card when reaching the end
    }
  };

  const handlePrev = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    } else {
      setCurrentCard(data.length - 1); // Wrap to the last card when at the beginning
    }
  };

  return (
    <div ref={ref} className="flex flex-col justify-between items-center mt-10 ">
      <h2 className="text-[50px] font-bold text-center gradient-text event_section_heading mt-5">
        Our Team
      </h2>

      <div className=" text-white text-center  mt-4  mb-4  ">
        <button
          className={`w-fit mx-auto rounded-md px-4 py-3 mb-2 ${
            ourTeam === 1 ? "bg-blue-500" : "bg-black"
          } hover:bg-blue-600 transition duration-300 ease-in-out`}
          onClick={() => {
            setourTeam(1);
            setData(team);
            setCurrentCard(0);
          }}
        >
          Main Board
        </button>
        <div className="flex gap-2 justify-center">
          <button
            className={`rounded-md px-4 py-2 ${
              ourTeam === 0 ? "bg-blue-500" : "bg-black"
            } hover:bg-blue-600 transition duration-300 ease-in-out`}
            onClick={() => {
              setourTeam(0);
              setData(null);
              setCurrentCard(0);
            }}
          >
            Member Board
          </button>
          <button
            className={`rounded-md px-4 py-2 ${
              ourTeam === 2 ? "bg-blue-500" : "bg-black"
            } hover:bg-blue-600 transition duration-300 ease-in-out`}
            onClick={() => {
              setourTeam(2);
              setData(assistant);
              setCurrentCard(0);
            }}
          >
            Assistant Board
          </button>
        </div>
      </div>

      <div className="w-full px-6 py-2 flex relative items-center gap-2">
        <FcPrevious
          size={28}
          className="absolute left-4 cursor-pointer"
          onClick={handlePrev}
        />

        <div className="slider mx-auto">
          {data && data[currentCard] ? (
            <div>
              <Board mentor={data[currentCard]} />
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <FcNext size={28} className="absolute right-4 cursor-pointer" onClick={handleNext} />
      </div>
    </div>
  );
});
export default TeamMobile;
