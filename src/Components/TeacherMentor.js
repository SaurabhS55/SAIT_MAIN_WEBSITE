import React, { useEffect } from "react";
import mentors from "../Data/teacher";

const TeacherMentor = () => {
  useEffect(() => {
    console.log(mentors);
  }, []);
  return (
    <div className="p-4 md:px-8 w-full text-center">
      <h1 className="text-[50px] font-bold text-center gradient-text event_section_heading mt-5 mb-4">
        Mentors
      </h1>
      <div className="w-full grid p-2 grid-cols-1 md:grid-cols-3 gap-8">
        {mentors.map((mentor, i) => {
          return (
            <div className="bg-[#0e2032e5] w-[300px] rounded-[10px] p-4 mx-auto space-y-4 text-center " key={i}>
              <img
                src={mentor.photo}
                alt={mentor.name}
                className="mx-auto  w-[150px] h-[150px] rounded-full"
              />
              <div className="text-white text-center">
                <h1 className="text-xl font-semibold">{mentor.name}</h1>
                <h1 className="">{mentor.position}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeacherMentor;
