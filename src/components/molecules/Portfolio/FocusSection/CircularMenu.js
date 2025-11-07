import React from 'react';

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
                  onClick="onClick(1)"
                  onMouseEnter="calculateOffset(1)"
                  onMouseLeave="onMouseLeave()"
                >
                  <div className="navigation-circle-list-item__meta">
                    <h3 className="navigation-circle-list-item__title">Subcriptions</h3>
                  </div>
                </a>
              </li>
              <li className="navigation-circle-list-item">
                <a
                  className="navigation-circle-list-item__point"
                  onClick="onClick(2)"
                  onMouseEnter="calculateOffset(2)"
                  onMouseLeave="onMouseLeave()"
                >
                  <div className="navigation-circle-list-item__meta">
                    <h3 className="navigation-circle-list-item__title">Health related</h3>
                  </div>
                </a>
              </li>
              <li className="navigation-circle-list-item">
                <a
                  className="navigation-circle-list-item__point"
                  onClick="onClick(3)"
                  onMouseEnter="calculateOffset(3)"
                  onMouseLeave="onMouseLeave()"
                >
                  <div className="navigation-circle-list-item__meta">
                    <h3 className="navigation-circle-list-item__title">Suppliments</h3>
                  </div>
                </a>
              </li>
              <li className="navigation-circle-list-item">
                <a
                  className="navigation-circle-list-item__point"
                  onClick="onClick(4)"
                  onMouseEnter="calculateOffset(4)"
                  onMouseLeave="onMouseLeave()"
                >
                  <div className="navigation-circle-list-item__meta">
                    <h3 className="navigation-circle-list-item__title">Good for you</h3>
                  </div>
                </a>
              </li>
              <li className="navigation-circle-list-item">
                <a
                  className="navigation-circle-list-item__point"
                  onClick="onClick(5)"
                  onMouseEnter="calculateOffset(5)"
                  onMouseLeave="onMouseLeave()"
                >
                  <div className="navigation-circle-list-item__meta">
                    <h3 className="navigation-circle-list-item__title">Clean formulations</h3>
                  </div>
                </a>
              </li>
              <li className="navigation-circle-list-item">
                <a
                  className="navigation-circle-list-item__point"
                  onClick="onClick(6)"
                  onMouseEnter="calculateOffset(6)"
                  onMouseLeave="onMouseLeave()"
                >
                  <div className="navigation-circle-list-item__meta">
                    <h3 className="navigation-circle-list-item__title">Immunity products</h3>
                  </div>
                </a>
              </li>
              <li className="navigation-circle-list-item">
                <a
                  className="navigation-circle-list-item__point"
                  onClick="onClick(7)"
                  onMouseEnter="calculateOffset(7)"
                  onMouseLeave="onMouseLeave()"
                >
                  <div className="navigation-circle-list-item__meta">
                    <h3 className="navigation-circle-list-item__title">Plant-based</h3>
                  </div>
                </a>
              </li>
              <li className="navigation-circle-list-item">
                <a
                  className="navigation-circle-list-item__point"
                  onClick="onClick(8)"
                  onMouseEnter="calculateOffset(8)"
                  onMouseLeave="onMouseLeave()"
                >
                  <div className="navigation-circle-list-item__meta">
                    <h3 className="navigation-circle-list-item__title">Protein</h3>
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
