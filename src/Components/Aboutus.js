import React, { forwardRef } from "react";
import SvgImage from "../Assets/sait.jpg";

const AboutComponent = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="relative py-20 w-11/12 mx-auto rounded-lg mt-24 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${SvgImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-70"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      <div className="container mx-auto relative z-10 text-center">
        <div className="md:w-2/3 mx-auto">
          {/* Text */}
          <div className="text-5xl font-bold gradient-text mb-8">
            Welcome to SAIT
          </div>

          {/* <div
            className="text-5xl font-bold gradient-text mb-8
             flex justify-center align-center
             text-center
             content
          "
          >
            <h2
              className="txt
               text-center
              "
            >
              Welcome to SAIT
            </h2>
            <h2
              className="txt
                text-center
              "
            >
              Welcome to SAIT
            </h2>
          </div> */}
          <p className="lg:text-lg leading-relaxed mb-8 aboutfont">
            Students’ Association of Information Technology (SAIT), established
            in 2003, is a vibrant club formed by the students of the IT
            Department at Walchand College of Engineering, Sangli.
            <br />
            SAIT is more than a club, it's a community passionate about
            technology, actively engaging in outreach and social initiatives.
            Our activities include weekly club services, mega events like
            Technobuzz and Techfusion, various technical sessions (AWS,
            Networking, Hardware, IoT, etc.), coding competitions, and
            non-technical sessions.
          </p>
        </div>
      </div>
    </section>
  );
});

export default AboutComponent;
