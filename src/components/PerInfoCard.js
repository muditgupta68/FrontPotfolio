import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PerInfoCard = ({ icon, infoHead, data }) => {
  return (
    <div className="d-flex align-items-center mt-2 border_data shadow-up">
      <FontAwesomeIcon icon={icon} className="mr-4 bg_icon red shadow-up" />
      <div className="data">
        <p className="infoHead mt-2">{infoHead}</p>
        <p className="data_val">{data}</p>
      </div>
    </div>
  );
};

export default PerInfoCard;