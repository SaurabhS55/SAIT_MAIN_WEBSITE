import React, { forwardRef } from "react";
import Board from "./Board";
import mentors from "../Data/sait_mentor";
import "../Style/MentorPage.css";

const MentorPage = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="flex flex-col justify-center items-center mt-16">
      <div className="text-[50px]  font-bold  text-center gradient-text event_section_heading ">
        Mentors
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {mentors &&
          mentors.map((mentor) => {
            return <Board mentor={mentor} key={mentor.Name} />;
          })}
      </div>
    </div>
  );
});

export default MentorPage;
