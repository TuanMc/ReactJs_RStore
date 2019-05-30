import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/icons/Rstore-icon.png"

function Header({ value = 0, isAuthenticated, onSignOut }) {
  return (
    <header className="header1">
      <div className="container-menu-header">
        <div className="wrap_header">
          <a href="/" className="logo">
            <img src={Logo} alt="IMG-LOGO" />
          </a>

          <div className="wrap_menu">
            <nav className="menu">
              <ul className="main_menu">
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <a href="shop.html">Shop</a>
                </li>

                <li className="sale-noti">
                  <a href="product">Sale</a>
                </li>

                <li>
                  <a href="car">Features</a>
                </li>

                <li>
                  <a href="blog">Blog</a>
                </li>

                <li>
                  <a href="about">About</a>
                </li>

                <li>
                  <a href="contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="header-icons">
            <Link to="/cart">
              <div className="header-wrapicon2">
                <img
                  src="https://uploads.codesandbox.io/uploads/user/3b4df10a-e37a-40a9-9c89-dd9a2f20e059/-Gsa-icon-header-02.png"
                  className="header-icon1 js-show-header-dropdown"
                  alt="ICON"
                />
                <span className="header-icons-noti">{value}</span>
              </div>
            </Link>
            <span className="linedivide1" />
            <>
              {isAuthenticated && (
                <button onClick={() => onSignOut()}>Sign out</button>
              )}
              {!isAuthenticated && <Link to="/login">Sign in</Link>}
            </>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
