import React from "react";

const ContactCard = ({ icon, head, data, type }) => {
  return (
    <div className="contactCard d-flex p-4 mb-5">
      <img className="contactIcon" src={icon} alt="phone icon" />
      <div className="details">
        <p className="contactHead">{head}</p>
        {type && (
          <a className="contactData" href={`${type}:${data}`}>
            {data}
          </a>
        )}
        {!type && (
          <p className="contactData">
            {data}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
