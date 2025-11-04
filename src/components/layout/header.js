import React, { useState, useEffect } from "react";
import { Link as RLink, useLocation, useHistory } from "react-router-dom";
import { Link } from "react-scroll";
import Logo from "../../assets/Logo/KCLLC_Navbar_Logo.svg";

function Header() {
  const [isShown, setIsShown] = useState(0);
  // const boxRef = React.useRef(null);

  const [scroll, setScroll] = useState(false);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const menuOnclick = () => {
    document.getElementById("burgerBtnMob").checked = false;
  };

  return (
    <div className={scroll ? "App-header bg-black" : "App-header bg-white"}
    onMouseLeave={() => {
      setIsShown(0);
    }}>
      {/* {!window.matchMedia("(max-width: 1199px)").matches ? ():()} */}
      <header className="main-header">
        <div
          className="logo"
          onClick={() => {
            localStorage.setItem("activePage", "");
          }}
        >
          <a href="/">
          <img src={Logo} alt="KC/LLC Logo" />

          </a>
        </div>
        <nav>
          <div className="nav-list">
            <ul>
              <li className="list">
                <Link
                      className={location.pathname === "/about" || location.pathname === "/about/" ? "active" : ""}
                      to="/about"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={1500}
                      onClick={() => {
                        menuOnclick();
                        history.replace("/about");
                      }}
                    >
                      <p className={scroll || location.pathname !== "" ? "white-font" : ""}>About</p>
                      <span></span>
                  </Link>
               
              </li>
              <li className="list">
                    <Link
                      className={location.pathname === "/portfolio" ? "active" : ""}
                      to="/portfolio"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={1500}
                      onClick={() => {
                        menuOnclick();
                        history.replace("/portfolio");
                      }}
                    >
                      <p className={scroll || location.pathname !== "" ? "white-font" : ""}>Portfolio</p>
                      <span></span>
                    </Link>
                   
              </li>
              <li className="list">
                    <Link
                      className={location.pathname === "/charitable-contributions" ? "active" : ""}
                      to="/charitable-contributions"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={1500}
                      onClick={() => {
                        menuOnclick();
                        history.replace("/charitable-contributions");
                      }}
                    >
                      <p className={scroll || location.pathname !== "" ? "white-font" : ""}>Charitable Contributions</p>
                      <span></span>
                    </Link>
                  </li>
                  <li className="list">
                    <Link
                      className={location.pathname === "/contact" ? "active" : ""}
                      to="/contact"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={2500}
                      onClick={() => {
                        menuOnclick();
                        history.replace("/contact");
                      }}
                    >
                      <p className={scroll || location.pathname !== "" ? "white-font" : ""}>Contact</p>
                      <span></span>
                    </Link>
                    
                  </li>
            </ul>
          </div>
        </nav>
      </header>
      <header className="header-mob">
        <nav>
          <div className="logo">
            <a href="/">
            <img src={Logo} alt="KC/LLC Logo" />
            </a>
          </div>
          <div className="menu">
            <div className="menuIcon">
              <div id="menuToggle">
                <input type="checkbox" id="burgerBtnMob" />
                <span></span>
                <span></span>
                <span></span>
                <ul id={scroll ? "menu-white" : "menu-black"}>
                  <li className="list">
                    <Link
                      className={location.pathname === "/about" ? "active" : ""}
                      to="/about"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={1500}
                      onClick={() => {
                        menuOnclick();
                        history.replace("/about");
                      }}
                    >
                      About
                    </Link>
                  </li>
                 
                  <li className="list">
                    <Link
                      className={location.pathname === "/portfolio" ? "active" : ""}
                      to="/portfolio"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={1500}
                      onClick={() => {
                        menuOnclick();
                        history.replace("/portfolio");
                      }}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li className="list">
                    <Link
                      className={location.pathname === "/charitable-contributions" ? "active" : " "}
                      to="/charitable-contributions"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={1500}
                      onClick={() => {
                        menuOnclick();
                        history.replace("/charitable-contributions");
                      }}
                    >
                      Charitable Contributions
                    </Link>
                  </li>
                  <li className="list">
                    <Link
                      className={location.pathname === "/contact" ? "active" : " "}
                      to="/contact"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={2500}
                      onClick={() => {
                        menuOnclick();
                        history.replace("/contact");
                      }}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
