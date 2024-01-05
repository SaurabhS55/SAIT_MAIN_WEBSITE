import React from "react";
import "../Style/Footer.css";
import SvgImage0 from "../Assets/YouTube.png";
import SvgImage1 from "../Assets/LinkedIn.png";
import SvgImage2 from "../Assets/Instagram.png";
import {
  FaHome,
  FaUsers,
  FaCalendarAlt,
  FaImages,
  FaInfoCircle
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer({ scrollToHome, scrollToAboutUs, scrollToGallery }) {
  const youtubeUrl = "https://youtube.com/@wcesait5335?si=W6Sdl-AtjrLN0ge8";
  const linkedinUrl =
    "https://www.linkedin.com/in/wcesait?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
  const instagramUrl =
    "https://www.instagram.com/wce_sait/?igshid=MWZjMTM2ODFkZg";
  const openSocialMediaLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <footer className="mb-6 rounded-2xl">
      <div className="row primary">
        <div className="column about">
          <h3>SAIT</h3>
          <p>
            SAIT (Student's Association of Information Technology) at Walchand
            College of Sangli is a vibrant club dedicated to promoting IT
            excellence.
          </p>
          <div className="btn_wrapper1 iconssoc">
            <button
              className="btn view_more_btn1"
              onClick={() => openSocialMediaLink(youtubeUrl)}
            >
              <img
                src={SvgImage0}
                alt="YouTube"
                style={{ width: "200%", height: "auto" }}
              />
            </button>
            <button
              className="btn view_more_btn1"
              onClick={() => openSocialMediaLink(linkedinUrl)}
            >
              <img
                src={SvgImage1}
                alt="LinkedIn"
                style={{ width: "200%", height: "auto" }}
              />
            </button>
            <button
              className="btn view_more_btn1"
              onClick={() => openSocialMediaLink(instagramUrl)}
            >
              <img
                src={SvgImage2}
                alt="Instagram"
                style={{ width: "200%", height: "auto" }}
              />
            </button>
          </div>
        </div>

        <div className="column links">
          <h3>Some Links</h3>
          <ul>
            <li>
              <a
                className="p-1 flex space-x-2 items-center"
                href="#Home"
                onClick={scrollToHome}
              >
                <FaHome></FaHome>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a
                className="p-1 flex space-x-2 items-center"
                href="#About"
                onClick={scrollToAboutUs}
              >
                <FaInfoCircle></FaInfoCircle>
                <span>About us</span>
              </a>
            </li>
            <li>
              <a className="p-1 flex space-x-2 items-center" href="#Events" >
                <FaCalendarAlt></FaCalendarAlt>
                <span>Events</span>
              </a>
            </li>
            <li>
              <Link className="p-1 flex space-x-2 items-center" to={"/ourteam"}>
                <FaUsers></FaUsers>
                <span>Mentors and Team</span>
              </Link>
            </li>
            <li>
              <a
                className="p-1 flex space-x-2 items-center"
                href="#Gallery"
                onClick={scrollToGallery}
              >
                <FaImages></FaImages>
                <span>Gallery</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="column links">
          <h3>Official Emails</h3>
          <ul>
            <li>
              <a href="mailto:wce.sait@walchandsangli.ac.in">
                wce.sait@walchandsangli.ac.in
              </a>
            </li>
            <li>
              <a href="mailto:sait2001@gmail.com">sait2001@gmail.com</a>
            </li>
          </ul>

          <h3 className="mt-4">Location</h3>
          <div className="flex">
            <span>
              Walchand College Of Engineering, Vishrambag, Sangli, Maharashtra -
              416 415
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
