import React from 'react';
import ourPrinciples1 from '../../../../assets/about-page/our-principles-1.svg';
import ourPrinciples2 from '../../../../assets/about-page/our-principles-2.svg';

const OurPrinciples = () => {
  return (
    <>
      <div className="sub-heaading">
        <span></span>
        <h2>Our Principles</h2>
      </div>

      <div className="common_card">
        <div className="common_card_containar">
          <div className="image_containar">
            <img
              className="image_icon lazy"
              src={ourPrinciples1}
              alt="KC/LLC Principle: Profit and Purpose"
              loading="lazy"
            />
          </div>
          <div className="leftside_text about_leftside_text">
            <div className="card_list_items about-item">
              <div className="item">
                <p>
                  We believe <b>profit</b> and <b>purpose</b> are equally important.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="common_card_containar oursecond">
          <div className="image_containar">
            <img
              className="image_icon lazy"
              src={ourPrinciples2}
              alt="KC/LLC Principle: Integrity and Value"
              loading="lazy"
            />
          </div>
          <div className="leftside_text about_leftside_text">
            <div className="card_list_items about-item">
              <div className="item">
                <p>
                  We treat people with <b>respect</b>, operate with <b>integrity</b>, and only invest
                  when we can add <b>real value</b>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurPrinciples;
