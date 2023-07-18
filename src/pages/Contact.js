import React, { useEffect, useState } from "react";
import phone from "../images/phone.png";
import map from "../images/map.png";
import email from "../images/email.png";
import ContactCard from "./../components/ContactCard";
import ContactForm from "../components/ContactForm";
import Loading from "./Loading";
import { Helmet } from 'react-helmet';
import ScrollToTop from './../components/ScrollToTop';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentCount, setCount] = useState(2);

  const timer = () => setCount(currentCount - 1);

  const cardDetail = [
    {
      icon: phone,
      head: "Phone :",
      data: "+91-9654238322",
      type: "tel",
    },
    {
      icon: email,
      head: "Email :",
      data: "muditgupta68@gmail.com",
      type: "mailto",
    },
    {
      icon: map,
      head: "Map :",
      data: "India",
      type: false,
    },
  ];

  useEffect(() => {
    if (currentCount < 0) {
      setIsLoading(false);
      return;
    }
    const id = setInterval(timer, 1000);
    return () => clearInterval(id);
  }, [currentCount]);

  return (
    <>
      <div className="basicTemplate">
      <Helmet>
        <title>Contact ME</title>
      </Helmet>
        <div className="templateBox">
          <div className="heading">
            <h1>Contact</h1>
          </div>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="d-flex marginT_5 contactContainer">
              <div className="leftPanel">
                {cardDetail?.map((data) => {
                  console.log(data);
                  return (
                    <ContactCard
                      icon={data.icon}
                      head={data.head}
                      data={data.data}
                      type={data.type}
                    />
                  );
                })}
              </div>
              <div className="rightPanel">
                <ContactForm />
              </div>
            </div>
          )}
        </div>
        <ScrollToTop />
      </div>
    </>
  );
};

export default Contact;
