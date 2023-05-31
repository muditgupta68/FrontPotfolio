import React from "react";
import VisitCard from "../components/VisitCard";
import GreetCard from "./../components/GreetCard";
import GrowButton from "./../components/GrowButton";

const Home = () => {
  return (
    <div className="basicTemplate">
      <div className="d-flex justify-content-around align-content-center greetBox">
        <GreetCard />
        <VisitCard />
      </div>
      <GrowButton />
    </div>
  );
};

export default Home;
