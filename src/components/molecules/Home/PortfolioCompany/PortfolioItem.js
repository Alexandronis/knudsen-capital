import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const PortfolioItem = ({ id, url, logoImage, alt, type }) => {
  const [cardSelect, setCardSelect] = useState(0);
  const [tooltipShow, setTooltipShow] = useState(0);

  const handleMouseEnter = () => {
    setTooltipShow(id + 1);
    setCardSelect(id + 1);
  };

  const handleMouseLeave = () => {
    setTooltipShow(0);
    setCardSelect(0);
  };

  const itemClass =
    cardSelect === id + 1
      ? 'portfolioItem active'
      : cardSelect === 0
        ? 'portfolioItem'
        : 'portfolioItem none-active';

  const tooltipClass =
    tooltipShow === id + 1
      ? 'tool-tip active'
      : tooltipShow === 0
        ? 'tool-tip'
        : 'tool-tip none-active';

  return (
    <div className="Item-wrapper">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className={itemClass}>
          <LazyLoadImage
            effect="blur"
            className="port-logo-image"
            src={logoImage}
            alt={alt}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>

        <div className={tooltipClass}>
          <div className="arrow" />
          <div className="content">
            <h2>{type}</h2>
          </div>
        </div>

        <div className="dataCard_wrapper" />
      </a>
    </div>
  );
};

export default PortfolioItem;
