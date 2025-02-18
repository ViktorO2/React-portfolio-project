import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <h1>DJ VIKO & Hacker</h1>
      </div>
      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        <ul className="nav-list">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="dropdown">
            <a className="nav-list">Projects ▼</a>
            <ul className="dropdown-menu">
              <li>
                <Link to="/age-calculator" onClick={() => setIsOpen(false)}>
                  Age Calculator
                </Link>
              </li>
              <li>
                <Link to="/basic-calculator" onClick={() => setIsOpen(false)}>
                  Basic Calculator
                </Link>
              </li>
              <li>
                <Link to="/tip-calculator" onClick={() => setIsOpen(false)}>
                  Tip Calculator
                </Link>
              </li>
              <li>
                <Link to="/weather-app" onClick={() => setIsOpen(false)}>
                  Weather Application
                </Link>
              </li>
              <li>
                <Link to="/rolex-clock" onClick={() => setIsOpen(false)}>
                  What's the time Rolex?
                </Link>
              </li>
              <li>
                <Link to="/pokemon-search" onClick={() => setIsOpen(false)}>
                  Pokemon Search
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/about-me" onClick={() => setIsOpen(false)}>
              About Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
