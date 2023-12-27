import React, { useState ,forwardRef} from "react";
import Board from "./Board";
import "../Style/OurTeam.css";

import team  from "../Data/MainBoard";
import  assistant  from "../Data/AssistantBoard";


const OurTeam = forwardRef((props, ref) => {

    const [ourTeam, setourTeam] = useState(1);

    return (
      <div ref={ref} className="flex flex-col justify-between items-center mt-12">
        <h2 className="text-[50px]  font-bold  text-center gradient-text event_section_heading  mt-5">Our Team</h2>

        <div className="flex flex-row justify-between text-white gap-2 mt-5">
          <button
            className={`rounded-md px-4 py-2 ${ourTeam === 1 ? 'bg-blue-500' : 'bg-black'
              } hover:bg-blue-600 transition duration-300 ease-in-out`}
            onClick={() => setourTeam(1)}
          >
            Main Board
          </button>
          <button
            className={`rounded-md px-4 py-2 ${ourTeam === 2 ? 'bg-blue-500' : 'bg-black'
              } hover:bg-blue-600 transition duration-300 ease-in-out`}
            onClick={() => setourTeam(2)}
          >
            Assistant Board
          </button>
        </div>

        <div className="flex flex-row flex-wrap items-center gap-4 justify-center  ">
          {
            ourTeam === 1 && team && team.map((mentor) => {
              return (
                <div className="">
                  <Board mentor={mentor} />
                </div>
              )
            })

          }
        </div>
        <div className="flex flex-row flex-wrap items-center gap-4 justify-center ">
          {
            ourTeam === 2 && assistant && assistant.map((mentor) => {
              return (
                <div className="">
                  <Board mentor={mentor} />
                </div>
              )
            })

          }
        </div>
      </div>
    );
});

export default OurTeam;

