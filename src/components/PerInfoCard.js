import React from "react";
import "../styles/componentStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PerInfoCard = ({ icon, infoHead, data,color }) => {
  return (
    <div className="d-flex align-items-center mt-2 border_data shadow-up">
      <FontAwesomeIcon icon={icon} className={`mr-4 bg_icon ${color} shadow-up`} />
      <div className="data">
        <p className="infoHead mt-2">{infoHead}</p>
        <p className="data_val">{data}</p>
      </div>
    </div>
  );
};

export default PerInfoCard;
