import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="logo-container">
      <div className="logo-wrapper">
        <div className="logo-icon">
          <span className="logo-q">Q</span>
          <span className="logo-s">S</span>
        </div>
        <div className="logo-text-wrapper">
          <span className="logo-title">QURANIC</span>
          <span className="logo-subtitle">EXPLORE • LEARN • REFLECT</span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;