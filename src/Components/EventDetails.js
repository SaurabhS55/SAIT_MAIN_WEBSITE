import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useParams,useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "../Style/details.css";
import clubServices from "../Data/clubServices";

const EventDetails = () => {
  const { id } = useParams();
  const navigate=useNavigate();
  const [event, setEvent] = useState(null);

  const backgroundAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  useEffect(() => {
    const eventId = parseInt(id);
    if (!isNaN(eventId) && eventId >= 0 && eventId < clubServices.length) {
      setEvent(clubServices[eventId]);
    }
  }, [id]);

  return (
    <div className="bg-black min-h-screen">
      <FiArrowLeft color="white" onClick={()=>{navigate("/clubservice")}} size={35} style={{position:"absolute",cursor:"pointer",left:"30px",top:"6rem"}}/>
      <div className="parallax-bg">
        <animated.div
          className="text-[40px] font-bold text-center py-5 gtext"
          style={backgroundAnimation}
        >
          {event ? event.event_name : ""}
        </animated.div>

        <div className="flex w-full justify-center item-center gap-5 bg-blue main_div">
          <img
            src={event ? event.poster_url : ""}
            alt="Event Poster"
            className="w-[40%] h-[435px] rounded-t-lg object-cover img"
          />
          <div className="w-[40%] flex flex-col justify-center items-center gap-7 info">
            <div className="text-[30px] font-bold text-center gradient-text topic mt-5">
              {event ? event.event_name : ""}
            </div>
            <div className="text-[25px] text-white desc">
              {event ? event.description : ""}
            </div>
            <div className="flex flex-row justify-between items-center gap-x-10 winners">
              <div className="presenters self-start text-white">
                <h3>Quiz Winners:</h3>
                <ul>
                  {event ? (
                    event.Winners.map((winner, index) => (
                      <li key={index}>{winner.name}</li>
                    ))
                  ) : (
                    <li></li>
                  )}
                </ul>
              </div>

              <div className="presenters self-start text-white">
                <h3>Presenters:</h3>
                <ul>
                  {event ? (
                    event.Presentors.map((presenter, index) => (
                      <li key={index}>{presenter.name}</li>
                    ))
                  ) : (
                    <li></li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
