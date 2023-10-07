import React, { forwardRef } from "react";
import SvgImage from "../Assets/sait.jpg";
import "../Style/Aboutus.css";

const AboutComponent = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="py-3 py-md-5 py-xl-8 try">
      <div className="container">
        <div className="text-[50px] font-bold text-center gradient-text event_section_heading mt-5">
          About Us
        </div>
        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-md-6">
            {/* 50% width for the image */}
            <img
              className="img-fluid rounded sizeimg"
              loading="lazy"
              src={SvgImage}
              alt=""
              style={{ width: '100%', margin: 0, padding: 0 }}
            />
          </div>
          <div className="col-12 col-md-6">
            {/* 50% width for the text */}
            <div className="row justify-content-center">
              <div className="col-12 col-xl-11">
                <p className="lead mb-1 aboutfont">
                  Students’ Association of Information Technology (SAIT),
                  established in the year 2003, is a club formed by the students
                  of the IT Department of Walchand College of Engineering,
                  Sangli. This organization is a nonprofit public benefit
                  organization and is not organized for the private gain of any
                  person. Our community is passionate about technology and
                  actively engages in outreach and social initiatives. SAIT
                  conducts weekly club services, 2 mega events named Technobuzz
                  and Techfusion every year. SAIT conducts technical sessions
                  like AWS workshop, Networking Workshop, Hardware Workshop, IoT
                  Workshop, coding competitions, Club services on various
                  technologies and non-technical sessions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutComponent;
