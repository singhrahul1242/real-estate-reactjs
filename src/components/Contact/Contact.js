import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import {BsFillChatDotsFill} from 'react-icons/bs';
 
const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy To Contact Us</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you. We
            beleive a good blace to live can make your life better
          </span>

          <div className="flexColStart contactModes">
            {/* first Row */}
            <div className="flexStart row">
              {/* first mode */}
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <MdCall size={25}/>
                        </div>
                        <div className="flexColStart details">
                          <span className="primaryText">Call</span>
                          <span>023 123 123 12</span>
                        </div>
                    </div>
                    <div className="flexCenter button">Call Now</div>
                </div>

                {/* second mode */}
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <BsFillChatDotsFill size={25}/>
                        </div>
                        <div className="flexColStart details">
                          <span className="primaryText">Chat</span>
                          <span>023 123 123 12</span>
                        </div>
                    </div>
                    <div className="flexCenter button">Chat Now</div>
                </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              {/* third mode */}
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <BsFillChatDotsFill size={25}/>
                        </div>
                        <div className="flexColStart details">
                          <span className="primaryText">VIdeo Call</span>
                          <span>023 123 123 12</span>
                        </div>
                    </div>
                    <div className="flexCenter button">Video Call Now</div>
                </div>

                {/* fourth mode */}
                <div className="flexColCenter mode">
                    <div className="flexStart">
                        <div className="flexCenter icon">
                            <BsFillChatDotsFill size={25}/>
                        </div>
                        <div className="flexColStart details">
                          <span className="primaryText">Message</span>
                          <span>023 123 123 12</span>
                        </div>
                    </div>
                    <div className="flexCenter button">Message Now</div>
                </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./Images/hero-image.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
