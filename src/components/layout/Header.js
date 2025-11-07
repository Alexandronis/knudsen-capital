import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import logoIcon from '../../assets/logo/navbar-logo.svg';

function Header() {
  const [scroll, setScroll] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuOnclick = () => {
    const checkbox = document.getElementById('burgerBtnMob');
    if (checkbox) checkbox.checked = false;
  };

  const goTo = (path) => {
    menuOnclick();
    navigate(path, { replace: true });
  };

  return (
    <div className={scroll ? 'App-header bg-black' : 'App-header bg-white'}>
      <header className="main-header">
        <div className="logo" onClick={() => localStorage.setItem('activePage', '')}>
          <a href="/">
            <img src={logoIcon} alt="KC/LLC Logo" />
          </a>
        </div>

        <nav>
          <div className="nav-list">
            <ul>
              <li className="list">
                <Link
                  className={
                    location.pathname === '/About' || location.pathname === '/About/'
                      ? 'active'
                      : ''
                  }
                  to="/about"
                  spy={true}
                  hashSpy={true}
                  smooth={true}
                  offset={-150}
                  duration={1500}
                  onClick={() => goTo('/About')}
                >
                  <p className={scroll || location.pathname !== '' ? 'white-font' : ''}>About</p>
                  <span></span>
                </Link>
              </li>

              <li className="list">
                <Link
                  className={location.pathname === '/Portfolio' ? 'active' : ''}
                  to="/portfolio"
                  spy={true}
                  hashSpy={true}
                  smooth={true}
                  offset={-150}
                  duration={1500}
                  onClick={() => goTo('/Portfolio')}
                >
                  <p className={scroll || location.pathname !== '' ? 'white-font' : ''}>
                    Portfolio
                  </p>
                  <span></span>
                </Link>
              </li>

              <li className="list">
                <Link
                  className={location.pathname === '/charitable-contributions' ? 'active' : ''}
                  to="/charitable-contributions"
                  spy={true}
                  hashSpy={true}
                  smooth={true}
                  offset={-150}
                  duration={1500}
                  onClick={() => goTo('/charitable-contributions')}
                >
                  <p className={scroll || location.pathname !== '' ? 'white-font' : ''}>
                    Charitable Contributions
                  </p>
                  <span></span>
                </Link>
              </li>

              <li className="list">
                <Link
                  className={location.pathname === '/contact' ? 'active' : ''}
                  to="/contact"
                  spy={true}
                  hashSpy={true}
                  smooth={true}
                  offset={-150}
                  duration={2500}
                  onClick={() => goTo('/contact')}
                >
                  <p className={scroll || location.pathname !== '' ? 'white-font' : ''}>Contact</p>
                  <span></span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* MOBILE HEADER */}
      <header className="header-mob">
        <nav>
          <div className="logo">
            <a href="/">
              <img src={logoIcon} alt="KC/LLC Logo" />
            </a>
          </div>

          <div className="menu">
            <div className="menuIcon">
              <div id="menuToggle">
                <input type="checkbox" id="burgerBtnMob" />
                <span />
                <span />
                <span />
                <ul id={scroll ? 'menu-white' : 'menu-black'}>
                  <li className="list">
                    <Link
                      className={location.pathname === '/About' ? 'active' : ''}
                      to="/about"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={1500}
                      onClick={() => goTo('/About')}
                    >
                      About
                    </Link>
                  </li>

                  <li className="list">
                    <Link
                      className={location.pathname === '/Portfolio' ? 'active' : ''}
                      to="/portfolio"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={1500}
                      onClick={() => goTo('/Portfolio')}
                    >
                      Portfolio
                    </Link>
                  </li>

                  <li className="list">
                    <Link
                      className={location.pathname === '/charitable-contributions' ? 'active' : ''}
                      to="/charitable-contributions"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={1500}
                      onClick={() => goTo('/charitable-contributions')}
                    >
                      Charitable Contributions
                    </Link>
                  </li>

                  <li className="list">
                    <Link
                      className={location.pathname === '/contact' ? 'active' : ''}
                      to="/contact"
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={2500}
                      onClick={() => goTo('/contact')}
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
