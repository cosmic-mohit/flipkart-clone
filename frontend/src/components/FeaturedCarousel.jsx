import React, { useState, useEffect } from 'react';
import './FeaturedCarousel.css';

function FeaturedCarousel({ products, onViewProduct }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  // Featured products (take first 8)
  const featuredProducts = products.slice(0, 8);

  useEffect(() => {
    if (!autoScroll || featuredProducts.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [autoScroll, featuredProducts.length]);

  const handlePrev = () => {
    setAutoScroll(false);
    setCurrentIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
    setTimeout(() => setAutoScroll(true), 5000);
  };

  const handleNext = () => {
    setAutoScroll(false);
    setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
    setTimeout(() => setAutoScroll(true), 5000);
  };

  if (featuredProducts.length === 0) return null;

  // Calculate visible products (show 4 at a time on desktop, 2 on mobile)
  const itemsPerSlide = window.innerWidth <= 768 ? 2 : 4;
  const visibleProducts = [];
  for (let i = 0; i < itemsPerSlide; i++) {
    visibleProducts.push(featuredProducts[(currentIndex + i) % featuredProducts.length]);
  }

  return (
    <div className="featured-carousel">
      <div className="carousel-container">
        <button className="carousel-arrow prev" onClick={handlePrev} aria-label="Previous">
          ❮
        </button>

        <div className="carousel-track">
          <div className="carousel-items">
            {visibleProducts.map((product, idx) => (
              <div
                key={`${product.id}-${idx}`}
                className="carousel-item"
                onClick={() => onViewProduct(product)}
              >
                <div className="item-image">
                  <img src={product.image_url} alt={product.name} />
                  <span className="category-badge">{product.category}</span>
                </div>
                <div className="item-info">
                  <h4 className="item-name">{product.name}</h4>
                  <div className="item-price">
                    <span className="price">₹{product.price.toLocaleString()}</span>
                    <span className="offer">25% off</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-arrow next" onClick={handleNext} aria-label="Next">
          ❯
        </button>
      </div>

      {/* Dots indicator */}
      <div className="carousel-dots">
        {featuredProducts.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setAutoScroll(false);
              setCurrentIndex(idx);
              setTimeout(() => setAutoScroll(true), 5000);
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturedCarousel;
