import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import unrealizedInvestmentData from '../../../../data/unrealizedInvestment.json';
import 'react-lazy-load-image-component/src/effects/blur.css';

const FirstCategory = () => {
  const navigate = useNavigate();

  const organization = useMemo(
    () => [...unrealizedInvestmentData].sort((a, b) => a.companyName.localeCompare(b.companyName)),
    []
  );

  const handleClick = (data) => {
    navigate('/client-page', { state: { data } });
  };

  return (
    <div className="Category-wrapper">
      <div className="Category-title">
        <div className="values-title">
          <div className="sub-heaading">
            <span></span>
            <h2>Unrealized Investment</h2>
          </div>
        </div>
      </div>

      <div className="card-investments">
        <div className="card-wrapper">
          {organization.map((data, index) => (
            <button
              key={data.id || index}
              type="button"
              className="logo-box"
              onClick={() => handleClick(data)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleClick(data);
              }}
            >
              <div className="logo-img-box">
                <LazyLoadImage
                  effect="blur"
                  className="image_containar lazy"
                  src={data.logoImage}
                  alt={data.alt || `${data.companyName} logo`}
                  loading="lazy"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FirstCategory;
