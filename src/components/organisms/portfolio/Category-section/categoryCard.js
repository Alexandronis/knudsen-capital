import React from "react";

import LogoImg from "../../../../assets/Portfolio-page/LOGO.png";

const CategoryCard = ({ logoImage }) => {
  return (
    <>
      <div className="card-investments">
        <div className="card-wrapper">
          <div className="logo-box">
            <div className="logo-img-box">
              <img className="image_containar" src={logoImage} />
            </div>
          </div>
          <div className="logo-box">
            <div className="logo-img-box">
              <img className="image_containar" src={logoImage} />
            </div>
          </div>
          <div className="logo-box">
            <div className="logo-img-box">
              <img className="image_containar" src={logoImage} />
            </div>
          </div>
          <div className="logo-box">
            <div className="logo-img-box">
              <img className="image_containar" src={logoImage} />
            </div>
          </div>
          <div className="logo-box">
            <div className="logo-img-box">
              <img className="image_containar" src={logoImage} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
