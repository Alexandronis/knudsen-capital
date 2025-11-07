import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import HomeBanner from "../organisms/home/homeBanner/homeBanner";
import Criteria from "../organisms/home/criteria-section/criteria";
import PortfolioCompany from "../organisms/home/portfolio_company/portfolioCompany";
import Value from "../organisms/home/value-section/value";
import OurTeam from "../organisms/home/ourTeam/ourTeam";
import HomeContact from "../organisms/home/home-contact/homeContact";
import Footer from "../layout/footer";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.classList.remove("inner-header");
    }
  }, [location.pathname]);

  return (
    <div>
      <Helmet>
        <title>
          KC/LLC investors - Investing in early-stage, high-growth businesses
        </title>
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
