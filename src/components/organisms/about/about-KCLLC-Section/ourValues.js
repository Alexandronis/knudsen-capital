import React from 'react';
import Our_Values_1 from '../../../../assets/About-page/Our_Values_1.svg';
import Our_Values_2 from '../../../../assets/About-page/Our_Values_2.svg';
import Our_Values_3 from '../../../../assets/About-page/Our_Values_3.svg';
import Our_Values_4 from '../../../../assets/About-page/Our_Values_4.svg';

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
            <img className="image_icon" src={Our_Values_1} alt="KC/LLC Icon" />
          </div>
          <div className="leftside_text about_leftside_text">
            <div className="card_list_items about-item">
              <div className="item">
                <p>
                  Do we believe in the company's<b> purpose</b>?{' '}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="common_card_containar">
          <div className="image_containar">
            <img className="image_icon" src={Our_Values_2} alt="KC/LLC Icon" />
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
            <img className="image_icon" src={Our_Values_3} alt="KC/LLC Icon" />
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
            <img className="image_icon" src={Our_Values_4} alt="KC/LLC Icon" />
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
