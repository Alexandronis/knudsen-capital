import React from 'react';
import KCLLC_grenn_Icon from '../../../../assets/Portfolio-page/KCLLC_grenn_Icon.svg';

function InvCriteria() {
  return (
    <>
      <div className="content-wrapper Criteria">
        <div className="content-inner-box">
          <div className="values-title">
            <span></span>
            <h2 className="main-title">Investment Criteria</h2>
          </div>
          <div className="values-cards">
            <div className="common_card">
              <div className="common_card_containar">
                <div className="leftside_text about_leftside_text">
                  <div className="card_list_items about-item">
                    <img className="image_icon" src={KCLLC_grenn_Icon} alt="KC/LLC Green Icon" />
                    <p>Quickly adapted to the new omnichannel business paradigm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="common_card">
              <div className="common_card_containar">
                <div className="leftside_text about_leftside_text">
                  <div className="card_list_items about-item">
                    <img className="image_icon" src={KCLLC_grenn_Icon} alt="KC/LLC Green Icon" />
                    <p>Experiencing exceptional growth rates in today's climate</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="common_card">
              <div className="common_card_containar">
                <div className="leftside_text about_leftside_text">
                  <div className="card_list_items about-item">
                    <img className="image_icon" src={KCLLC_grenn_Icon} alt="KC/LLC Green Icon" />
                    <p>
                      Effectively capture DTC (own site) + Amazon mastery and solid retail reach
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="common_card">
              <div className="common_card_containar">
                <div className="leftside_text about_leftside_text">
                  <div className="card_list_items about-item">
                    <img className="image_icon" src={KCLLC_grenn_Icon} alt="KC/LLC Green Icon" />
                    <p>Have high gross margins (40%+)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="common_card">
              <div className="common_card_containar">
                <div className="leftside_text about_leftside_text">
                  <div className="card_list_items about-item">
                    <img className="image_icon" src={KCLLC_grenn_Icon} alt="KC/LLC Green Icon" />
                    <p>Have a high LTV-CAC ratio (&lt;4 and profitable on first order)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InvCriteria;
