import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/Logo/KCLLC_Navbar_Logo.svg';
import FbIcon from '../../assets/Footer/facebook_icon.svg';
import instagramIcon from '../../assets/Footer/instagram_icon.svg';
import TwitterIcon from '../../assets/Footer/twitter_icon.svg';
import linkedincon from '../../assets/Footer/linkedin_icon.svg';

function Footer() {
  // reset Dropdown created by sachith
  const resetDropdown = () => {
    localStorage.removeItem('portfolioOption');
  };
  // Auto update year in footer copyright section created by sachith
  const [date, setDate] = useState();
  const getYear = () => setDate(new Date().getFullYear());
  useEffect(() => {
    getYear();
  }, []);

  return (
    <div>
      <footer>
        <div className="footer-top">
          <img src={Logo} alt="KC/LLC Logo" />
          <div className="line"></div>
        </div>
        <div className="footer-center">
          <div className="address">
            <ul>
              <li>
                <i className="fa fa-map-marker"></i>
                <p>
                  PO Box 7,
                  <br></br>Los Gatos,
                  <br></br>CA 95031
                </p>
              </li>
              <li>
                <i className="fa fa-phone"></i>
                <p>408.483.5566</p>
              </li>
              <li>
                <i className="fa fa-envelope"></i>
                <p>
                  <a href="mailto:webb@kcinvestors.com">webb@kcinvestors.com</a>
                </p>
              </li>
            </ul>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a
                  href="/"
                  onClick={() => {
                    resetDropdown();
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => {
                    resetDropdown();
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  onClick={() => {
                    resetDropdown();
                  }}
                >
                  Investments
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => {
                    resetDropdown();
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="icon">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/KnudsenCapital/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="" src={FbIcon} alt="Facebook Icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/kc_investors/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="" src={instagramIcon} alt="Instagram Icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/KnudsenCapital"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="" src={TwitterIcon} alt="Twitter Icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/kcinvestors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="" src={linkedincon} alt="Linkedin Icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © {date} Knudsen Capital, LLC All Rights Reserved</p>
        </div>
      </footer>
      {/* mobile view */}
      <div className="footer_mobile">
        <div className="footer-wrapper">
          <div className="menu">
            <ul>
              <li>
                <a
                  href="/"
                  onClick={() => {
                    resetDropdown();
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => {
                    resetDropdown();
                  }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  onClick={() => {
                    resetDropdown();
                  }}
                >
                  Investments
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => {
                    resetDropdown();
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="line"></div>
        </div>

        <div className="footer-center">
          <div className="footer-top">
            <img src={Logo} alt="KC/LLC Logo" />
            <div className="line"></div>
          </div>

          <div className="address">
            <ul>
              <li>
                <i className="fa fa-map-marker"></i>
                <p>
                  PO Box 7,
                  <br></br>Los Gatos,
                  <br></br>CA 95031
                </p>
              </li>
              <li>
                <i className="fa fa-phone"></i>
                <p>408.483.5566</p>
              </li>
              <li>
                <i className="fa fa-envelope"></i>
                <p>
                  <a href="mailto:webb@kcinvestors.com">webb@kcinvestors.com</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="icon">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/KnudsenCapital/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="" src={FbIcon} alt="Facebook Icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/kc_investors/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="" src={instagramIcon} alt="Instagram Icon" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/KnudsenCapital"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="" src={TwitterIcon} alt="Twitter Icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/kcinvestors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="" src={linkedincon} alt="Linkedin Icon" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>Copyright © {date} Knudsen Capital, LLC All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
