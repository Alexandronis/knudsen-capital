import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import InvCriteria from '../organisms/portfolio/InvCriteria-section/InvCriteria';
import CategoryWapper from '../organisms/portfolio/Category-section/categoryWrapper';
import Focus from '../organisms/portfolio/Focus-section/focus';
import Footer from '../layout/footer';

function Portfolio() {
  const location = useLocation();
  const portfolioRef = useRef();

  useEffect(() => {
    if (location.pathname === '/portfolio' || location.pathname === '/portfolio/') {
      document.body.classList.add('inner-header');
    } else {
      document.body.classList.remove('inner-header');
    }

    if (location.pathname === '/portfolio-page') {
      localStorage.setItem('activePage', 'portfolio');
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === '/portfolio' && portfolioRef.current) {
      portfolioRef.current.scrollIntoView();
      window.scrollTo(0, window.scrollY - 100);
    }
  }, [location.pathname]);

  return (
    <>
      <div className="portfolio-page-wrapper" ref={portfolioRef}>
        <Helmet>
          <title>KC/LLC investment portfolio in early-stage high-growth businesses</title>
          <meta
            name="description"
            content="KC/LLC portfolio companies are: Lasso, Playper, Good money, Designer protein, Good money, Cerebelly, LB equity and XRP"
          />
        </Helmet>
        <link rel="canonical" href="https://kcinvestors.com/portfolio" />
        <section id="#portfolio-kcllc">
          <div className="content-wrapper">
            <div className="content-inner-box">
              <div className="values-title">
                <span></span>
                <h1 className="main-title">KC/LLC Portfolio Companies</h1>
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
