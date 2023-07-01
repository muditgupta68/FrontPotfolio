import { React, useState, useEffect } from "react";
import "../styles/componentStyle.css";
import download from "../images/download_icon.png" 
import axios from "axios";


const GrowButton = () => {
  const [resume, setResume] = useState({});

  const fetchResumeApi = async () => {
    try {
      const apiCall = await axios.get(
        `https://odd-bass-yoke.cyclic.app/api/v1/about`
      );
      const data = apiCall?.data;

      let resume = data.filter((ed) => {
        return ed.tag === "Resume";
      });

      resume = resume[0]

      setResume(resume);

    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetchResumeApi();
  }, [])
  
  return (
    <div>
      <div className="button-box">
        <a href={resume?.From} target="_blank" rel="noopener noreferrer">
        <button className="eight"><img className="mr-2 mb-1" src={download} alt="Download Icon" /> Download CV</button>
        </a>
        
      </div>
    </div>
  );
};

export default GrowButton;
