import React, { useState ,forwardRef} from "react";
import Board from "./Board";

import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import "../Style/TeamMobile.css"

import team  from "../Data/MainBoard";
import assistant from "../Data/AssistantBoard";

const TeamMobile = forwardRef((props, ref) =>  { 
  const [ourTeam, setOurTeam] = useState(1);
  const [currentCard, setCurrentCard] = useState(0);
  const [data, setData] = useState(team);

  const handleNext = () => {
    if (currentCard < team.length - 1) {
      setCurrentCard(currentCard + 1);
    } else {
      setCurrentCard(0); // Wrap to the first card when reaching the end
    }
  };

  const handlePrev = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    } else {
      setCurrentCard(team.length - 1); // Wrap to the last card when at the beginning
    }
  };

  return (
    <div ref={ref} className="flex flex-col justify-between items-center ">
      <h2 className="text-[50px] font-bold text-center gradient-text event_section_heading mt-5">
        Our Team
      </h2>

      <div className="flex flex-row justify-between text-white gap-2 mt-5 mb-5">
        <button
          className={`rounded-md px-4  py-1 ${
            ourTeam === 1 ? "bg-blue-500" : "bg-black"
          } hover:bg-blue-600 transition duration-300 ease-in-out`}
          onClick={() => {
            setOurTeam(1);
            setCurrentCard(0);
            setData(team);
          }}
        >
          Main Board
        </button>
        <button
          className={`rounded-md px-4 py-1 ${
            ourTeam === 2 ? "bg-blue-500" : "bg-black"
          } hover:bg-blue-600 transition duration-300 ease-in-out`}
          onClick={() => {
            setOurTeam(2);
            setCurrentCard(0);
            setData(assistant);
          }}
        >
          Assistant Board
        </button>
      </div>

      <div className="slider-container  flex items-center gap-2">
        
          <FcPrevious size={25} className=" prevarrow mr-[-10px]" onClick={handlePrev} />
             
              
        <div className="slider">
          {ourTeam === 1 &&
            data &&
            data.map((mentor, index) => (
              <div
                className={`slider-item ${
                  index === currentCard ? "visible" : "hidden"
                }`}
                key={mentor.name}
              >
                <Board mentor={mentor} />
              </div>
            ))}
          ;
        </div>
      <div className="">
  {ourTeam === 2 &&
    data &&
    data.map((mentor, index) => (
      <div
        className={`slider-item  ${
          index === currentCard ? "visible ml-[-30px] mt-[-20px] " : "hidden"
        } `}
        key={mentor.name}
      >
        <Board mentor={mentor} style={{ width: '100%' }} />
      </div>
    ))}
</div>

        
          <FcNext size={25} className="" onClick={handleNext} />
        
      </div>
    </div>
  );
}
);
export default TeamMobile;
