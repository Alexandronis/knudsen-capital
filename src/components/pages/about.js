import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import MetaTags from "react-meta-tags";

import OurMission from "../organisms/about/about-KCLLC-Section/ourMission";
import OurValues from "../organisms/about/about-KCLLC-Section/ourValues";
import OurPrinciples from "../organisms/about/about-KCLLC-Section/ourPrinciples";
import PdfCard from "../organisms/about/Pager-download-section/pagerCard";
import TeamProfile from "../organisms/about/our-team-Section/teamProfile";
import ScrollHandler from "../templates/scrollHandler";
import Footer from "../layout/footer";

function About(props) {
  const Location = useLocation();
  const AboutKCLLC = useRef();

  useEffect(() => {
    if (Location.pathname === "/about" && AboutKCLLC.current) {
      AboutKCLLC.current.scrollIntoView();
      window.scrollTo(0, window.scrollY - 100);
    }

    if (props.location.pathname === "/about") {
      document.body.classList.add("inner-header");
    }
    if (props.location.pathname === "/about/") {
      document.body.classList.add("inner-header");
    }
  }, [Location]);

  return (
    <>
      <ScrollHandler />
      <div
        className='about-wrapper'
        ref={(el) => {
          AboutKCLLC.current = el;
        }}>
        <MetaTags>
          <title>Learn about KC/LLC-Investors and KC/LLC team</title>
          <meta
            name='description'
            content='Team of investors in KC/LLC are Brent Knudsen, Webb Knudsen & Kathryn Knudsen'
          />
        </MetaTags>
        <link rel='canonical' href='https://kcinvestors.com/about'></link>
        <section id='#about-kcllc'>
          <div className='content-wrapper'>
            <div className='content-inner-box'>
              <div className='values-title'>
                <span></span>
                <h1 className='main-title'>About KC/LLC Investors</h1>
                <h2 className='about-us-text-mobile'>
                  We invest in early-stage, high-growth businesses that have the
                  potential to improve lives, and change their industries and
                  the world for the better.
                </h2>
              </div>
              <div className='company-values'>
                <h2 className='about-us-text'>
                  We invest in early-stage, high-growth businesses that have the
                  potential to improve lives, and change their industries and
                  the world for the better.
                </h2>
              </div>
            </div>
            <div className='values-cards'>
              <OurMission />
              <OurValues />
              <OurPrinciples />
            </div>
          </div>
        </section>
        <section id='#our-team'>
          <div className='content-wrapper ourTeam'>
            <div className='content-inner-box'>
              <div className='values-title'>
                <span></span>
                <h2 className='main-title'>Our Team</h2>
              </div>
            </div>
            <TeamProfile />
          </div>
          <div className='content-wrapper learn-more-about'>
            <div className='content-inner-box'>
              <div className='company-values'>
                <div className='sub-heaading'>
                  <span></span>
                  <h2>Know more about us</h2>
                </div>
              </div>
            </div>
            <div className='pdf-card-container'>
              <PdfCard
                link={"/KCLLC_3_Pager/KC-LLC-One-pager.pdf"}
                name={"KC/LLC One-pager"}
                alttext={"KC/LLC Icon"}
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
