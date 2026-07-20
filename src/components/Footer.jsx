import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-premium">
      <div className="container-premium">
        <div className="footer-content">
          <div className="footer-section">
            <h4 className="footer-title">Quranic Signs</h4>
            <p className="footer-desc">Discover the wonders of the Quran through knowledge and scientific exploration.</p>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/categories">Categories</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/surah">Read Quran</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Quranic Signs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;