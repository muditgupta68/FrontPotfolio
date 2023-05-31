import React from "react";
import "../styles/componentStyle.css";

const GreetCard = () => {
  return (
    <div className="greetCard">
      <div class="business2">
        <div class="front">
          <div class="red">
            <div class="head">
              {/* <div>
                <h2>Business Analyst</h2>
              </div> */}
            </div>
          </div>
          <div class="avatar">
            <div class="img">
              <img
                src="https://raw.githubusercontent.com/MohcineDev/Business-Card/main/imgs/man.png"
                alt=""
              />
            </div>
            <p>Mudit Gupta</p>
            <p>Analyst</p>
          </div>
          <div class="infos">
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
