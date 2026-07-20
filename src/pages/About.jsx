import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page">
      <div className="container-premium">
        
        {/* Back Button */}
        <Link to="/" className="back-button-prophet">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Home
        </Link>

        {/* About Header */}
        <div className="about-header-glass">
          <h1 className="about-title-glass">About Quranic Signs</h1>
          <p className="about-subtitle-glass">Discover the wonders of the Quran through knowledge, science, and spiritual insight</p>
        </div>

        {/* Motive Section */}
        <div className="about-motive-card">
          <div className="motive-content">
            <h2 className="motive-title">Our Motive</h2>
            <p className="motive-text">
              Quranic Signs is dedicated to helping people discover the miraculous signs, 
              scientific revelations, and divine guidance in the Holy Quran. Our mission 
              is to bridge faith and knowledge, making the Quran's wisdom accessible to 
              everyone. We believe that the Quran is not just a religious text but a 
              comprehensive guide for all aspects of life, including science, morality, 
              and spirituality. Through our platform, we aim to inspire a deeper 
              understanding and appreciation of the Quran's timeless messages.
            </p>
          </div>
        </div>

        {/* Contact Section with Email */}
        <div className="about-contact-card">
          <div className="contact-content">
            <h3 className="contact-title">Get in Touch</h3>
            <p className="contact-text">
              Have questions, suggestions, or feedback? We'd love to hear from you!
            </p>
            <a href="mailto:quranicsigns6@gmail.com" className="contact-email">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              quranicsigns6@gmail.com
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="about-footer-glass">
          <p className="footer-quote">
            "We will show them Our signs in the horizons and within themselves until it becomes clear to them that it is the truth."
          </p>
          <p className="footer-ref">(Fussilat 41:53)</p>
        </div>

      </div>
    </div>
  );
};

export default About;