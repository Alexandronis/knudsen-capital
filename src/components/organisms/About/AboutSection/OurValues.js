import React from 'react';
import ourValues1 from '../../../../assets/about-page/our-values-1.svg';
import ourValues2 from '../../../../assets/about-page/our-values-2.svg';
import ourValues3 from '../../../../assets/about-page/our-values-3.svg';
import ourValues4 from '../../../../assets/about-page/our-values-4.svg';

function OurValues() {
  return (
    <>
      <div className="sub-heaading">
        <span></span>
        <h2>Our Values</h2>
      </div>
      <div className="common_card">
        <div className="common_card_containar">
          <div className="image_containar">
            <img className="image_icon" src={ourValues1} alt="KC/LLC Icon" />
          </div>
          <div className="leftside_text about_leftside_text">
            <div className="card_list_items about-item">
              <div className="item">
                <p>
                  Do we believe in the company&apos;s<b> purpose</b>?{' '}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="common_card_containar">
          <div className="image_containar">
            <img className="image_icon" src={ourValues2} alt="KC/LLC Icon" />
          </div>
          <div className="leftside_text about_leftside_text">
            <div className="card_list_items about-item">
              <div className="item">
                <p>
                  What <b>impact</b> will the business have on the world?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="common_card_containar">
          <div className="image_containar">
            <img className="image_icon" src={ourValues3} alt="KC/LLC Icon" />
          </div>
          <div className="leftside_text about_leftside_text">
            <div className="card_list_items about-item">
              <div className="item">
                <p>
                  Do we believe in the <b>people</b> behind the company?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="common_card_containar">
          <div className="image_containar">
            <img className="image_icon" src={ourValues4} alt="KC/LLC Icon" />
          </div>
          <div className="leftside_text about_leftside_text">
            <div className="card_list_items about-item">
              <div className="item">
                <p>
                  Can the business drive a significant <b>sustainable</b> profit?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurValues;
