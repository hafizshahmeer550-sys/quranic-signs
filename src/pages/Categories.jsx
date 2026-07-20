import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

const Categories = () => {
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

  console.log("All Categories:", categories); // Debug

  return (
    <div className="categories-page">
      <div className="container-premium">
        
        {/* Page Header */}
        <div className="categories-header-glass">
          <h1 className="page-title-glass">Quranic Topics & Science</h1>
          <p className="page-subtitle-glass">
            Discover the wonders of the Quran through knowledge and scientific exploration.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="categories-grid-glass">
          {categories.map((category) => {
            console.log("Category Slug:", category.slug); // Debug - Check slug
            const imageUrl = categoryImages[category.slug] || '/images/categories/default.jpg';
            return (
              <Link 
                key={category.id} 
                to={`/category/${category.slug}`} 
                className="category-glass-card"
              >
                <div className="category-glass-wrapper">
                  <img 
                    src={imageUrl}
                    alt={category.name} 
                    className="category-glass-img"
                  />
                  <div className="category-glass-overlay">
                    <div className="category-glass-content">
                      <h4 className="category-glass-name">{category.name}</h4>
                      <p className="category-glass-desc">{category.description}</p>
                      <span className="category-glass-count">{category.topics} Articles →</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer */}
        <div className="categories-footer">
          <p>© 2026 Quranic Signs. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;