import React from 'react';
import ourMission from '../../../../assets/about-page/our-mission.svg';
function OurMission() {
  return (
    <>
      <div className="sub-heaading">
        <span></span>
        <h2>Our Mission</h2>
      </div>
      <div className="common_card">
        <div className="common_card_containar">
          <div className="image_containar">
            <img className="image_icon" src={ourMission} alt="KC/LLC Icon" />
          </div>
          <div className="leftside_text about_leftside_text">
            <div className="card_list_items about-item">
              <div className="item">
                <p>We back founders with innovative solutions to challenges</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurMission;
