import React, { useEffect } from "react";
import SvgImage0 from "../Assets/YouTube.png";
import SvgImage1 from "../Assets/LinkedIn.png";
import SvgImage2 from "../Assets/Instagram.png";
import SvgImage from "../Assets/amico.png";
import "../Style/Home.css";

function Home() {
  useEffect(() => {}, []);

  return (
    <div className="container w-11/12 rounded-3xl bg-gradient-to-b from-[#015DB9] to-[#022141] text-white">
      <section className="wrapper flex justify-center items-center p-4 md:p-12">
        <div className="container mx-auto md:space-x-4 grid md:grid-cols-2 items-center">
          <div className="grid-item-1">
            <h1 className="main-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Beyond The <span className="text-pink-400">Limitations</span>
              <br />
              Next To The <span className="text-pink-400">Perfection</span>
            </h1>
            {/* <h1 className="main-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Beyond The <span className="magic">Limitations</span>
              <br />
              Next To The <span className="magic">Perfection</span>
            </h1> */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-6">
              Discover a world of possibilities and perfection with us. Join our community and explore together!
            </p>
            <div className="-ml-4 scale-90 md:scale-100 md:justify-normal flex space-x-6 mt-4 mb-3">
              <button className="bg-gray-400 w-16 h-16 flex justify-center items-center rounded-full bg-opacity-20 ">
                <img src={SvgImage0} alt="YouTube" className="h-16 invert" />
              </button>
              <button className="bg-gray-400 w-16 h-16 flex justify-center items-center rounded-full bg-opacity-20 ">
                <img src={SvgImage1} alt="LinkedIn" className="h-8 invert" />
              </button>
              <button className="bg-gray-400 w-16 h-16 flex justify-center items-center rounded-full bg-opacity-20 ">
                <img src={SvgImage2} alt="Instagram" className="h-8 invert" />
              </button>
            </div>
          </div>
          <div className="md:ml-4 grid-item-2">
            <div className="">
              <img src={SvgImage} alt="team-img" className=" drop-shadow-xl z-10" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;


