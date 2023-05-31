import React from "react";
import "../styles/componentStyle.css";
import download from "../images/download_icon.png" 

const GrowButton = () => {
  return (
    <div>
      <div class="button-box">
        <button class="eight"><img className="mr-2 mb-1" src={download} alt="Download Icon" /> Download CV</button>
      </div>
    </div>
  );
};

export default GrowButton;
