import React from "react";

import CardIcon from "../../../../assets/About-page/CK_logo_blue_icon.svg";
import CardIconWhite from "../../../../assets/About-page/CK_logo_icon.svg";
import Our_Principles_1 from "../../../../assets/About-page/Our_Principles_1.svg";
import Our_Principles_2 from "../../../../assets/About-page/Our_Principles_2.svg";

function OurPrinciples() {
  return (
    <>
      <div className='sub-heaading'>
        <span></span>
        <h2>Our Principles</h2>
      </div>
      <div className='common_card'>
        <div className='common_card_containar'>
          <div className='image_containar'>
            <img
              className='image_icon'
              src={Our_Principles_1}
              alt='KC/LLC Icon'
            />
          </div>
          <div className='leftside_text about_leftside_text'>
            <div className='card_list_items about-item'>
              <div className='item'>
                {/* <img className="image_icon" src={CardIcon} alt="KC/LLC Icon" /> */}
                <p>
                  We believe <b>profit</b> and <b>purpose</b> are equally
                  important.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='common_card_containar oursecond'>
          <div className='image_containar'>
            <img
              className='image_icon'
              src={Our_Principles_2}
              alt='KC/LLC Icon'
            />
          </div>
          <div className='leftside_text about_leftside_text'>
            <div className='card_list_items about-item'>
              <div className='item'>
                {/* <img className="image_icon" src={CardIcon} alt="KC/LLC Icon" /> */}
                <p>
                  We treat people with <b>respect</b>, operate with{" "}
                  <b>integrity</b>, and only invest when we can add{" "}
                  <b>real value</b>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurPrinciples;
