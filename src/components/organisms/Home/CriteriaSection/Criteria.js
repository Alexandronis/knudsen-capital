import React from 'react';
import { criteriaCards, principles } from '../../../../data/criteria';

const Criteria = () => {
  return (
    <div className="our-criteria">
      <div className="criteria-title">
        <h2>Our Key Criteria</h2>
        <p>for investing in businesses</p>
      </div>

      <div className="criteria-card">
        {criteriaCards.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-icon">
              <img src={card.icon} alt={card.title + ' Icon'} loading="lazy" />
            </div>
            <div className="card-title">
              <h2>{card.title}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="section-title">
        <h1>Investment Principles</h1>
      </div>

      <div className="principles">
        {principles.map((text, index) => (
          <div className="card-containar" key={index}>
            <div className="center-text">
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Criteria;
