import React, { useState } from "react";

function MenuCat() {
  const [onHover, setonHover] = useState(8);
  const focusData = require("../../../../data/focusData.json");

  return (
    <>
      <div className="menu-section">
        <span>
          <img src="/KCLLC_Logo.svg" alt="KC/LLC Logo" />
        </span>
        <span className="half-circle"></span>
        <div className="circular-wrapper">
          <ul>
            <li
              className="item-circle"
              style={{ transform: `rotateZ(calc((360deg / 10) * ${onHover})` }}
            >
              <span className="white-circle"></span>
            </li>
          </ul>
        </div>
        <div className="item-wrapper">
          <ul>
            {focusData.map((data, index) => {
              return (
                <li
                key={data.id}
                  className="icon-circle"
                  style={{
                    transform: `rotateZ(calc((360deg / 10) * ${data.id + 1}))`,
                  }}
                >
                  <span
                    className={
                      onHover === index + 1
                        ? "white-circle active"
                        : onHover === 0
                        ? "white-circle"
                        : "white-circle none-active"
                    }
                    onMouseEnter={() => {
                      onHover === index + 1
                        ? setonHover(0)
                        : setonHover(index + 1);
                    }}
                    style={{
                      transform: `rotateZ(calc(79deg - (360deg /10) * ${
                        data.id + 1
                      }))`,
                    }}
                  >
                    <img
                      className="icon-image"
                      src={data.iconImage}
                      alt={data.alt}
                    />
                    <p className={data.className}>{data.title}</p>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default MenuCat;
