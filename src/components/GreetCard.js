import React from "react";
import "../styles/componentStyle.css";

const GreetCard = () => {
  return (
    <div className="greetCard">
      <div className="business2">
        <div className="front">
          <div className="red">
            <div className="head">
              {/* <div>
                <h2>Business Analyst</h2>
              </div> */}
            </div>
          </div>
          <div className="avatar">
            <div className="img">
              <img
                src="https://raw.githubusercontent.com/MohcineDev/Business-Card/main/imgs/man.png"
                alt=""
              />
            </div>
            <p>Mudit Gupta</p>
            <p>Analyst</p>
          </div>
          <div className="infos">
            <div>
              <div>
                <p className="text-center">+01234567890123</p>
                <p>+01234567890123</p>
              </div>
            </div>
            <div>
              <div>
                <p>www.YOURDOMAIN.com</p>
                <p>www.YOURDOMAIN.com</p>
              </div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreetCard;
