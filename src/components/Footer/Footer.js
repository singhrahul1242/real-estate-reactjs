import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
          <img src="./Images/logoHouse.png" alt="" width={80} />
          <span className="secondarText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>
        <div className="felxColStart f-right">
          <span className="primaryText">Information</span>
          <span>145 New Mumbai, India</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
