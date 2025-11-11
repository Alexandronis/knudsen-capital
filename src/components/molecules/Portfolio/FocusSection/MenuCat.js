import React, { useState } from 'react';
import focusData from '../../../../data/focusData.json';

const MenuCat = () => {
  const [onHover, setOnHover] = useState(8);

  const handleMouseEnter = (index) => {
    setOnHover(onHover === index + 1 ? 0 : index + 1);
  };

  return (
    <div className="menu-section">
      <span>
        <img src="/KCLLC_Logo.svg" alt="KC/LLC Logo" loading="lazy" />
      </span>
      <span className="half-circle"></span>

      <div className="circular-wrapper">
        <ul>
          <li
            className="item-circle"
            style={{ transform: `rotateZ(calc((360deg / 10) * ${onHover}))` }}
          >
            <span className="white-circle"></span>
          </li>
        </ul>
      </div>

      <div className="item-wrapper">
        <ul>
          {focusData.map((data, index) => {
            const circleClass =
              onHover === index + 1
                ? 'white-circle active'
                : onHover === 0
                  ? 'white-circle'
                  : 'white-circle none-active';

            return (
              <li
                key={data.id}
                className="icon-circle"
                style={{ transform: `rotateZ(calc((360deg / 10) * ${data.id + 1}))` }}
              >
                <span
                  className={circleClass}
                  onMouseEnter={() => handleMouseEnter(index)}
                  style={{ transform: `rotateZ(calc(79deg - (360deg / 10) * ${data.id + 1}))` }}
                >
                  <img
                    className="icon-image"
                    src={data.iconImage}
                    alt={data.alt}
                    loading="lazy"
                  />
                  <p className={data.className}>{data.title}</p>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MenuCat;
