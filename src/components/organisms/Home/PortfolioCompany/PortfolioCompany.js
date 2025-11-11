import React from 'react';
import PortfolioItem from '../../../molecules/Home/PortfolioCompany/PortfolioItem';
import companyData from '../../../../data/companiesData.json';

const PortfolioCompany = () => {
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
            .map((company) => (
              <div className="card" key={company.id}>
                <PortfolioItem
                  companyName={company.companyName}
                  url={company.url}
                  logoImage={company.logoImage}
                  description={company.description}
                  alt={company.alt}
                  id={company.id}
                  type={company.type}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCompany;
