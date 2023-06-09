import React from "react";
import "../styles/componentStyle.css";
import dp from "../images/dp.jpeg";
import { Button } from "antd";
import { LinkedinOutlined } from '@ant-design/icons';

const GreetCard = () => {
  return (
    <div className="greetCard shadow">
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
              <img src={dp} alt="display picture" />
            </div>
            <p className="mt-2">Mudit Gupta</p>
            <p>Analyst</p>
          </div>
          <div className="infos">
            <div>
              <div className="d-flex justify-content-end mr-4">
                <a href="https://www.linkedin.com/in/mudit-gupta-303994192/" target="_blank">
              <Button className="socialBtn" shape="round" icon={<LinkedinOutlined />} size='lg' />
              </a>
              </div>
            </div>
            <div>
              
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
