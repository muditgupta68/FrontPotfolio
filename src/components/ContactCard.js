import React from "react";

const ContactCard = ({ icon, head, data }) => {
  return (
    <div className="contactCard d-flex p-4">
      <img className="contactIcon" src={icon} alt="phone icon" />
      <div className="details">
        <p className="contactHead">{head}</p>
        <a className="contactData" href={`tel:${data}`}>
          {data}
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
