import { React, useState } from "react";
import profileImg from "../images/about_profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import PerInfoCard from "../components/PerInfoCard";
import AboutResume from "../components/aboutResume/AboutResume";

const About = () => {
  const [showResume, setResume] = useState(false);

  const handleResumeVisibility = () => {
    setResume(!showResume);
  };

  return (
    <div className="basicTemplate">
      <div className="templateBox">
        <div className="heading">
          <h1>about me</h1>
        </div>
        <div className="grid">
          <div className="img_profile">
            <img
              className="imageProfile shadow-up"
              src={profileImg}
              alt="Profile"
            />
          </div>
          <div className="contentBox">
            <h3 className="main">Who am i?</h3>
            <div className="description">
              <p className="para">
                I'm Creative Director and UI/UX Designer from Sydney, Australia,
                working in web development and print media. I enjoy turning
                complex problems into simple, beautiful and intuitive designs.
                <br></br>
                <br></br>
                My aim is to bring across your message and identity in the most
                creative way. I created web design for many famous brand
                companies.
                <br></br>
                <br></br>
              </p>
            </div>
            <h3>Personal Info</h3>
            <div className="p_info">
              <PerInfoCard
                icon={faCoffee}
                infoHead={"Phone"}
                data="+91-9654238322"
              />
              <PerInfoCard
                icon={faCoffee}
                infoHead={"Phone"}
                data="+91-9654238322"
              />
              <PerInfoCard
                icon={faCoffee}
                infoHead={"Phone"}
                data="+91-9654238322"
              />
              <PerInfoCard
                icon={faCoffee}
                infoHead={"Phone"}
                data="+91-9654238322"
              />
            </div>
          </div>
        </div>
        <div className="scroller">
          {showResume ? (
            <FontAwesomeIcon
              icon={faChevronUp}
              fade
              size="xl"
              className="mt-5 m-auto d-block pointer"
              onClick={handleResumeVisibility}
            />
          ) : (
            <FontAwesomeIcon
              icon={faChevronDown}
              bounce
              size="xl"
              className="mt-5 m-auto d-block pointer"
              onClick={handleResumeVisibility}
            />
          )}
        </div>

        <div className={`resumeSection ${showResume && "activeDiv"}`}>
          <AboutResume />
        </div>
      </div>
    </div>
  );
};

export default About;
