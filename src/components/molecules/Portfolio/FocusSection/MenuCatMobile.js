import React, { useState } from 'react';
import focusData from '../../../../data/focusData.json';

const MenuCatMobile = () => {
  const [onHover, setOnHover] = useState(8);
  const [dotPosition, setDotPosition] = useState(4);

  const handleMouseEnter = (index, dotPos) => {
    setOnHover(onHover === index + 1 ? 0 : index + 1);
    setDotPosition(dotPos);
  };

  return (
    <div className="menu-section-mobile">
      <div className="vertical-line">
        <span className="line"></span>
        <span className="dot" style={{ top: `${dotPosition}%` }}></span>
        <span className="dot active" style={{ top: `${dotPosition - 0.8}%` }}></span>
      </div>

      <div className="titles-wrapper">
        {focusData.map((data, index) => {
          const titleClass =
            onHover === index + 1
              ? 'titles active'
              : onHover === 0
                ? 'titles'
                : 'titles none-active';

          return (
            <div
              key={data.id}
              className={titleClass}
              onMouseEnter={() => handleMouseEnter(index, data.dotPosition)}
            >
              <span className="Blue-circle">
                <img
                  className="icon-image lazy"
                  src={data.iconImage}
                  alt={data.alt}
                  loading="lazy"
                />
              </span>
              <p className="title-name">{data.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuCatMobile;
