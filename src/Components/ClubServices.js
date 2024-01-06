import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import clubServices from "../Data/clubServices";
import { FiArrowLeft } from "react-icons/fi";
import "../Style/ClubService.css";

const ClubServices = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const handleCardClick = (event) => {
    // Navigate to the EventDetails component with the specific event ID
    navigate(`/EventDetails/${event.id}`);
  };

  return (
    <div ref={ref} className="event_section">
      <FiArrowLeft color="white" onClick={()=>{navigate("/")}} size={35} style={{position:"absolute",cursor:"pointer",left:"30px",top:"30px"}}/>
      <div className="text-[50px] font-bold text-center text-blue-600 mt-3">
        Club Services
      </div>

      <div className="flex flex-wrap justify-center items-center event_section_events gap-[30px] mt-2">
        {clubServices.map((event, i) => {
          return (
            <div
              key={i}
              className="w-[90%] sm:w-[45%] md:w-[30%] lg:w-[25%] p-3 mt-4 bg-gradient-to-b from-0E2032 to-ADEFD1 flex flex-wrap flex-col items-center rounded-[10px] poster bg-[#0e2032e5]"
              onClick={() => handleCardClick(event)} // Pass the event object on click
            >
              <div className="mt-2">
                <img
                  src={event.poster_url}
                  alt="Events dont have poster"
                  className="w-fit h-[300px] rounded-[10px] object-fill poster_img"
                />
              </div>

              <div className="font-bold text-2xl gtext my-2 text-center">
                {event.event_name}
              </div>
              <div>
                <p className="text-gray-100 text-sm mb-4 description">
                  {event.description.substring(0, 150) + " ..."}
                </p>
              </div>
              <div className="knowMore">
                <button
                  className="bg-[#288CEF] w-[130px] h-[40px] px-3 py-2 text-white font-semibold rounded-lg cursor-pointer"
                >
                  Know More
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default ClubServices;
