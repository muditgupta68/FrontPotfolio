import React from "react";
import "../styles/componentStyle.css";
import download from "../images/download_icon.png" 

const GrowButton = () => {
  return (
    <div>
      <div className="button-box">
        <button className="eight"><img className="mr-2 mb-1" src={download} alt="Download Icon" /> Download CV</button>
      </div>
    </div>
  );
};

export default GrowButton;
