import React from "react";
import { useNavigate } from "react-router-dom";

function SecondCategory() {
  const organization = require("../../../../data/organization.json");
  const navigate = useNavigate();

  const handleClick = (data) => {
    navigate("/client-page", { state: { data } });
  };

  return (
    <>
      {[4, 5, 6].map((num) => (
        <div className="Category-wrapper" key={num}>
          <div className="Category-title">
            <div className="values-title">
              <div className="sub-heaading">
                <span></span>
                <h2>{`Category 0${num}`}</h2>
              </div>
            </div>
          </div>

          <div className="card-investments">
            <div className="card-wrapper">
              {organization[`Category0${num}`].map((data) => (
                <div
                  className="logo-box"
                  key={data.id}
                  onClick={() => handleClick(data)}
                >
                  <div className="logo-img-box">
                    <img
                      className="image_containar"
                      src={data.logoImage}
                      alt={data.id}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default SecondCategory;
