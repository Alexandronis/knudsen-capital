import React from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "../../../../assets/Home-contact/Home-Contact-KCLLC.svg";
import MobileBackImg from "../../../../assets/Home-contact/Mobile-Contact-KCLLC.svg";

function HomeContact() {
  return (
    <>
      <img className="contact-img" src={BackgroundImage} alt="KCLLC Logo"></img>
      <img
        className="contact-img-mobile"
        src={MobileBackImg}
        alt="KCLLC Logo"
      ></img>
      <div className="contact">
        <div className="content">
          <p>
            We'd love to work with you! Please reach out if you're interested in
            an investment from us, investing with us or partnering in other
            ways.
          </p>
          <Link to="/contact">
            <button>Contact Us</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomeContact;
