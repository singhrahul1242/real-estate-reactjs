import React from "react";
import "./Hero.css";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* Left Section */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover <br />
              Most Suitable <br /> Property
            </h1>
          </div>
          <div className="flexColStart hero-des secondaryText">
            <span>
              Real estate is a form of real property. It differs from personal
              property,
            </span>
            <span> which is not permanently attached to the land.</span>
          </div>
          <div className="hero-search">
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={4500} end={5000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1435} end={1500} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={25} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./Images/hero-image.jpg" alt="" className="hero-imge" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
