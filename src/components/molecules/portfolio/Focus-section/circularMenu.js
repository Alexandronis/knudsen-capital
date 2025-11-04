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
            {/* <svg
              className="navigation-circle-svg navigation-circle-svg--opaque"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewbox="0 0 320 320"
              style={{enablebackground: "new 0 0 320 320"}}
            >
              <circle
                cx="160"
                cy="160"
                r="158"
                fill="none"
                stroke-width="1"
                stroke="#c644fc"
                stroke-linecap="round"
                stroke-miterlimit="10"
                style={{strokedashoffset: "0", strokedasharray: "none"}}
              ></circle>
            </svg>
            <svg
              className="navigation-circle-svg navigation-circle-svg--mask"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewbox="0 0 320 320"
              style={{enablebackground: "new 0 0 320 320"}}
            >
              <circle
                id="mask-circle"
                cx="160"
                cy="160"
                r="158"
                fill="none"
                stroke-width="2"
                stroke="#c644fc"
                stroke-linecap="round"
                stroke-miterlimit="10"
                style={{strokedasharray: "1005.3088px"}}
              ></circle>
            </svg> */}
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


     

      {/* <div className="selectorTwo">
        <div className="selector">
          <ul>
            <li
              style={{}}{{
                transform: "rotateZ(calc((360deg / 8) * 1))",
              }}
            >
              <div
                style={{}}{{
                  transform: "rotateZ(calc((-360deg / 8) * 1))",
                }}
              >
                <span>
                  <p>Health related</p>
                </span>
              </div>
            </li>
            <li
              style={{}}{{
                transform: "rotateZ(calc((360deg / 8) * 2))",
              }}
            >
              <div
                style={{}}{{
                  transform: "rotateZ(calc((-360deg / 8) * 2))",
                }}
              >
                <span>
                  <p>Supplements</p>
                </span>
              </div>
            </li>
            <li
              style={{}}{{
                transform: "rotateZ(calc((360deg / 8) * 3))",
              }}
            >
              <div
                style={{}}{{
                  transform: "rotateZ(calc((-360deg / 8) * 3))",
                }}
              >
                <span>
                  <p>Protein</p>
                </span>
              </div>
            </li>
            <li
              style={{}}{{
                transform: "rotateZ(calc((360deg / 8) * 4))",
              }}
            >
              <div
                style={{}}{{
                  transform: "rotateZ(calc((-360deg / 8) * 4))",
                }}
              >
                <span>
                  <p>Plant-based</p>
                </span>
              </div>
            </li>
            <li
              style={{}}{{
                transform: "rotateZ(calc((360deg / 8) * 5))",
              }}
            >
              <div
                style={{}}{{
                  transform: "rotateZ(calc((-360deg / 8) * 5))",
                }}
              >
                <span>
                  <p>Good for you</p>
                </span>
              </div>
            </li>
            <li
              style={{}}{{
                transform: "rotateZ(calc((360deg / 8) * 6))",
              }}
            >
              <div
                style={{}}{{
                  transform: "rotateZ(calc((-360deg / 8) * 6))",
                }}
              >
                <span>
                  <p>Clean formulations</p>
                </span>
              </div>
            </li>
            <li
              style={{}}{{
                transform: "rotateZ(calc((360deg / 8) * 7))",
              }}
            >
              <div
                style={{}}{{
                  transform: "rotateZ(calc((-360deg / 8) * 7))",
                }}
              >
                <span>
                  <p>Immunity products</p>
                </span>
              </div>
            </li>
            <li
              style={{}}{{
                transform: "rotateZ(calc((360deg / 8) * 8))",
              }}
            >
              <div
                style={{}}{{
                  transform: "rotateZ(calc((-360deg / 8) * 8))",
                }}
              >
                <span>
                  <p>Subscriptions</p>
                </span>
              </div>
            </li>
          </ul>

          <button>
            <img src="/KCLLC_Logo.svg" alt="KC/LLC Logo" />
          </button>
        </div>
      </div> */}
    </>
  );
}

export default CircularMenu;
