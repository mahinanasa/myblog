/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuToggle] = useState(false);

  const toggleMenu = () => setMenuToggle(!menuOpen);

  const stylesOpen = {
    transform: 'translateX(0px)'
  };
  return (
    <div className="navbar-fixed">
      <nav className="teal darken-4">
        <div className="container">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
             My Blog
            </a>
            <a href="#" onClick={toggleMenu} className="sidenav-trigger right">
              <i className="material-icons">menu</i>
            </a>
            <div
              className="sidenav-overlay"
              style={menuOpen ? { display: 'block', opacity: 1 } : null}
              onClick={toggleMenu}
            />
            <ul id="slide-out" className="sidenav" style={menuOpen ? stylesOpen : null}>
              <li>
                <a className="subheader">Menu</a>
              </li>
              <li>
                <div className="divider" />
              </li>
              <li>
                <Link to="/" className="item" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="item" onClick={toggleMenu}>
                  About Us
                </Link>
              </li>
              
            </ul>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/aboutus" className="item">
                About Us
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
