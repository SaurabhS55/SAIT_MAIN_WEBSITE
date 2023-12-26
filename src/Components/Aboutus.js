// import React, { forwardRef } from "react";
// import SvgImage from "../Assets/sait.jpg";
// import "../Style/Aboutus.css";

// const AboutComponent = forwardRef((props, ref) => {
//   return (
//     <section ref={ref} className="py-8 try">
//       <div className="container mx-auto flex flex-col items-center">
//         <div className="text-4xl font-bold text-center gradient-text event_section_heading mb-8 md:mb-12 lg:mb-16">
//           About Us
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <div>
//             {/* Image */}
//             <img
//               className="w-full h-auto rounded-md shadow-lg"
//               loading="lazy"
//               src={SvgImage}
//               alt=""
//             />
//           </div>
//           <div>
//             {/* Text */}
//             <p className="text-lg leading-relaxed mb-6 aboutfont">
//               Students’ Association of Information Technology (SAIT),
//               established in the year 2003, is a dynamic club formed by the students
//               of the IT Department at Walchand College of Engineering, Sangli.
//               <br />
//               <br />
//               SAIT is not just a club; it's a community passionate about technology,
//               actively engaging in outreach and social initiatives. Our activities
//               include weekly club services, mega events like Technobuzz and Techfusion,
//               and various technical sessions (AWS, Networking, Hardware, IoT, etc.),
//               coding competitions, and non-technical sessions.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// });

// export default AboutComponent;
import React, { forwardRef } from "react";
import SvgImage from "../Assets/sait.jpg";

const AboutComponent = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="relative py-20 w-11/12 mx-auto rounded-lg mt-20 bg-cover bg-center text-white"
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
