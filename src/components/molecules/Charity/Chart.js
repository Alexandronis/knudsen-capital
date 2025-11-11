import React, { useState } from 'react';
import charityData from '../../../data/charityData.json';

const Chart = () => {
  const [hoverIndex, setHoverIndex] = useState(0);

  const handleMouseEnter = (index) => {
    setHoverIndex((prev) => (prev === index + 1 ? 0 : index + 1));
  };

  const handleMouseLeave = () => {
    setHoverIndex(0);
  };

  return (
    <div className="menu-section">
      <span className="middle-logo">
        <img src="/logo512.png" alt="KC/LLC LOGO" loading="lazy" />
      </span>
      <span className="half-circle" />

      <div className="circular-wrapper">
        <ul>
          <li
            className="item-circle"
            style={{ transform: `rotateZ(calc((360deg / 8) * ${hoverIndex}))` }}
          >
            <span className="white-circle" />
          </li>
        </ul>
      </div>

      <div className="item-wrapper">
        <ul>
          {charityData.map((data, index) => {
            const isActive = hoverIndex === index + 1;
            const isDefault = hoverIndex === 0;

            return (
              <li
                className="icon-circle"
                style={{ transform: `rotateZ(calc((360deg / 7) * ${data.id + 1}))` }}
                key={data.id}
              >
                <span
                  className={`white-circle logo-circle${index} ${
                    isActive ? 'active' : !isDefault ? 'none-active' : ''
                  }`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    className={isActive ? 'icon-none' : 'icon-image'}
                    src={data.logoRound}
                    alt={data.title}
                    loading="lazy"
                  />
                  <div className={isActive ? `card-active back${index}` : 'card-hide'}>
                    <p>{data.description}</p>
                    <p className="right-align">
                      <a href={data.webLink} target="_blank" rel="noopener noreferrer">
                        See More &gt;
                      </a>
                    </p>
                  </div>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Chart;
