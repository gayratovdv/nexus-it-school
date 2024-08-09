import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import "./navbar.css";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Container>
        <div className="navbar__content">
          <div className="navbar__content--left">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="navbar__content--center">
            <ul className="navbar__content--center-list">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="navbar__content--right">
            <button className="navbar__content--right-btn">
              +998 99 728 86 75
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
