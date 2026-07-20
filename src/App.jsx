import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ===== PAGES =====
import Home from './pages/Home';
import About from './pages/About';
import Categories from './pages/Categories';           // ✅ Capital C
import CategoryTopics from './pages/CategoryTopics';   // ✅ Capital C
import TopicDetail from './pages/TopicsDetail';        // ✅ Capital T
import SurahPage from './pages/SurahPage';
import SurahDetail from './pages/SurahDetail';
import Prophet from './pages/Prophet';
import ProphetChapter from './pages/ProphetChapter';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Signup from './pages/Signup';

// ===== COMPONENTS =====
import Header from './components/Header';
import Footer from './components/Footer';

// ===== STYLES =====
import './styles/index.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    const handleThemeChange = () => {
      const saved = localStorage.getItem('darkMode');
      const isDark = saved !== null ? JSON.parse(saved) : false;
      setDarkMode(isDark);
    };
    window.addEventListener('themechange', handleThemeChange);
    return () => window.removeEventListener('themechange', handleThemeChange);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      document.documentElement.removeAttribute('data-theme');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className={`app-container ${darkMode ? 'dark-theme' : ''}`}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:slug" element={<CategoryTopics />} />
          <Route path="/topic/:slug" element={<TopicDetail />} />
          <Route path="/surah" element={<SurahPage />} />
          <Route path="/surah/:id" element={<SurahDetail />} />
          <Route path="/prophet" element={<Prophet />} />
          <Route path="/prophet-chapter/:id" element={<ProphetChapter />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;