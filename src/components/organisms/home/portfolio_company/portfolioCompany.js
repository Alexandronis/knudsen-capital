import React, { useState } from "react";

import PortfolioItem from "../../../molecules/home/portfolio_company/portfolioItem";

function PortfolioCompany() {
  const companyData = require("../../../../data/companiesData.json");
  const [cardselect, setcardselect] = useState(0);
  const [tooltipShow, settooltipShow] = useState(0);

  return (
    <div className="portfolio">
      <div className="section-title">
        <h2>Portfolio Companies</h2>
        <span className="horizontal-line"></span>
      </div>
      {/* <div className="section-title">
        <h2>KC/LLC Portfolio</h2>
      </div> */}
      <div className="prtfolio-card">
        <div className="prtfolio-container">
          {companyData.sort((a,b)=> a.companyName > b.companyName ? 1 : -1).map((company, index) => {
            return (
              <div
                className="card"
                key={index + 1}
                // onClick={() => {
                //   cardselect === company.id + 1
                //     ? setcardselect(0)
                //     : setcardselect(company.id + 1);
                // }}
                // onMouseEnter={() => {settooltipShow(company.id + 1) ; setcardselect(company.id + 1);}}
                // onMouseLeave={() => {settooltipShow(0) ; setcardselect(0);}}
              >
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
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PortfolioCompany;
