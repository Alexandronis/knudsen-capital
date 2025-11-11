import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import organization from '../../../../data/realizedInvestment.json';

const RealizedInvestment = () => {
  const navigate = useNavigate();

  const handleClick = (data) => {
    navigate('/client-page', { state: { data } });
  };

  return (
    <div className="Category-wrapper">
      <div className="Category-title">
        <div className="values-title">
          <div className="sub-heaading">
            <span></span>
            <h2>Realized Investment</h2>
          </div>
        </div>
      </div>

      <div className="card-investments">
        <div className="card-wrapper">
          {organization
            .sort((a, b) => a.companyName.localeCompare(b.companyName))
            .map((data, index) => (
              <div
                className="logo-box"
                key={index}
                role="button"
                tabIndex={0}
                onClick={() => handleClick(data)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') handleClick(data);
                }}
              >
                <div className="logo-img-box">
                  <LazyLoadImage
                    effect="blur"
                    loading="lazy"
                    className="image_containar lazy"
                    src={data.logoImage}
                    alt={data.alt || `${data.companyName} logo`}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RealizedInvestment;
