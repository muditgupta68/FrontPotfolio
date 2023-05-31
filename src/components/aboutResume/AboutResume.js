import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import ResumeCard from "../ResumeCard";

const AboutResume = () => {
  return (
    <div className="aboutResume">
      <div className="heading">
        <h1>Resume</h1>
      </div>
      <div className="">
        <div className="grid-3 gap-1half mt-5">
          <div className="field_resume">
            <div className="d-flex align-items-center">
              <FontAwesomeIcon
                icon={faCoffee}
                size="lg"
                className="mr-3 mb-2"
              />
              <h3 className="">Education</h3>
            </div>

            <ResumeCard
              infoHead="2019-2023"
              data="B.tech Computer Science"
              infoFoot="Amity University Noida"
            />
            <ResumeCard
              infoHead="2019-2023"
              data="B.tech Computer Science"
              infoFoot="Amity University Noida"
            />
            <ResumeCard
              infoHead="2019-2023"
              data="B.tech Computer Science"
              infoFoot="Amity University Noida"
            />
          </div>
          <div className="field_resume">
            <div className="d-flex align-items-center">
              <FontAwesomeIcon
                icon={faCoffee}
                size="lg"
                className="mr-3 mb-2"
              />
              <h3 className="">Awards</h3>
            </div>
            <ResumeCard
              infoHead="2019-2023"
              data="B.tech Computer Science"
              infoFoot="Amity University Noida"
            />
            <ResumeCard
              infoHead="2019-2023"
              data="B.tech Computer Science"
              infoFoot="Amity University Noida"
            />
            <ResumeCard
              infoHead="2019-2023"
              data="B.tech Computer Science"
              infoFoot="Amity University Noida"
            />
          </div>
          <div className="field_resume">
            <div className="d-flex align-items-center">
              <FontAwesomeIcon
                icon={faCoffee}
                size="lg"
                className="mr-3 mb-2"
              />
              <h3 className="">Licenses</h3>
            </div>
            <ResumeCard
              infoHead="2019-2023"
              data="B.tech Computer Science"
              infoFoot="Amity University Noida"
            />
            <ResumeCard
              infoHead="2019-2023"
              data="B.tech Computer Science"
              infoFoot="Amity University Noida"
            />
            <ResumeCard
              infoHead="2019-2023"
              data="B.tech Computer Science"
              infoFoot="Amity University Noida"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutResume;
