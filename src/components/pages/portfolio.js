import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import MetaTags from "react-meta-tags";

import InvCriteria from "../organisms/portfolio/InvCriteria-section/InvCriteria";
import CategoryWapper from "../organisms/portfolio/Category-section/categoryWrapper";
import Focus from "../organisms/portfolio/Focus-section/focus";
import Footer from "../layout/footer";

function Portfolio(props) {
  const Location = useLocation();
  const Portfolio = useRef();

  useEffect(() => {
    if (props.location.pathname === "/portfolio") {
      document.body.classList.add("inner-header");
    }
    if (props.location.pathname === "/portfolio/") {
      document.body.classList.add("inner-header");
    }
    if (Location.pathname === "/portfolio-page") {
      localStorage.setItem("activePage", "portfolio");
    }
  });

  useEffect(() => {
    if (Location.pathname === "/portfolio" && Portfolio.current) {
      Portfolio.current.scrollIntoView();
      window.scrollTo(0, window.scrollY - 100);
    }
  }, [Location]);

  return (
    <>
      <div
        className='portfolio-page-wrapper'
        ref={(el) => {
          Portfolio.current = el;
        }}>
        <MetaTags>
          <title>
            KC/LLC investment portfolio in early-stage high-growth businesses
          </title>
          <meta
            name='description'
            content='KC/LLC portfolio companies are: Lasso, Playper, Good money, Designer protein, Good money, Cerebelly, LB equity and XRP'
          />
        </MetaTags>
        <link rel='canonical' href='https://kcinvestors.com/portfolio'></link>
        <section id='#portfolio-kcllc'>
          <div className='content-wrapper'>
            <div className='content-inner-box'>
              <div className='values-title'>
                <span></span>
                <h1 className='main-title'>KC/LLC Portfolio Companies</h1>
              </div>
            </div>
            <CategoryWapper />
          </div>
        </section>
        <section>
          <Focus />
        </section>
        <section>
          <InvCriteria />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Portfolio;
