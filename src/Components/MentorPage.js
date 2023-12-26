import React ,{forwardRef} from "react";
import Board from "./Board";
import mentors from "../Data/MentorTeacher";
import "../Style/MentorPage.css"


const MentorPage = forwardRef((props, ref) =>   {
    return (
        <div ref={ref} className="flex  flex-col justify-center items-center ">

            <div className="text-[50px]  font-bold  text-center gradient-text event_section_heading mt-5">
                Mentors
            </div>

            <div className="md:flex md:flex-row  sm:flex-col  items-center sm:justify-center  justify-between  mt-[30px] cursor-pointer  gap-10">
                {mentors && mentors.map((mentor) => {
                    return <Board mentor={mentor} key={mentor.name} />;
                })}
            </div>
        </div>
    );
});

export default MentorPage;