import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import headerMenuItems from '../../data/header.json';
import logoIcon from '../../assets/logo/navbar-logo.svg';

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuOnclick = useCallback(() => {
    const checkbox = document.getElementById('burgerBtnMob');
    if (checkbox) checkbox.checked = false;
  }, []);

  const goTo = useCallback(
    (path) => {
      menuOnclick();
      navigate(path, { replace: true });
    },
    [menuOnclick, navigate]
  );

  const isWhiteFont = scroll || location.pathname !== '';

  return (
    <div className={scroll ? 'App-header bg-black' : 'App-header bg-white'}>
      {/* DESKTOP HEADER */}
      <header className="main-header">
        <div className="logo">
          <a href="/" onClick={() => localStorage.setItem('activePage', '')}>
            <img src={logoIcon} alt="KC/LLC Logo" loading="lazy" />
          </a>
        </div>

        <nav>
          <div className="nav-list">
            <ul>
              {headerMenuItems.map(({ path, label }) => (
                <li key={path} className="list">
                  <Link
                    className={location.pathname.toLowerCase() === path ? 'active' : ''}
                    to={path}
                    spy
                    hashSpy
                    smooth
                    offset={-150}
                    duration={label === 'Contact' ? 2500 : 1500}
                    onClick={() => goTo(path)}
                  >
                    <p className={isWhiteFont ? 'white-font' : ''}>{label}</p>
                    <span />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* MOBILE HEADER */}
      <header className="header-mob">
        <nav>
          <div className="logo">
            <a href="/">
              <img src={logoIcon} alt="KC/LLC Logo" loading="lazy" />
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
                  {headerMenuItems.map(({ path, label }) => (
                    <li key={path} className="list">
                      <Link
                        className={location.pathname.toLowerCase() === path ? 'active' : ''}
                        to={path}
                        spy
                        hashSpy
                        smooth
                        offset={-150}
                        duration={label === 'Contact' ? 2500 : 1500}
                        onClick={() => goTo(path)}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
