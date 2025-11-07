import React from "react";
import InvCard from "../../../molecules/portfolio/InvestmentCategories-section/invCard";

function InvCategories() {
  const invCategories = require("../../../../data/InvCategories.json");
  return (
    <div className="content-wrapper Investment">
      <div className="Investment-container">
        <div className="content-inner-box">
          <div className="values-title">
            <span></span>
            <h2 className="main-title">Investment Categories</h2>
          </div>
        </div>
        <div className="inv-card-wrapper">
          {invCategories.map((inv, index) => {
            return (
              <>
                <InvCard
                  key={index}
                  id={inv.id}
                  title={inv.title}
                  description={inv.description}
                  imgSrc={inv.imgSrc}
                  logos={inv.logos}
                  features={inv.features}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default InvCategories;
