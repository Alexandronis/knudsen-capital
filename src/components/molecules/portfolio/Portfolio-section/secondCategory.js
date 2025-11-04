import React, { useState } from "react";

import { useHistory } from "react-router-dom";

function SecondCategory() {
  const organization = require("../../../../data/organization.json");
  const [data, setData] = useState();
  const history = useHistory();
  return (
    <>
      <div className="Category-wrapper">
        <div className="Category-title">
          <div className="values-title">
            <div className="sub-heaading">
              <span></span>
              <h2>Category 04</h2>
            </div>
          </div>
        </div>

        <div className="card-investments">
          <div className="card-wrapper">
            {organization.Category04.map((data, index) => {
              return (
                <div
                  className="logo-box"
                  key={data.id}
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
                    <img className="image_containar" src={data.logoImage} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="Category-wrapper">
        <div className="Category-title">
          <div className="values-title">
            <div className="sub-heaading">
              <span></span>
              <h2>Category 05</h2>
            </div>
          </div>
        </div>

        <div className="card-investments">
          <div className="card-wrapper">
            {organization.Category05.map((data, index) => {
              return (
                <div
                  className="logo-box"
                  key={data.id}
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
                    <img className="image_containar" src={data.logoImage} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="Category-wrapper">
        <div className="Category-title">
          <div className="values-title">
            <div className="sub-heaading">
              <span></span>
              <h2>Category 06</h2>
            </div>
          </div>
        </div>

        <div className="card-investments">
          <div className="card-wrapper">
            {organization.Category06.map((data, index) => {
              return (
                <div
                  className="logo-box"
                  key={data.id}
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
                    <img className="image_containar" src={data.logoImage} />
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

export default SecondCategory;
