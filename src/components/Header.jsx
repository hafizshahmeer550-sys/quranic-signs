import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // ===== DARK MODE STATE =====
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? JSON.parse(saved) : false;
  });

  // ===== SECURE SESSION VALIDATION =====
  useEffect(() => {
    const validateSession = () => {
      try {
        const sessionData = localStorage.getItem('currentUser');
        if (!sessionData) {
          setIsLoggedIn(false);
          setUserName('');
          setUserEmail('');
          return;
        }

        const session = JSON.parse(sessionData);
        
        // Check if session has required fields
        if (session && session.user && session.token) {
          // Validate token (simple check - token should exist)
          const tokenParts = session.token.split(':');
          if (tokenParts.length >= 2) {
            setIsLoggedIn(true);
            setUserName(session.user.name || 'User');
            setUserEmail(session.user.email || '');
          } else {
            // Invalid token format - clear session
            localStorage.removeItem('currentUser');
            setIsLoggedIn(false);
            setUserName('');
            setUserEmail('');
          }
        } else {
          // Invalid session - clear it
          localStorage.removeItem('currentUser');
          setIsLoggedIn(false);
          setUserName('');
          setUserEmail('');
        }
      } catch (error) {
        // If JSON parsing fails, clear session
        console.error('Session validation error:', error);
        localStorage.removeItem('currentUser');
        setIsLoggedIn(false);
        setUserName('');
        setUserEmail('');
      }
    };

    validateSession();

    // Re-validate when storage changes (for multi-tab support)
    const handleStorageChange = (event) => {
      if (event.key === 'currentUser') {
        validateSession();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // ===== SECURE LOGOUT =====
  const handleLogout = () => {
    try {
      // Clear session data
      localStorage.removeItem('currentUser');
      
      // Clear any other sensitive data
      // (Keep darkMode and other non-sensitive settings)
      
      // Reset state
      setIsLoggedIn(false);
      setUserName('');
      setUserEmail('');
      setIsDropdownOpen(false);
      
      // Dispatch logout event for other components
      window.dispatchEvent(new Event('logout'));
      
      // Redirect to home
      window.location.href = '/';
    } catch (error) {
      console.error('Logout error:', error);
      // Force logout even if error
      localStorage.removeItem('currentUser');
      setIsLoggedIn(false);
      setUserName('');
      setUserEmail('');
      window.location.href = '/';
    }
  };

  // ===== DARK MODE TOGGLE =====
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // ===== APPLY DARK MODE =====
  useEffect(() => {
    try {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
      if (darkMode) {
        document.body.classList.add('dark-theme');
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.body.classList.remove('dark-theme');
        document.documentElement.removeAttribute('data-theme');
      }
      window.dispatchEvent(new Event('themechange'));
    } catch (error) {
      console.error('Dark mode error:', error);
    }
  }, [darkMode]);

  // ===== CLOSE DROPDOWN ON OUTSIDE CLICK =====
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    // Add event listener with capture for better security
    document.addEventListener('mousedown', handleClickOutside, true);
    return () => document.removeEventListener('mousedown', handleClickOutside, true);
  }, []);

  // ===== PREVENT CLICKJACKING =====
  useEffect(() => {
    // Prevent site from being embedded in iframes
    if (window.top !== window.self) {
      window.top.location = window.self.location;
    }
  }, []);

  return (
    <header className="header-premium" role="banner">
      <div className="header-container">
        
        {/* ===== LOGO WITH IMAGE ===== */}
        <Link 
          to="/" 
          className="header-logo"
          aria-label="Quranic Signs Home"
        >
          <img 
            src="/images/logo.png"
            alt="Quranic Signs Logo" 
            className="header-logo-img"
            onError={(e) => {
              console.log('Logo failed to load, using fallback');
              e.target.style.display = 'none';
              const fallback = e.target.nextElementSibling;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <div className="logo-fallback" style={{ display: 'none' }}>
            <div className="logo-icon-text">QS</div>
          </div>
          <div className="logo-text">
            <span className="logo-title">Quranic Signs</span>
            <span className="logo-subtitle">Discover • Learn • Reflect</span>
          </div>
        </Link>

        {/* ===== NAVIGATION ===== */}
        <nav className="header-nav" role="navigation" aria-label="Main Navigation">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            aria-current={location.pathname === '/' ? 'page' : undefined}
          >
            Home
          </Link>
          <Link 
            to="/categories" 
            className={`nav-link ${location.pathname === '/categories' ? 'active' : ''}`}
            aria-current={location.pathname === '/categories' ? 'page' : undefined}
          >
            Categories
          </Link>
          <Link 
            to="/prophet" 
            className={`nav-link ${location.pathname === '/prophet' ? 'active' : ''}`}
            aria-current={location.pathname === '/prophet' ? 'page' : undefined}
          >
            Prophet
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            aria-current={location.pathname === '/about' ? 'page' : undefined}
          >
            About
          </Link>
        </nav>

        {/* ===== RIGHT SIDE: Dark Mode + Settings + Auth ===== */}
        <div className="header-actions">
          
          {/* ===== DARK MODE TOGGLE ===== */}
          <button 
            className="dark-toggle-btn" 
            onClick={toggleDarkMode}
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {darkMode ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          {/* ===== SETTINGS BUTTON ===== */}
          <Link 
            to="/settings" 
            className="header-settings-btn" 
            title="Settings"
            aria-label="Settings"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
          </Link>

          {/* ===== AUTH SECTION ===== */}
          {isLoggedIn ? (
            <div className="user-menu" ref={dropdownRef}>
              <button 
                className="user-avatar-btn"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-label={`User menu for ${userName}`}
                aria-expanded={isDropdownOpen}
              >
                <span className="user-avatar">{userName.charAt(0).toUpperCase()}</span>
              </button>

              {isDropdownOpen && (
                <div className="user-dropdown" role="menu">
                  <div className="dropdown-user-info">
                    <span className="dropdown-avatar">{userName.charAt(0).toUpperCase()}</span>
                    <div>
                      <p className="dropdown-name">{userName}</p>
                      <p className="dropdown-email">{userEmail}</p>
                    </div>
                  </div>
                  <div className="dropdown-divider"></div>
                  <button 
                    onClick={handleLogout} 
                    className="dropdown-logout-btn"
                    role="menuitem"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                      <polyline points="16 17 21 12 16 7"/>
                      <line x1="21" y1="12" x2="9" y2="12"/>
                    </svg>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="auth-buttons">
              <Link 
                to="/login" 
                className="auth-btn-header login-btn"
                aria-label="Login to your account"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="auth-btn-header signup-btn"
                aria-label="Create a new account"
              >
                Sign Up
              </Link>
            </div>
          )}

        </div>

        {/* ===== MOBILE MENU TOGGLE ===== */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`toggle-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`toggle-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`toggle-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* ===== MOBILE MENU ===== */}
        {isMenuOpen && (
          <div className="mobile-menu" role="menu">
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
            >
              Home
            </Link>
            <Link 
              to="/categories" 
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
            >
              Categories
            </Link>
            <Link 
              to="/prophet" 
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
            >
              Prophet
            </Link>
            <Link 
              to="/about" 
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
            >
              About
            </Link>
            
            {/* Dark Mode Toggle in Mobile */}
            <div 
              className="mobile-dark-toggle" 
              onClick={toggleDarkMode}
              role="menuitem"
            >
              <span>{darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}</span>
            </div>
            
            <Link 
              to="/settings" 
              onClick={() => setIsMenuOpen(false)} 
              className="mobile-link-settings"
              role="menuitem"
            >
              Settings
            </Link>
            
            {isLoggedIn ? (
              <>
                <div className="mobile-user-info">
                  <span className="mobile-avatar">{userName.charAt(0).toUpperCase()}</span>
                  <span className="mobile-user-name">{userName}</span>
                </div>
                <button 
                  onClick={() => { handleLogout(); setIsMenuOpen(false); }} 
                  className="mobile-cta logout-btn"
                  role="menuitem"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="mobile-cta login-mobile-btn" 
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem"
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="mobile-cta signup-mobile-btn" 
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;