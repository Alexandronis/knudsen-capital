import React from 'react';
import MenuCat from '../../../molecules/Portfolio/FocusSection/MenuCat';
import MenuCatMobile from '../../../molecules/Portfolio/FocusSection/MenuCatMobile';

const Focus = () => {
  return (
    <div className="content-wrapper Investment">
      <div className="Investment-container">
        <div className="content-inner-box">
          <div className="values-title">
            <span></span>
            <h2 className="main-title">Focus</h2>
          </div>
        </div>
        <div className="focus-sec-wrapper">
          <MenuCat />
        </div>
        <div className="focus-sec-wrapper-mobile">
          <MenuCatMobile />
        </div>
      </div>
    </div>
  );
};

export default Focus;
