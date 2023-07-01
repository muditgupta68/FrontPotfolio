import { React, useState, useEffect } from "react";
import profileImg from "../images/about_profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from 'react-helmet';
import {
  faCalendarDays,
  faMobileScreenButton,
  faMapLocationDot,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import PerInfoCard from "../components/PerInfoCard";
import AboutResume from "../components/aboutResume/AboutResume";
import axios from "axios";
import Loading from "./Loading";
import BadgeCrousel from "../components/BadgeCrousel";
import { Divider } from "antd";

const About = () => {
  const [showResume, setResume] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [currentCount, setCount] = useState(2);

  const timer = () => setCount(currentCount - 1);

  useEffect(() => {
    if (currentCount < 0) {
      setIsLoading(false);
      return;
    }
    const id = setInterval(timer, 1000);
    return () => clearInterval(id);
  }, [currentCount]);

  const [isError, setError] = useState(false);
  const [education, setEducation] = useState([]);
  const [award, setAward] = useState([]);
  const [cert, setCert] = useState([]);
  const [badge, setBadge] = useState([]);

  const fetchResumeApi = async () => {
    try {
      const apiCall = await axios.get(
        `https://odd-bass-yoke.cyclic.app/api/v1/about`
      );
      const data = apiCall?.data;

      const education = data.filter((ed) => {
        return ed.tag === "Education";
      });

      setEducation(education);

      const award = data.filter((ed) => {
        return ed.tag === "Award";
      });
      setAward(award);

      const cert = data.filter((ed) => {
        return ed.tag === "Certification";
      });
      setCert(cert);

      const badge = data.filter((ed) => {
        return ed.tag === "Badge";
      });
      setBadge(badge);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchResumeApi();
  }, []);

  const handleResumeVisibility = () => {
    setResume(!showResume);
  };

  return (
    <div className="basicTemplate">
      <Helmet>
        <title>About ME</title>
      </Helmet>
      <div className="templateBox">
        <div className="heading">
          <h1>about me</h1>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="grid">
            <div className="img_profile">
              <img
                className="imageProfile shadow-up"
                src={profileImg}
                alt="Profile"
                loading="lazy"
              />
            </div>
            <div className="contentBox">
              <h3 className="main">Who am i?</h3>
              <div className="description">
                <p className="para">
                  I am a highly skilled Data Analyst and Business Analyst with a
                  passion for extracting meaningful insights from complex data
                  sets to drive strategic decision-making. With a strong
                  background in data analysis, statistics, and business acumen,
                  I excel at transforming raw data into actionable intelligence
                  that guides business growth.
                  <br></br>
                  <br></br>
                  Let's connect to discuss how my analytical expertise can
                  contribute to your organization's success and help drive
                  data-driven decision-making.
                  <br></br>
                  <br></br>
                </p>
              </div>
              <h3>Personal Info</h3>
              <div className="p_info">
                <PerInfoCard
                  color="red"
                  icon={faMobileScreenButton}
                  infoHead={"Phone"}
                  data="+91-9654238322"
                />
                <PerInfoCard
                  color="pink"
                  icon={faMapLocationDot}
                  infoHead={"Location"}
                  data="India"
                />
                <PerInfoCard
                  color="blue"
                  icon={faEnvelopeOpenText}
                  infoHead={"Email"}
                  data="muditgupta68@gmail.com"
                />
                <PerInfoCard
                  color="purple"
                  icon={faCalendarDays}
                  infoHead={"Birthday"}
                  data="Oct 06,2000"
                />
              </div>
            </div>
          </div>
        )}

        {!isLoading && (
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
        )}

        <div className={`resumeSection ${showResume && "activeDiv"}`}>
          <AboutResume
            education={education}
            award={award}
            cert={cert}
            isError={isError}
          />
          {/* Skills Section */}
          <div className="mt-5">
            <Divider className="divider" style={{ color: "white" }}>
              Badges
            </Divider>
            <div className="mt-5">
              <BadgeCrousel badge={badge} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
