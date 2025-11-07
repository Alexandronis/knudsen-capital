import React from "react";

import { useHistory } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function FirstCategory() {
  const organization = require("../../../../data/unrealizedInvestment.json");
  const history = useHistory();
  return (
    <>
      <div className="Category-wrapper">
        <div className="Category-title">
          <div className="values-title">
          <div className="sub-heaading">
        <span></span>
        <h2>Unrealized Investment</h2>
      </div>
          </div>
        </div>

        <div className="card-investments">
          <div className="card-wrapper">
            {organization.sort((a,b)=> a.companyName > b.companyName ? 1 : -1).map((data, index) => {
              return (
                <div
                  className="logo-box"
                  key={index}
                  onClick={() => {
                    history.push({
                      pathname: "/client-page",
                      state: {
                        data: data,
                      },
                    });
                  }}
                >
                  <div className="logo-img-box">
                    <LazyLoadImage
                      effect="blur"
                      className="image_containar"
                      src={data.logoImage}
                      alt={data.alt}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstCategory;
