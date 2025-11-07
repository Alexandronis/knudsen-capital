import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function PortfolioItem(props) {
  const [cardselect, setcardselect] = useState(0);
  const [tooltipShow, settooltipShow] = useState(0);

  return (
    <>
      <div className="Item-wrapper">
        <a target="_BLANK" rel="noopener noreferrer" href={props.url}>
          <div
            className={
              cardselect === props.id + 1
                ? "portfolioItem active"
                : cardselect === 0
                ? "portfolioItem"
                : "portfolioItem none-active"
            }
          >
            <LazyLoadImage
              effect="blur"
            className="port-logo-image"
              src={props.logoImage}
              alt={props.alt}
              onMouseEnter={() => {
                settooltipShow(props.id + 1);
                setcardselect(props.id + 1);
              }}
              onMouseLeave={() => {
                settooltipShow(0);
                setcardselect(0);
              }}
            />
          </div>
          <div
            className={
              tooltipShow === props.id + 1
                ? "tool-tip active"
                : tooltipShow === 0
                ? "tool-tip"
                : "tool-tip none-active"
            }
          >
            <div className="arrow"></div>
            <div className="content">
              <h2>{props.type}</h2>
            </div>
          </div>
          <div className="dataCard_wrapper"></div>
        </a>
      </div>
    </>
  );
}
export default PortfolioItem;
