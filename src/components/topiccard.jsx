import React from 'react';
import { Link } from 'react-router-dom';

const TopicCard = ({ topic }) => {
  return (
    <Link to={`/topic/${topic.id}`}>
      <div className="glass-card rounded-xl overflow-hidden transition-all hover:shadow-royal hover:-translate-y-1 group">
        {/* Image */}
        <div className="relative h-40 overflow-hidden">
          <img
            src={topic.image}
            alt={topic.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent"></div>
          <span className="absolute bottom-3 left-3 text-white text-xs font-medium bg-dark/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
            {topic.category}
          </span>
        </div>
        
        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-royal text-sm truncate">{topic.title}</h3>
          <p className="text-xs text-dark-light/50 mt-1 line-clamp-2">{topic.description}</p>
          <div className="flex items-center gap-3 mt-2 text-[10px] text-dark-light/40">
            <span>📖 {topic.ayahs?.length || 0} references</span>
            <span>•</span>
            <span>{topic.articles?.length || 0} articles</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TopicCard;