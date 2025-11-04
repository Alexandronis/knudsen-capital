import React from "react";

import Purpose from "../../../../assets/Criteria-Section/PURPOSE.svg";
import People from "../../../../assets/Criteria-Section/PEOPLE.svg";
import Profit from "../../../../assets/Criteria-Section/PROFIT.svg";

function Criteria() {
  return (
    <div className="our-criteria">
      <div className="criteria-title">
        <h2>Our Key Criteria</h2>
        <p>for investing in businesses</p>
      </div>
      <div className="criteria-card">
        <div className="card">
          <div className="card-icon">
            <img src={People} alt="cardIcon" />
          </div>
          <div className="card-title">
            <h2>PEOPLE</h2>
          </div>
        </div>

        <div className="card">
          <div className="card-icon">
            <img src={Purpose} alt="cardIcon" />
          </div>
          <div className="card-title">
            <h2>PURPOSE</h2>
          </div>
        </div>

        <div className="card">
          <div className="card-icon">
            <img src={Profit} alt="cardIcon" />
          </div>
          <div className="card-title">
            <h2>PROFIT</h2>
          </div>
        </div>
      </div>
      <div className="section-title">
        <h1>Investment Principles</h1>
      </div>

      <div className="principles">
        <div className="card-containar">
          <div className="center-text">
            <p>
              We invest in early-stage, high-growth businesses that change their
              industries and improve lives - individually and on a global scale.
            </p>
          </div>
        </div>

        <div className="card-containar">
          <div className="center-text">
            <p>We believe profit and purpose are equally important.</p>
          </div>
        </div>

        <div className="card-containar">
          <div className="center-text">
            <p>
              We treat people with respect, and only invest when we're confident
              that we can add real value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Criteria;
