import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const SurahDetail = () => {
  const { id } = useParams();
  const [surah, setSurah] = useState(null);
  const [verses, setVerses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [fontSize, setFontSize] = useState(22);

  // ===== LANGUAGE OPTIONS =====
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ur', name: 'Urdu' },
    { code: 'hi', name: 'Hindi' },
    { code: 'ar', name: 'Arabic' },
    { code: 'fa', name: 'Persian' },
    { code: 'fr', name: 'French' },
    { code: 'es', name: 'Spanish' },
    { code: 'zh', name: 'Chinese' }
  ];

  // ===== QURAN API TRANSLATION EDITIONS =====
  const translationEditions = {
    en: 'en.asad',
    ur: 'ur.jalandhry',
    hi: 'hi.farooq',
    ar: 'ar.alafasy',
    fa: 'fa.ghomshei',
    fr: 'fr.hamidullah',
    es: 'es.cortes',
    zh: 'zh.jian'
  };

  useEffect(() => {
    const fetchSurah = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const edition = translationEditions[selectedLanguage] || 'en.asad';
        const response = await fetch(`https://api.alquran.cloud/v1/surah/${id}/editions/quran-uthmani,${edition}`);
        const data = await response.json();
        
        if (data.code === 200 && data.data && data.data.length >= 2) {
          const arabicEdition = data.data[0];
          const translationEdition = data.data[1];
          
          const combinedVerses = arabicEdition.ayahs.map((ayah, index) => ({
            number: ayah.numberInSurah,
            arabic: ayah.text,
            translation: translationEdition.ayahs[index]?.text || 'Translation not available'
          }));
          
          setSurah({
            name: arabicEdition.name,
            arabicName: arabicEdition.name,
            meaning: translationEdition.name || 'Surah',
            verses: arabicEdition.ayahs.length,
            type: arabicEdition.revelationType || 'Unknown'
          });
          setVerses(combinedVerses);
        } else {
          setError('Failed to load Surah. Please try again.');
        }
      } catch (err) {
        console.error('Error fetching Surah:', err);
        setError('Network error. Please check your connection.');
      }
      
      setLoading(false);
    };

    fetchSurah();
  }, [id, selectedLanguage]);

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  // Font size controls
  const increaseFont = () => {
    if (fontSize < 32) setFontSize(fontSize + 2);
  };

  const decreaseFont = () => {
    if (fontSize > 14) setFontSize(fontSize - 2);
  };

  if (loading) {
    return (
      <div className="loading-container-glass">
        <div className="loading-card-glass">
          <div className="loading-spinner-glass"></div>
          <p>Loading Surah...</p>
        </div>
      </div>
    );
  }

  if (error || !surah) {
    return (
      <div className="loading-container-glass">
        <div className="loading-card-glass">
          <p>{error || 'Surah not found'}</p>
          <Link to="/surah" className="back-button-glass" style={{ marginTop: '16px', display: 'inline-block' }}>
            ← Back to Surahs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="surah-detail-page">
      <div className="container-premium">
        
        {/* Back Button */}
        <Link to="/surah" className="back-button-glass">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Surahs
        </Link>

        {/* Surah Header - Eye Comfort */}
        <div className="surah-header-glass eye-comfort-header">
          <div className="surah-header-content">
            {/* Language Selector - Left */}
            <div className="language-selector-direct">
              <label className="lang-label-direct">🌐 Language</label>
              <select 
                className="lang-select-direct"
                value={selectedLanguage}
                onChange={handleLanguageChange}
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Surah Info - Right */}
            <div className="surah-info-right">
              <h1 className="surah-title-glass eye-comfort-title">{surah.name}</h1>
              <p className="surah-arabic-glass eye-comfort-arabic">{surah.arabicName || surah.name}</p>
              <p className="surah-meta-glass">
                {surah.verses} Verses • {surah.type}
              </p>
            </div>
          </div>

          {/* Font Size Controls */}
          <div className="font-controls">
            <button className="font-btn" onClick={decreaseFont} aria-label="Decrease font size">
              <span className="font-icon">A</span>
              <span className="font-size-label">−</span>
            </button>
            <span className="font-size-display">{fontSize}px</span>
            <button className="font-btn" onClick={increaseFont} aria-label="Increase font size">
              <span className="font-icon">A</span>
              <span className="font-size-label">+</span>
            </button>
          </div>
        </div>

        {/* Verses - Eye Comfort Layout */}
        <div className="verses-container-glass eye-comfort-container">
          {verses.map((ayah, index) => (
            <div key={index} className="verse-item-glass eye-comfort-verse">
              <div className="verse-number-glass eye-comfort-number">{ayah.number || index + 1}</div>
              <div className="verse-content-glass">
                <div className="verse-arabic-glass" dir="rtl" style={{ fontSize: `${fontSize + 4}px` }}>
                  {ayah.arabic}
                </div>
                <div className="verse-translation-glass" style={{ fontSize: `${fontSize - 4}px` }}>
                  {ayah.translation || 'Translation not available'}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SurahDetail;