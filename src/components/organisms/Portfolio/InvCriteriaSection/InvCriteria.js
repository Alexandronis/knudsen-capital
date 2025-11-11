import React from 'react';
import greenIcon from '../../../../assets/portfolio-page/green-icon.svg';
import criteriaList from '../../../../data/invCriteria.json';

const InvCriteria = () => {
  return (
    <div className="content-wrapper Criteria">
      <div className="content-inner-box">
        <div className="values-title">
          <span></span>
          <h2 className="main-title">Investment Criteria</h2>
        </div>
        <div className="values-cards">
          {criteriaList.map((text, index) => (
            <div className="common_card" key={index}>
              <div className="common_card_containar">
                <div className="leftside_text about_leftside_text">
                  <div className="card_list_items about-item">
                    <img className="image_icon" src={greenIcon} alt="KC/LLC Green Icon" />
                    <p>{text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvCriteria;
