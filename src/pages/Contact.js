import React from "react";
import phone from "../images/phone.png";
import ContactCard from './../components/ContactCard';
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="basicTemplate">
      <div className="templateBox">
        <div className="heading">
          <h1>Contact</h1>
        </div>
        <div className="d-flex marginT_5 contactContainer">
          <div className="leftPanel">
            <ContactCard  icon={phone} head="Phone :" data="+91-9654238322" />
          </div>
          <div className="rightPanel">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
