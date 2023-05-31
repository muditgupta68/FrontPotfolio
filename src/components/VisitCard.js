import React from "react";

const VisitCard = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div class="business-card">
        <div class="content">
          <div class="top">
            <div class="name">Mudit Gupta</div>
            <div class="profession">Business & Data Analyst</div>
          </div>
          <div class="bottom">
            <div class="left">
              <div class="email">muditgupta68@gmail.com</div>
              <div class="phone">+91-9654238322</div>
            </div>
            <div class="right">
              <div class="location">Banglore, IND</div>
            </div>
          </div>
        </div>
        <div class="background_card">
          <div class="slice"></div>
        </div>
      </div>
    </div>
  );
};

export default VisitCard;
