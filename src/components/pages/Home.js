import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import HomeBanner from '../organisms/Home/HomeBanner/HomeBanner';
import Criteria from '../organisms/Home/CriteriaSection/Criteria';
import PortfolioCompany from '../organisms/Home/PortfolioCompany/PortfolioCompany';
import Value from '../organisms/Home/ValueSection/Value';
import OurTeam from '../organisms/Home/OurTeam/OurTeam';
import HomeContact from '../organisms/Home/HomeContact/HomeContact';
import Footer from '../layout/Footer';

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      document.body.classList.remove('inner-header');
    }
  }, [location.pathname]);

  return (
    <div>
      <Helmet>
        <title>KC/LLC investors - Investing in early-stage, high-growth businesses</title>
        <meta
          name="description"
          content="KC/LLC is a family office for early stage investments for your high growth business"
        />
      </Helmet>
      <link rel="canonical" href="https://kcinvestors.com/" />
      <div className="home-main-wrapper">
        <HomeBanner />
      </div>
      <div className="our-criteria-wrapper">
        <Criteria />
      </div>
      <div className="portfolio-wrapper">
        <PortfolioCompany />
      </div>
      <div className="value-box-wrapper">
        <Value />
      </div>
      <div className="our-team-wrapper">
        <OurTeam />
      </div>
      <div className="home-contact-wrapper">
        <HomeContact />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
