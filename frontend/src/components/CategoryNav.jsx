import React from 'react';
import './CategoryNav.css';

function CategoryNav({ categories, selectedCategory, onCategorySelect }) {
  const categoryIcons = {
    'Electronics': '📱',
    'Fashion': '👕',
    'Home': '🏠',
    'Beauty': '💄',
    'Sports': '⚽',
    'Books': '📚',
  };

  return (
    <nav className="category-nav">
      <div className="container">
        <div className="categories-scroll">
          <button 
            className={`category-item ${!selectedCategory ? 'active' : ''}`}
            onClick={() => onCategorySelect('For You')}
          >
            <span className="category-icon">🎯</span>
            <span className="category-name">For You</span>
          </button>

          {categories.map((category) => (
            <button
              key={category}
              className={`category-item ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => onCategorySelect(category)}
            >
              <span className="category-icon">{categoryIcons[category] || '📦'}</span>
              <span className="category-name">{category}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default CategoryNav;
