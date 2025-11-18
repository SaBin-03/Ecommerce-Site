import React from "react";
import Marquee from "../constants/Marquee";
import Herosection from "../section/Herosection";
import NewArrivalsSection from "../section/NewArrivalsSection";
import TopMensAndKids from "../section/TopMensAndKids";

const Home = () => {
  return (
    <div>
      <Herosection />
      <div id="marqueeBox" className="h-[9vh] lg:h-[11vh] w-full bg-black relative flex justify-center items-center">
        <Marquee />
      </div>
      <NewArrivalsSection />
      <TopMensAndKids />
    </div>
  );
};

export default Home;
