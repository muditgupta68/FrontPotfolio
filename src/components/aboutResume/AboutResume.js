import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faGraduationCap, faAward } from "@fortawesome/free-solid-svg-icons";
import ResumeCard from "../ResumeCard";
import Unavailable from "../Unavailable";

const AboutResume = ({ cert, award, education, isError }) => {
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
                icon={faGraduationCap}
                size="lg"
                className="mr-3 mb-2"
              />
              <h3 className="">Education</h3>
            </div>

            {/* Education */}

            {education &&
              education?.map((i) => {
                return (
                  <ResumeCard
                    key={i?._id}
                    infoHead={i?.Completion}
                    data={i?.Subject}
                    infoFoot={i?.From}
                  />
                );
              })}
            {isError && (
              <>
                <Unavailable msg="Server Down!" />
              </>
            )}
          </div>
          <div className="field_resume">
            <div className="d-flex align-items-center">
              <FontAwesomeIcon
                icon={faAward}
                size="lg"
                className="mr-3 mb-2"
              />
              <h3 className="">Awards</h3>
            </div>
            {/* Award */}
            {award &&
              award?.map((i) => {
                return (
                  <ResumeCard
                    key={i?._id}
                    infoHead={i?.Completion}
                    data={i?.Subject}
                    infoFoot={i?.From}
                  />
                );
              })}
            {isError && (
              <>
                <Unavailable msg="Server Down!" />
              </>
            )}
          </div>
          <div className="field_resume">
            <div className="d-flex align-items-center">
              <FontAwesomeIcon
                icon={faCertificate}
                size="lg"
                className="mr-3 mb-2"
              />
              <h3 className="">Licenses</h3>
            </div>

            {/* Certification */}

            {cert &&
              cert?.map((i) => {
                return (
                  <ResumeCard
                    key={i?._id}
                    infoHead={i?.Completion}
                    data={i?.Subject}
                    infoFoot={i?.From}
                  />
                );
              })}
            {isError && (
              <>
                <Unavailable msg="Server Down!" />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutResume;
