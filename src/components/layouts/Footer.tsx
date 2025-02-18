import React from "react";
import { FaYoutube, FaShieldAlt } from "react-icons/fa";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <h2>Viktor Portfolio</h2>
        <p>Just a little bit funny shit projects</p>

        <div className="footer-links">
          <a
            href="https://www.youtube.com/@dj_viko02"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube /> YouTube
          </a>
          <a href="#">
            <FaShieldAlt /> Privacy Policy
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} DJVIKO. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
