import React from "react";

function CircularMenu() {
  return (
    <>
      <div className="main">
        <button>
          <img src="/KCLLC_Logo.svg" alt="KC/LLC Logo" />
        </button>
        <div className="navigation-circle">
          <div className="navigation-circle__inner">
            <ul className="navigation-circle__list">
              <li className="navigation-circle-list-item">
              <img src="/focus_Icon/Group_1488.svg" />
                <a
                  className="navigation-circle-list-item__point"
                  onclick="onClick(1)"
                  onmouseenter="calculateOffset(1)"
                  onMouseLeave="onMouseLeave()"

                >

                  <div className="navigation-circle-list-item__meta">
                    <h3 className="navigation-circle-list-item__title">
                      Subcriptions
                    </h3>
                  </div>
                </a>
              </li>
              <li className="navigation-circle-list-item">
                <a
                  className="navigation-circle-list-item__point"
                  onclick="onClick(2)"
                  onmouseenter="calculateOffset(2)"
                  onMouseLeave="onMouseLeave()"
                >
                  <div className="navigation-circle-list-item__meta">
                    <h3 className="navigation-circle-list-item__title">
                      Health related
                    </h3>
                  </div>
                </a>
              </li>
              <li className="navigation-circle-list-item">
                <a
                  className="navigation-circle-list-item__point"
                  onclick="onClick(3)"
                  onmouseenter="calculateOffset(3)"
                  onMouseLeave="onMouseLeave()"
                >
                  <div className="navigation-circle-list-item__meta">
                    <h3 className="navigation-circle-list-item__title">
                      Suppliments
                    </h3>
                  </div>
                </a>
              </li>
              <li className="navigation-circle-list-item">
                <a
                  className="navigation-circle-list-item__point"
                  onclick="onClick(4)"
                  onmouseenter="calculateOffset(4)"
                  onMouseLeave="onMouseLeave()"
                >
                  <div className="navigation-circle-list-item__meta">
                    <h3 className="navigation-circle-list-item__title">
                      Good for you
                    </h3>
                  </div>
                </a>
              </li>
              <li className="navigation-circle-list-item">
                <a
                  className="navigation-circle-list-item__point"
                  onclick="onClick(5)"
                  onmouseenter="calculateOffset(5)"
                  onMouseLeave="onMouseLeave()"
                >
                  <div className="navigation-circle-list-item__meta">
                    <h3 className="navigation-circle-list-item__title">
                      Clean formulations
                    </h3>
                  </div>
                </a>
              </li>
              <li className="navigation-circle-list-item">
                <a
                  className="navigation-circle-list-item__point"
                  onclick="onClick(6)"
                  onmouseenter="calculateOffset(6)"
                  onMouseLeave="onMouseLeave()"
                >
                  <div className="navigation-circle-list-item__meta">
                    <h3 className="navigation-circle-list-item__title">
                      Immunity products
                    </h3>
                  </div>
                </a>
              </li>
              <li className="navigation-circle-list-item">
                <a
                  className="navigation-circle-list-item__point"
                  onclick="onClick(7)"
                  onmouseenter="calculateOffset(7)"
                  onMouseLeave="onMouseLeave()"
                >
                  <div className="navigation-circle-list-item__meta">
                    <h3 className="navigation-circle-list-item__title">
                      Plant-based
                    </h3>
                  </div>
                </a>
              </li>
              <li className="navigation-circle-list-item">
                <a
                  className="navigation-circle-list-item__point"
                  onclick="onClick(8)"
                  onmouseenter="calculateOffset(8)"
                  onMouseLeave="onMouseLeave()"
                >
                  <div className="navigation-circle-list-item__meta">
                    <h3 className="navigation-circle-list-item__title">
                      Protein
                    </h3>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default CircularMenu;
