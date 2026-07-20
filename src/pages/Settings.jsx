import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Settings = () => {
  // ===== DARK MODE STATE =====
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? JSON.parse(saved) : false;
  });

  // ===== NOTIFICATIONS STATE =====
  const [notifications, setNotifications] = useState(() => {
    const saved = localStorage.getItem('notifications');
    return saved !== null ? JSON.parse(saved) : true;
  });

  // ===== APPLY DARK MODE =====
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add('dark-theme');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      document.documentElement.removeAttribute('data-theme');
    }
    window.dispatchEvent(new Event('themechange'));
  }, [darkMode]);

  // ===== APPLY NOTIFICATIONS =====
  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [notifications]);

  // ===== RESET SETTINGS =====
  const resetSettings = () => {
    setDarkMode(false);
    setNotifications(true);
    localStorage.setItem('darkMode', JSON.stringify(false));
    localStorage.setItem('notifications', JSON.stringify(true));
    document.body.classList.remove('dark-theme');
    document.documentElement.removeAttribute('data-theme');
    window.dispatchEvent(new Event('themechange'));
    alert('All settings reset to default!');
  };

  return (
    <div className="settings-page">
      <div className="container-premium">
        
        {/* Back Button */}
        <Link to="/" className="back-button-prophet">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Home
        </Link>

        {/* Settings Header */}
        <div className="settings-header-glass">
          <h1 className="settings-title">Settings</h1>
          <p className="settings-subtitle">Customize your Quranic Signs experience</p>
        </div>

        {/* Settings Grid */}
        <div className="settings-grid">
          
          {/* ===== DARK MODE ===== */}
          <div className="settings-card-glass">
            <div className="settings-card-header">
              <h3 className="settings-card-title">Dark Mode</h3>
            </div>
            <div className="settings-toggle-wrapper">
              <div className="toggle-label">
                <span>{darkMode ? 'On' : 'Off'}</span>
              </div>
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={darkMode} 
                  onChange={() => setDarkMode(!darkMode)} 
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
            <p className="settings-card-desc">
              {darkMode ? 'Dark theme is currently active' : 'Light theme is currently active'}
            </p>
          </div>

          {/* ===== NOTIFICATIONS ===== */}
          <div className="settings-card-glass">
            <div className="settings-card-header">
              <h3 className="settings-card-title">Notifications</h3>
            </div>
            <div className="settings-toggle-wrapper">
              <div className="toggle-label">
                <span>{notifications ? 'On' : 'Off'}</span>
              </div>
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={notifications} 
                  onChange={() => setNotifications(!notifications)} 
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
            <p className="settings-card-desc">
              {notifications ? 'Notifications are enabled' : 'Notifications are disabled'}
            </p>
          </div>

          {/* ===== RESET ===== */}
          <div className="settings-card-glass reset-card">
            <div className="settings-card-header">
              <h3 className="settings-card-title">Reset Settings</h3>
            </div>
            <button className="reset-btn-settings" onClick={resetSettings}>
              Reset to Default
            </button>
            <p className="settings-card-desc">
              Reset all settings to their default values
            </p>
          </div>

        </div>

        {/* Settings Footer */}
        <div className="settings-footer">
          <p>Settings are saved automatically</p>
        </div>

      </div>
    </div>
  );
};

export default Settings;