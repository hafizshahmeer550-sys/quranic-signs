import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

const Home = () => {
  const featuredCategories = categories.slice(0, 4);

  const categoryImages = {
    'astronomy-space': '/images/categories/astronomy.jpg',
    'earth-geology': '/images/categories/earth.jpg',
    'water-oceans': '/images/categories/water-oceans.jpg',
    'animals-zoology': '/images/categories/animals-zoology.jpg',
    'plants-agriculture': '/images/categories/plants-agriculture.jpg',
    'human-body': '/images/categories/human-body.jpg',
    'time-creation': '/images/categories/time-creation.jpg',
    'physics-chemistry': '/images/categories/physics-chemistry.jpg',
    'spirituality-morals': '/images/categories/spirituality-morals.jpg',
    'quran-revelation': '/images/categories/quran-revelation.jpg'
  };

  const heroImage = '/images/home.jpg';
  const home2Image = '/images/home2.jpg';
  const prophetImage = '/images/prophet.jpg';

  return (
    <div className="home-premium">
      <div className="container-premium">
        
        {/* ===== TOP BAR ===== */}
        <div className="top-bar">
          <div className="top-bar-left">
            <button className="menu-btn">☰</button>
            <span className="app-title">Quranic Signs</span>
          </div>
          <div className="top-bar-right">
            {/* Search and Settings buttons removed - now in sidebar */}
          </div>
        </div>

        <div className="main-layout">
          {/* ===== SIDEBAR ===== */}
          <aside className="sidebar-concrete">
            <div className="sidebar-concrete-logo">
              <span className="concrete-logo-title">QURANIC</span>
              <span className="concrete-logo-sub">SIGNS</span>
              <span className="concrete-logo-tagline">INPLANING · LEARNING · DEVELOP</span>
            </div>

            <nav className="sidebar-concrete-nav">
              <Link to="/" className="concrete-nav-item active">
                <span>Home</span>
              </Link>
              <Link to="/surah" className="concrete-nav-item">
                <span>Read Quran</span>
              </Link>
              <Link to="/prophet" className="concrete-nav-item">
                <span>Explore Prophet's Life</span>
              </Link>
              <Link to="/categories" className="concrete-nav-item">
                <span>Categories</span>
              </Link>
              <Link to="/settings" className="concrete-nav-item">
                <span>Settings</span>
              </Link>
            </nav>

            <div className="sidebar-concrete-footer">
              {/* Settings button removed - now in nav above */}
            </div>
          </aside>

          {/* ===== MAIN CONTENT ===== */}
          <main className="main-content">
            
            {/* ===== HERO IMAGE ===== */}
            <div className="image-hero-card-full">
              <img 
                src={heroImage}
                alt="Quranic Signs" 
                className="image-hero-bg-full"
              />
              <div className="image-hero-overlay-full">
                <div className="image-hero-content-full">
                  <div className="hero-badge-full">
                    <span className="badge-dot-full"></span>
                    Allah Says
                  </div>
                  <div className="hero-arabic-full">
                    ذَلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ
                  </div>
                  <p className="hero-translation-full">
                    "This is the Book about which there is no doubt, 
                    <span className="translation-highlight-full">a guidance for those conscious of Allah.</span>"
                  </p>
                  <p className="hero-reference-full">(Al-Baqarah 2:2)</p>
                  <div className="hero-actions-full">
                    <Link to="/surah" className="hero-btn-full primary">Read Quran</Link>
                    <Link to="/categories" className="hero-btn-full secondary">Explore Topics</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== QURANIC TOPICS ===== */}
            <div className="topics-header">
              <div>
                <h2 className="section-title">Quranic Topics & Science</h2>
                <p className="section-subtitle">Discover the wonders of the Quran through knowledge and scientific exploration.</p>
              </div>
              <Link to="/categories" className="explore-btn">Explore Now →</Link>
            </div>

            {/* ===== CATEGORIES WITH IMAGES ===== */}
            <div className="categories-grid-image">
              {featuredCategories.map((category) => {
                const imageUrl = categoryImages[category.slug] || '/images/categories/default.jpg';
                return (
                  <Link 
                    key={category.id} 
                    to={`/category/${category.slug}`} 
                    className="category-image-card"
                  >
                    <div className="category-image-wrapper">
                      <img 
                        src={imageUrl}
                        alt={category.name} 
                        className="category-card-img"
                      />
                      <div className="category-image-overlay">
                        <div className="category-image-content">
                          <h4 className="category-image-name">{category.name}</h4>
                          <span className="category-image-count">{category.topics} Articles →</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* ===== EXPLORE BUTTON WITH PROPHET IMAGE ===== */}
            <Link to="/prophet" className="explore-button-card">
              <img 
                src={prophetImage}
                alt="Prophet" 
                className="explore-button-bg"
              />
              <div className="explore-button-overlay">
                <div className="explore-button-content-simple">
                  <span className="explore-only-text">Explore</span>
                  <span className="explore-only-arrow">→</span>
                </div>
              </div>
            </Link>

            {/* ===== HOME2 IMAGE ===== */}
            <div className="home2-image-only">
              <img 
                src={home2Image}
                alt="Quranic Signs" 
                className="home2-image-only-img"
              />
            </div>

            {/* ===== DAILY VERSE ===== */}
            <div className="daily-verse-premium">
              <div className="daily-verse-arabic">وَمَنْ يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجًا</div>
              <p className="daily-verse-translation">"And whoever fears Allah – He will make for him a way out."</p>
              <p className="daily-verse-ref">(At-Talaq 65:2)</p>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;