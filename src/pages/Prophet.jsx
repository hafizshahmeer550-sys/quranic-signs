import React from 'react';
import { Link } from 'react-router-dom';

const Prophet = () => {
  const chapters = [
    {
      id: 1,
      title: "Birth & Early Life",
      subtitle: "570 CE - 610 CE",
      thumbnail: "/images/prophets/birth.jpg",
    },
    {
      id: 2,
      title: "The First Revelation",
      subtitle: "610 CE",
      thumbnail: "/images/prophets/revelation.jpg",
    },
    {
      id: 3,
      title: "Early Preaching & Opposition",
      subtitle: "610 CE - 613 CE",
      thumbnail: "/images/prophets/preaching.jpg",
    },
    {
      id: 4,
      title: "Migration to Abyssinia",
      subtitle: "615 CE",
      thumbnail: "/images/prophets/abyssinia.png",
    },
    {
      id: 5,
      title: "The Year of Sadness",
      subtitle: "619 CE",
      thumbnail: "/images/prophets/sadness.jpg",
    },
    {
      id: 6,
      title: "The Night Journey & Ascension",
      subtitle: "621 CE",
      thumbnail: "/images/prophets/isra.jpg",
    },
    {
      id: 7,
      title: "The Hijrah (Migration to Medina)",
      subtitle: "622 CE",
      thumbnail: "/images/prophets/hijrah.jpg",
    },
    {
      id: 8,
      title: "Establishment of the Islamic State",
      subtitle: "622 CE - 624 CE",
      thumbnail: "/images/prophets/medina.jpg",
    },
    {
      id: 9,
      title: "The Great Battles",
      subtitle: "624 CE - 630 CE",
      thumbnail: "/images/prophets/battles.jpg",
    },
    {
      id: 10,
      title: "The Conquest of Mecca",
      subtitle: "630 CE",
      thumbnail: "/images/prophets/conquest.jpg",
    },
    {
      id: 11,
      title: "The Farewell Pilgrimage",
      subtitle: "632 CE",
      thumbnail: "/images/prophets/farewell.jpg",
    },
    {
      id: 12,
      title: "The Passing of the Prophet",
      subtitle: "632 CE",
      thumbnail: "/images/prophets/passing.jpg",
    }
  ];

  return (
    <div className="prophet-page">
      <div className="container-premium">
        
        {/* Back Button */}
        <Link to="/" className="back-button-prophet">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="prophet-header-white">
          <h1 className="prophet-title-white">The Life of Prophet Muhammad</h1>
          <p className="prophet-subtitle-white">ﷺ • The Seal of the Prophets • A Mercy to the Worlds</p>
        </div>

        {/* Chapters Grid - Without Description */}
        <div className="prophet-chapters-white">
          {chapters.map((chapter) => (
            <Link 
              key={chapter.id} 
              to={`/prophet-chapter/${chapter.id}`} 
              className="prophet-chapter-card-white"
            >
              {/* Thumbnail */}
              <div className="chapter-thumbnail-3-1">
                <img 
                  src={chapter.thumbnail}
                  alt={chapter.title} 
                  className="chapter-thumbnail-img-3-1"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/600x200/1a6a3a/ffffff?text=Chapter+${chapter.id}`;
                  }}
                />
                <div className="chapter-thumbnail-overlay-3-1">
                  <span className="chapter-number-white">{String(chapter.id).padStart(2, '0')}</span>
                </div>
              </div>
              
              {/* Content - Without Description */}
              <div className="chapter-content-white">
                <h3 className="chapter-title-white">{chapter.title}</h3>
                <p className="chapter-subtitle-white">{chapter.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="prophet-footer-white">
          <p>May the peace and blessings of Allah be upon His final Messenger.</p>
          <p className="prophet-footer-sub-white">ﷺ</p>
        </div>

      </div>
    </div>
  );
};

export default Prophet;