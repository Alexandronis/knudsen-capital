import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import OurMission from '../organisms/About/AboutSection/OurMission';
import OurValues from '../organisms/About/AboutSection/OurValues';
import OurPrinciples from '../organisms/About/AboutSection/OurPrinciples';
import PdfCard from '../organisms/About/PagerDownloadSection/PageCard';
import TeamProfile from '../organisms/About/OurTeamSection/TeamProfile';
import ScrollHandler from '../templates/ScrollHandler';
import Footer from '../layout/Footer';

function About() {
  const location = useLocation();
  const aboutRef = useRef(null);

  // --- Add "inner-header" class on load ---
  useEffect(() => {
    if (location.pathname.startsWith('/About')) {
      document.body.classList.add('inner-header');
    }
    return () => {
      document.body.classList.remove('inner-header');
    };
  }, [location.pathname]);

  // --- Scroll into view if visiting /About ---
  useEffect(() => {
    if (location.pathname === '/About' && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
      window.scrollBy(0, -100);
    }
  }, [location.pathname]);

  return (
    <>
      <ScrollHandler />
      <div className="about-wrapper" ref={aboutRef}>
        <Helmet>
          <title>Learn about KC/LLC-Investors and KC/LLC team</title>
          <meta
            name="description"
            content="Team of investors in KC/LLC are Brent Knudsen, Webb Knudsen & Kathryn Knudsen"
          />
          <link rel="canonical" href="https://kcinvestors.com/about" />
        </Helmet>

        <section id="about-kcllc">
          <div className="content-wrapper">
            <div className="content-inner-box">
              <div className="values-title">
                <span></span>
                <h1 className="main-title">About KC/LLC Investors</h1>
                <h2 className="about-us-text-mobile">
                  We invest in early-stage, high-growth businesses that have the potential to
                  improve lives, and change their industries and the world for the better.
                </h2>
              </div>
              <div className="company-values">
                <h2 className="about-us-text">
                  We invest in early-stage, high-growth businesses that have the potential to
                  improve lives, and change their industries and the world for the better.
                </h2>
              </div>
            </div>
            <div className="values-cards">
              <OurMission />
              <OurValues />
              <OurPrinciples />
            </div>
          </div>
        </section>

        <section id="our-team">
          <div className="content-wrapper ourTeam">
            <div className="content-inner-box">
              <div className="values-title">
                <span></span>
                <h2 className="main-title">Our Team</h2>
              </div>
            </div>
            <TeamProfile />
          </div>

          <div className="content-wrapper learn-more-about">
            <div className="content-inner-box">
              <div className="company-values">
                <div className="sub-heaading">
                  <span></span>
                  <h2>Know more about us</h2>
                </div>
              </div>
            </div>
            <div className="pdf-card-container">
              <PdfCard
                link="/KCLLC_3_Pager/KC-LLC-One-pager.pdf"
                name="KC/LLC One-pager"
                alttext="KC/LLC Icon"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default About;
