import React from 'react';
import { ourValues } from '../../../../data/ourValues.js';

const OurValues = () => {
  return (
    <>
      <div className="sub-heaading">
        <span></span>
        <h2>Our Values</h2>
      </div>
      <div className="common_card">
        {ourValues.map((value, index) => (
          <div key={index} className="common_card_containar">
            <div className="image_containar">
              <img
                className="image_icon"
                src={value.src}
                alt={`Our Values illustration ${index + 1}`}
                loading="lazy"
              />
            </div>
            <div className="leftside_text about_leftside_text">
              <div className="card_list_items about-item">
                <div className="item">
                  <p>{value.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OurValues;
