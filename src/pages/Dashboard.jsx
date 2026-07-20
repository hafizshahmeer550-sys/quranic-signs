import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { topics } from '../data/topics';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalCategories: 0,
    totalTopics: 0,
    totalArticles: 0,
    totalVerses: 0
  });

  const [recentTopics, setRecentTopics] = useState([]);
  const [popularCategories, setPopularCategories] = useState([]);

  useEffect(() => {
    // Calculate Stats
    const totalCategories = categories.length;
    const totalTopics = topics.length;
    
    let totalArticles = 0;
    let totalVerses = 0;
    topics.forEach(topic => {
      if (topic.articles) totalArticles += topic.articles.length;
      if (topic.verses) totalVerses += topic.verses.length;
    });

    setStats({
      totalCategories,
      totalTopics,
      totalArticles,
      totalVerses
    });

    // Recent Topics (last 6)
    setRecentTopics(topics.slice(-6).reverse());

    // Popular Categories
    const categoryCount = {};
    topics.forEach(topic => {
      if (categoryCount[topic.category]) {
        categoryCount[topic.category]++;
      } else {
        categoryCount[topic.category] = 1;
      }
    });

    const sortedCategories = Object.entries(categoryCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4)
      .map(([slug, count]) => {
        const cat = categories.find(c => c.slug === slug);
        return { ...cat, topicCount: count };
      });

    setPopularCategories(sortedCategories);
  }, []);

  return (
    <div className="py-8 px-4">
      <div className="container-custom">
        {/* Welcome Header */}
        <div className="glass-card p-8 mb-8 bg-gradient-to-r from-[#1a5a3a]/10 to-[#2a7a4a]/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-[#1a2a1a]">
                👋 Welcome to Dashboard!
              </h1>
              <p className="text-gray-500 text-lg mt-1">
                Explore the wonders of the Quran through knowledge and science
              </p>
            </div>
            <div className="flex gap-3">
              <Link to="/surah">
                <button className="btn-primary text-sm px-6 py-2">
                  📖 Read Quran
                </button>
              </Link>
              <Link to="/categories">
                <button className="btn-outline text-sm px-6 py-2">
                  Explore Topics
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="glass-card p-6 text-center bg-gradient-to-br from-emerald-50 to-teal-50">
            <div className="text-4xl mb-2">📚</div>
            <div className="text-3xl font-bold text-[#1a6a3a]">{stats.totalCategories}</div>
            <div className="text-sm text-gray-500">Categories</div>
          </div>
          <div className="glass-card p-6 text-center bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="text-4xl mb-2">📖</div>
            <div className="text-3xl font-bold text-[#1a6a3a]">{stats.totalTopics}</div>
            <div className="text-sm text-gray-500">Topics</div>
          </div>
          <div className="glass-card p-6 text-center bg-gradient-to-br from-amber-50 to-orange-50">
            <div className="text-4xl mb-2">📝</div>
            <div className="text-3xl font-bold text-[#1a6a3a]">{stats.totalArticles}</div>
            <div className="text-sm text-gray-500">Articles</div>
          </div>
          <div className="glass-card p-6 text-center bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="text-4xl mb-2">🕌</div>
            <div className="text-3xl font-bold text-[#1a6a3a]">{stats.totalVerses}</div>
            <div className="text-sm text-gray-500">Quranic References</div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Popular Categories */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold text-[#1a2a1a] mb-4">🔥 Popular Categories</h3>
            <div className="space-y-3">
              {popularCategories.map((cat) => (
                <Link 
                  key={cat.id} 
                  to={`/category/${cat.slug}`}
                  className="flex items-center justify-between p-3 bg-white/50 rounded-xl hover:bg-white/80 transition-all hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{cat.icon}</span>
                    <div>
                      <p className="font-semibold text-[#1a2a1a]">{cat.name}</p>
                      <p className="text-xs text-gray-400">{cat.topicCount} Topics</p>
                    </div>
                  </div>
                  <span className="text-[#1a6a3a]">→</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold text-[#1a2a1a] mb-4">⚡ Quick Links</h3>
            <div className="space-y-3">
              <Link to="/surah" className="flex items-center justify-between p-3 bg-white/50 rounded-xl hover:bg-white/80 transition-all hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📖</span>
                  <div>
                    <p className="font-semibold text-[#1a2a1a]">Read Quran</p>
                    <p className="text-xs text-gray-400">Explore the words of Allah</p>
                  </div>
                </div>
                <span className="text-[#1a6a3a]">→</span>
              </Link>
              <Link to="/categories" className="flex items-center justify-between p-3 bg-white/50 rounded-xl hover:bg-white/80 transition-all hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🔍</span>
                  <div>
                    <p className="font-semibold text-[#1a2a1a]">All Categories</p>
                    <p className="text-xs text-gray-400">Explore all topics</p>
                  </div>
                </div>
                <span className="text-[#1a6a3a]">→</span>
              </Link>
              <Link to="/about" className="flex items-center justify-between p-3 bg-white/50 rounded-xl hover:bg-white/80 transition-all hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">ℹ️</span>
                  <div>
                    <p className="font-semibold text-[#1a2a1a]">About</p>
                    <p className="text-xs text-gray-400">Learn more about us</p>
                  </div>
                </div>
                <span className="text-[#1a6a3a]">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Topics */}
        <div className="mt-6">
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold text-[#1a2a1a] mb-4">📌 Recent Topics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recentTopics.map((topic) => (
                <Link 
                  key={topic.id} 
                  to={`/topic/${topic.slug}`}
                  className="p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-all hover:shadow-md"
                >
                  <h4 className="font-semibold text-[#1a2a1a] group-hover:text-[#1a6a3a] transition-colors">
                    {topic.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                    {topic.description.substring(0, 80)}...
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs bg-[#1a6a3a]/10 text-[#1a6a3a] px-2 py-0.5 rounded-full">
                      {topic.category}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;