import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { topics } from '../data/topics';

const CategoryTopics = () => {
  const { slug } = useParams();
  const [category, setCategory] = useState(null);
  const [categoryTopics, setCategoryTopics] = useState([]);

  useEffect(() => {
    console.log("=== CATEGORY TOPICS DEBUG ===");
    console.log("1. Slug from URL:", slug);
    console.log("2. Type of slug:", typeof slug);
    console.log("3. All Categories:", categories);
    
    // Check if slug is empty or undefined
    if (!slug || slug === '') {
      console.log("❌ Slug is empty!");
      setCategory(null);
      setCategoryTopics([]);
      return;
    }

    // Category find karein
    const foundCategory = categories.find(cat => cat.slug === slug);
    console.log("4. Found Category:", foundCategory);
    
    setCategory(foundCategory);

    if (foundCategory) {
      // Topics filter karein
      const filteredTopics = topics.filter(topic => topic.category === slug);
      console.log("5. Filtered Topics:", filteredTopics);
      console.log("6. Total Topics Count:", filteredTopics.length);
      setCategoryTopics(filteredTopics);
    } else {
      console.log("❌ Category NOT found for slug:", slug);
      setCategoryTopics([]);
    }
  }, [slug]);

  // Agar category nahi mili
  if (!category) {
    return (
      <div className="loading-container-glass">
        <div className="loading-card-glass">
          <div className="loading-spinner-glass"></div>
          <p style={{ fontSize: '18px', color: '#1a2a1a' }}>Loading... Category not found</p>
          <p style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
            Slug: <strong>{slug || '(empty)'}</strong>
          </p>
          <p style={{ fontSize: '13px', color: '#999', marginTop: '5px' }}>
            Available slugs: {categories.map(c => c.slug).join(', ')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="category-topics-page">
      <div className="container-premium">
        
        {/* Back Button */}
        <Link to="/categories" className="back-button-glass">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Categories
        </Link>

        {/* Category Header */}
        <div className="category-header-glass">
          <div className="category-header-content">
            <div>
              <span className="category-badge">{categoryTopics.length} Topics</span>
              <h1 className="category-title-glass">{category.name}</h1>
              <p className="category-desc-glass">{category.description}</p>
            </div>
          </div>
        </div>

        {/* Topics Grid */}
        {categoryTopics.length > 0 ? (
          <div className="topics-grid-glass">
            {categoryTopics.map((topic, index) => (
              <Link 
                key={topic.id} 
                to={`/topic/${topic.slug}`} 
                className="topic-glass-card"
              >
                <div className="topic-glass-content">
                  <span className="topic-glass-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="topic-glass-title">{topic.title}</h3>
                  
                  <p className="topic-glass-desc">
                    {topic.description 
                      ? topic.description.substring(0, 120) + '...' 
                      : 'No description available'}
                  </p>
                  
                  {topic.verses && topic.verses.length > 0 && (
                    <div className="topic-glass-references">
                      <span className="ref-label">References:</span>
                      <div className="ref-tags-glass">
                        {topic.verses.slice(0, 3).map((verse, idx) => {
                          const ref = typeof verse === 'string' ? verse : verse.reference;
                          return (
                            <span key={idx} className="ref-tag-glass">{ref}</span>
                          );
                        })}
                        {topic.verses.length > 3 && (
                          <span className="ref-more-glass">+{topic.verses.length - 3}</span>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="topic-glass-footer">
                    <span className="topic-glass-articles">
                      {topic.articles?.length || 0} Articles
                    </span>
                    <span className="topic-glass-arrow">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="empty-state-glass">
            <p>No topics found for this category.</p>
            <p style={{ fontSize: '14px', color: '#999', marginTop: '10px' }}>
              Category: {category.name} | Slug: {slug}
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default CategoryTopics;