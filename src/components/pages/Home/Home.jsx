import React, { useState } from "react";
import "./Home.css";
import Ourvision from "../../OurVision/Ourvision";
import OurMission from "../../OurMission/OurMission";
import HowWorks from "../../HowWorks/HowWorks";
import WhyChooseUs from "../../WhyChooseUs/WhyChooseUs";
import Footer from "../../Footer/Footer";

const Home = () => {
  const [change, setChange] = useState(false);

  const onMouseEnter = () => {
    setChange(!change);
  };

  return (
    <div className="star">
      <div className="main-container">
        <div className="part1">
          <h1>BioBhumi Green Solutions</h1>
          <p>
            The most significant advantage of having a landscape is the
            preservation of nature. Urban architecture is full of wooden decking
            and concrete flooring. People have started acknowledging the
            importance of plants and trees in their lives. BIOMBHUMI offers
            solutions to various environmental issues, and protects natural
            resources and ecology
          </p>
          <div className="part1-btns-container">
            <button
              onMouseEnter={onMouseEnter}
              className={change ? "part1-btn1-change" : "part1-btn1"}
            >
              Read More
            </button>
            <button
              onMouseEnter={onMouseEnter}
              className={change ? "part1-btn1" : "part1-btn1-change"}
            >
              Our Services
            </button>
          </div>
        </div>

        <div className="part2">
          <img
            src="https://i.pinimg.com/736x/f9/b9/d7/f9b9d70572daf163da8392477bfb0a85.jpg"
            alt=""
            className="part2-img1"
          />
          <img
            src="https://i.pinimg.com/736x/d9/1c/cb/d91ccb554bece7da59b68899e490b22a.jpg"
            alt=""
            className="part2-img2"
          />
          <img
            src="https://i.pinimg.com/564x/a0/a1/44/a0a1444b3a4444ba329d35e2bc429517.jpg"
            alt=""
            className="part2-img3"
          />
        </div>
      </div>
      <Ourvision />
      <OurMission />
      <HowWorks />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Home;
