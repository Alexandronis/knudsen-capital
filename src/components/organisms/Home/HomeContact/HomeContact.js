import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../../../../assets/home-contact/home-contact.svg';
import mobileBackImage from '../../../../assets/home-contact/mobile-contact.svg';

function HomeContact() {
  return (
    <>
      <img className="contact-img" src={backgroundImage} alt="KCLLC Logo"></img>
      <img className="contact-img-mobile" src={mobileBackImage} alt="KCLLC Logo"></img>
      <div className="contact">
        <div className="content">
          <p>
            We&apos;d love to work with you! Please reach out if you&apos;re interested in an
            investment from us, investing with us or partnering in other ways.
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
