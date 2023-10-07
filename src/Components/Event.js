
import "../Style/Event.css";
import React,{forwardRef} from "react";
import { useNavigate, Link } from "react-router-dom";
import events from "../Data/EventData";


const Event = forwardRef((props, ref) =>  {
  const navigate = useNavigate();

  return (
    <div ref={ref} className=" event_section">
     <div className="text-[50px] font-bold text-center gradient-text event_section_heading mt-5">
  Events
</div>

     

      <div className="flex flex-wrap  justify-center mt-2 event_section_events">
        {events.map((event, i) => {
          return (
            <div
              key={i}
              className="w-[100%] md:w-[45%] lg:w-[30%] xl:w-[25%] p-3 mt-4 bg-gradient-to-b from-0E2032 to-ADEFD1 flex flex-col items-center rounded-[10px] poster bg-[#0e2032e5] mx-[15px]"
            >
              <div className="mt-2">
                <img
                  src={event.poster_url}
                  alt="Events dont have poster"
                  className="w-[40em] h-[1005] rounded-[10px] poster_img"
                />
              </div>

              <div className="font-bold text-2xl gtext my-2 text-center">
                {event.event_name}
              </div>
              <div>
                <p className="text-gray-100 text-sm mb-4 description">
                  {event.description.substring(0, 240) + " ..."}
                </p>
              </div>
              <div className="knowMore">
                <Link
                  to={"https://sait-techfusion-2-0.vercel.app/"}
                  className="bg-[#288CEF] w-[130px] h-[40px] px-3 py-2 text-white font-semibold rounded-lg cursor-pointer"
                >
                  Visit Website
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default Event;
