import React from "react";

const VisitCard = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="business-card">
        <div className="content">
          <div className="top">
            <div className="name">Mudit Gupta</div>
            <div className="profession">Business & Data Analyst</div>
          </div>
          <div className="bottom">
            <div className="left">
              <div className="email">muditgupta68@gmail.com</div>
              <div className="phone">+91-9654238322</div>
            </div>
            {/* <div className="right">
              <div className="location">Banglore, IND</div>
            </div> */}
          </div>
        </div>
        <div className="background_card">
          <div className="slice"></div>
        </div>
      </div>
    </div>
  );
};

export default VisitCard;
