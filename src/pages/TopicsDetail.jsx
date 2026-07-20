import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { topics } from '../data/topics';

const TopicDetail = () => {
  const { slug } = useParams();
  const [topic, setTopic] = useState(null);
  const [relatedTopics, setRelatedTopics] = useState([]);

  useEffect(() => {
    console.log("=== TOPIC DETAIL DEBUG ===");
    console.log("Slug from URL:", slug);
    console.log("All Topics:", topics);
    
    // Topic find karein
    const foundTopic = topics.find(t => t.slug === slug);
    console.log("Found Topic:", foundTopic);
    
    setTopic(foundTopic);

    // Related topics find karein
    if (foundTopic) {
      const related = topics.filter(t => 
        t.category === foundTopic.category && t.slug !== slug
      ).slice(0, 3);
      setRelatedTopics(related);
    }
  }, [slug]);

  // Agar topic nahi mila
  if (!topic) {
    return (
      <div className="loading-container-glass">
        <div className="loading-card-glass">
          <div className="loading-spinner-glass"></div>
          <p style={{ fontSize: '18px', color: '#1a2a1a' }}>Loading... Topic not found</p>
          <p style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
            Slug: <strong>{slug || '(empty)'}</strong>
          </p>
          <Link to="/" style={{ marginTop: '20px', color: '#1a6a3a', textDecoration: 'underline' }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="topic-detail-page-glass">
      <div className="container-premium">
        
        {/* Back Button */}
        <Link to="/" className="back-button-glass">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Home
        </Link>

        {/* Main Content */}
        <div className="topic-detail-wrapper-glass">
          
          {/* Breadcrumb */}
          <div className="topic-breadcrumb-glass">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/categories">Categories</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">{topic.category}</span>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-active">{topic.title}</span>
          </div>

          {/* Header */}
          <div className="topic-header-glass">
            <div className="topic-header-top">
              <span className="topic-category-badge">{topic.category}</span>
              <div className="topic-meta-glass">
                <span className="meta-item">
                  <span className="meta-icon">📄</span>
                  {topic.articles?.length || 0} Articles
                </span>
                <span className="meta-item">
                  <span className="meta-icon">📖</span>
                  {topic.verses?.length || 0} References
                </span>
              </div>
            </div>
            <h1 className="topic-title-glass">{topic.title}</h1>
          </div>

          {/* Description */}
          <div className="topic-description-glass">
            <p>{topic.description || 'No description available.'}</p>
          </div>

          {/* Quranic References */}
          {topic.verses && topic.verses.length > 0 && (
            <div className="topic-references-glass">
              <h3 className="section-title-glass">
                <span className="title-icon">🕌</span>
                Quranic References
              </h3>
              <div className="references-grid-glass">
                {topic.verses.map((verse, index) => {
                  const ref = typeof verse === 'string' ? verse : verse.reference;
                  const arabic = typeof verse === 'string' ? null : verse.arabic;
                  const translation = typeof verse === 'string' ? null : verse.translation;
                  return (
                    <div key={index} className="reference-item-glass">
                      <div className="reference-header">
                        <span className="reference-number">{ref}</span>
                        <span className="reference-index">#{index + 1}</span>
                      </div>
                      {arabic && (
                        <div className="reference-arabic-glass" dir="rtl">
                          {arabic}
                        </div>
                      )}
                      {translation && (
                        <div className="reference-translation-glass">
                          {translation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Articles */}
          {topic.articles && topic.articles.length > 0 && (
            <div className="topic-articles-glass">
              <h3 className="section-title-glass">
                <span className="title-icon">📚</span>
                Related Articles
              </h3>
              <div className="articles-grid-glass">
                {topic.articles.map((article, index) => (
                  <div key={index} className="article-item-glass">
                    <span className="article-number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="article-text">{article}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Topics */}
          {relatedTopics.length > 0 && (
            <div className="related-topics-glass">
              <h3 className="section-title-glass">
                <span className="title-icon">🔗</span>
                Related Topics
              </h3>
              <div className="related-grid-glass">
                {relatedTopics.map((related) => (
                  <Link 
                    key={related.id} 
                    to={`/topic/${related.slug}`}
                    className="related-item-glass"
                  >
                    <h4 className="related-title">{related.title}</h4>
                    <p className="related-desc">
                      {related.description ? related.description.substring(0, 80) + '...' : 'No description'}
                    </p>
                    <span className="related-link">Read More →</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="topic-nav-glass">
            <Link to="/categories" className="nav-btn-glass secondary">
              ← All Categories
            </Link>
            <Link to="/surah" className="nav-btn-glass primary">
              Read Quran →
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TopicDetail;