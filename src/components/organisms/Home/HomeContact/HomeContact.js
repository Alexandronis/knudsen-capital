import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../../../../assets/home-contact/home-contact.svg';
import mobileBackImage from '../../../../assets/home-contact/mobile-contact.svg';

const HomeContact = () => {
  return (
    <div className="home-contact-wrapper">
      <img
        className="contact-img"
        src={backgroundImage}
        alt="KCLLC Logo"
        loading="lazy"
      />
      <img
        className="contact-img-mobile"
        src={mobileBackImage}
        alt="KCLLC Logo"
        loading="lazy"
      />
      <div className="contact">
        <div className="content">
          <p>
            We&apos;d love to work with you! Please reach out if you&apos;re interested in an
            investment from us, investing with us, or partnering in other ways
          </p>
          <Link to="/contact">
            <button>Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
