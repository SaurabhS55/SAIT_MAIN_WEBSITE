import React, {useRef } from "react";
import Aboutus from "./Components/Aboutus";
import ContactForm from "./Components/ContactForm";
import Home from "./Components/Home";
import Event from "./Components/Event";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Gallery from "./Components/ResponsiveGallery";
import TeacherMentor from "./Components/TeacherMentor";

const Main = () => {
  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const galleryRef = useRef(null);
  const eventRef = useRef(null);
  const mentorRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-hidden">
      <NavBar
        scrollToHome={() => scrollToRef(homeRef)}
        scrollToAboutUs={() => scrollToRef(aboutUsRef)}
        scrollToGallery={() => scrollToRef(galleryRef)}
        scrollToEvent={() => scrollToRef(eventRef)}
      />
      <Home ref={homeRef} />
      <Aboutus ref={aboutUsRef} />
      <Event ref={eventRef} />
      <Gallery ref={galleryRef}/>
      
      <TeacherMentor ref={mentorRef} />
      <ContactForm />
      <Footer
        scrollToHome={() => scrollToRef(homeRef)}
        scrollToAboutUs={() => scrollToRef(aboutUsRef)}
        scrollToGallery={() => scrollToRef(galleryRef)}
        scrollToMentor={() => scrollToRef(mentorRef)}
        scrollToEvent={() => scrollToRef(eventRef)}
      />
    </div>
  );
};

export default Main;
