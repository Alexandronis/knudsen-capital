import React from "react";

import ValueBOx from "../../../../assets/value_section/value_box.png";
import ValueBOxCenter from "../../../../assets/value_section/value_box_center.png";

function Value() {
  return (
    <>
      <div className='value one'></div>
      <div className='value'></div>
      <div className='box-wrapper'>
        <div className='value-box'>
          <div className='glow'></div>
          <img src={ValueBOx} alt='KCLLC' />
          <p className='num'>35</p>
          <p className='text'>Investments</p>
          <span className='horizontal-line'></span>
        </div>
        <div className='value-box center'>
          <div className='glow'></div>
          <img src={ValueBOxCenter} alt='KCLLC' />
          <p className='num'>$30M+</p>
          <p className='text'>Invested</p>
          <span className='horizontal-line'></span>
        </div>
        <div className='value-box'>
          <div className='glow'></div>
          <img src={ValueBOx} alt='KCLLC' />
          <p className='num'>45+</p>
          <p className='text'>Years of Experience</p>
          <span className='horizontal-line'></span>
        </div>
      </div>
    </>
  );
}

export default Value;
