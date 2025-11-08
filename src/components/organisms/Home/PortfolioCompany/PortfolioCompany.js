import React, { useState } from 'react';
import PortfolioItem from '../../../molecules/Home/PortfolioCompany/PortfolioItem';

function PortfolioCompany() {
  const companyData = require('../../../../data/companiesData.json');
  const [cardselect] = useState(0);
  const [tooltipShow] = useState(0);

  return (
    <div className="portfolio">
      <div className="section-title">
        <h2>Portfolio Companies</h2>
        <span className="horizontal-line"></span>
      </div>
      <div className="prtfolio-card">
        <div className="prtfolio-container">
          {companyData
            .sort((a, b) => (a.companyName > b.companyName ? 1 : -1))
            .map((company, index) => (
              <div className="card" key={index + 1}>
                <PortfolioItem
                  companyName={company.companyName}
                  url={company.url}
                  logoImage={company.logoImage}
                  description={company.description}
                  alt={company.alt}
                  id={company.id}
                  cardselected={cardselect}
                  tooltipShow={tooltipShow}
                  type={company.type}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioCompany;
