import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import InvCriteria from '../organisms/Portfolio/InvCriteriaSection/InvCriteria';
import CategoryWrapper from '../organisms/Portfolio/CategorySection/CategoryWrapper';
import Focus from '../organisms/Portfolio/FocusSection/Focus';
import Footer from '../layout/Footer';

const Portfolio = () => {
  const location = useLocation();
  const portfolioRef = useRef();

  useEffect(() => {
    if (location.pathname === '/Portfolio' || location.pathname === '/Portfolio/') {
      document.body.classList.add('inner-header');
    } else {
      document.body.classList.remove('inner-header');
    }

    if (location.pathname === '/Portfolio-page') {
      localStorage.setItem('activePage', 'Portfolio');
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === '/Portfolio' && portfolioRef.current) {
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
            <CategoryWrapper />
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
};

export default Portfolio;
