import React from 'react';
import valueBox from '../../../../assets/value-section/value-box.png';
import valueBoxCenter from '../../../../assets/value-section/value-box-center.png';

const Value = () => {
  return (
    <>
      <div className="value one"></div>
      <div className="value"></div>
      <div className="box-wrapper">
        <div className="value-box">
          <div className="glow"></div>
          <img src={valueBox} alt="KCLLC" loading="lazy" />
          <p className="num">35</p>
          <p className="text">Investments</p>
          <span className="horizontal-line"></span>
        </div>
        <div className="value-box center">
          <div className="glow"></div>
          <img src={valueBoxCenter} alt="KCLLC" loading="lazy" />
          <p className="num">$30M+</p>
          <p className="text">Invested</p>
          <span className="horizontal-line"></span>
        </div>
        <div className="value-box">
          <div className="glow"></div>
          <img src={valueBox} alt="KCLLC" loading="lazy" />
          <p className="num">45+</p>
          <p className="text">Years of Experience</p>
          <span className="horizontal-line"></span>
        </div>
      </div>
    </>
  );
};

export default Value;
