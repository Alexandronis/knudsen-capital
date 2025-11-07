import React, { useState } from "react";

function MenuCatMobile() {
  const [onHover, setonHover] = useState(8);
  const [dotPosition, setdotPosition] = useState(4);
  const focusData = require("../../../../data/focusData.json");
  return (
    <>
      <div className="menu-section-mobile">
        <div className="vertical-line">
          <span className="line"></span>
          <span className="dot " style={{ top: `${dotPosition}%` }}></span>
          <span className="dot active" style={{ top: `${dotPosition - 0.8}%` }}></span>
        </div>
        <div className="titles-wrapper">
          {focusData.map((data, index) => {
            return (
              <div
                key={data.id}
                className={
                  onHover === index + 1
                    ? "titles active"
                    : onHover === 0
                    ? "titles"
                    : "titles none-active"
                }
                onMouseEnter={() => {
                  onHover === index + 1 ? setonHover(0) : setonHover(index + 1);
                  setdotPosition(data.dotPosition);
                }}
              >
                <span className="Blue-circle">
                  <img className="icon-image" src={data.iconImage} alt={data.alt} />
                </span>
                <p className="title-name">{data.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MenuCatMobile;
