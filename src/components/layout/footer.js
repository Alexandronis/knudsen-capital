import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logoIcon from '../../assets/logo/navbar-logo.svg';
import fbIcon from '../../assets/footer/facebook-icon.svg';
import instagramIcon from '../../assets/footer/instagram-icon.svg';
import twitterIcon from '../../assets/footer/twitter-icon.svg';
import linkedinIcon from '../../assets/footer/linkedin-icon.svg';

function Footer() {
  const resetDropdown = () => {
    localStorage.removeItem('portfolioOption');
  };
  const [date, setDate] = useState();
  const getYear = () => setDate(new Date().getFullYear());
  useEffect(() => {
    getYear();
  }, []);

  return (
    <div>
      <footer>
        <div className="footer-top">
          <img src={logoIcon} alt="KC/LLC Logo" />
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
                  <img className="" src={fbIcon} alt="Facebook Icon" />
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
                  <img className="" src={twitterIcon} alt="Twitter Icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/kcinvestors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="" src={linkedinIcon} alt="Linkedin Icon" />
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
            <img src={logoIcon} alt="KC/LLC Logo" />
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
                <img className="" src={fbIcon} alt="Facebook Icon" />
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
                <img className="" src={twitterIcon} alt="Twitter Icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/kcinvestors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="" src={linkedinIcon} alt="Linkedin Icon" />
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
