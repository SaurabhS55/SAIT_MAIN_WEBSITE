import React, { useState} from "react";
import Board from "./Board";
import Data from "../Data/sait_mentor";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";

const MentorMobile = ({props,ref}) => {
  const [currentCard, setCurrentCard] = useState(0);
  // eslint-disable-next-line   
  const [data, setData] = useState(Data);

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
    <div ref={ref} className="mt-10 flex flex-col justify-between items-center ">
      <h2 className="text-[50px] font-bold text-center gradient-text event_section_heading mt-5 mb-5">
        Mentors
      </h2>
      <div className="w-full px-6 py-2 flex relative items-center gap-2">
        <FcPrevious
          size={28}
          className="absolute left-8 cursor-pointer"
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
        <FcNext
          size={28}
          className="absolute right-8 cursor-pointer"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default MentorMobile;
