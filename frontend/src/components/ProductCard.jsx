import React from 'react';
import './ProductCard.css';

function ProductCard({ product, onViewProduct, onAddToCart }) {
  const [quantity, setQuantity] = React.useState(1);
  const rating = Math.floor(Math.random() * 2) + 3.5; // 3.5-4.5
  const reviews = Math.floor(Math.random() * 5000) + 100;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image_url} alt={product.name} />
        <span className="category-badge">{product.category}</span>
        {product.stock < 10 && <span className="low-stock-badge">Only {product.stock} left</span>}
        <span className="offer-badge">Up to 25% off</span>
      </div>
      <div className="product-body">
        <h3 className="product-name">{product.name}</h3>
        
        <div className="rating-section">
          <span className="stars">★★★★☆</span>
          <span className="rating-text">{rating}</span>
          <span className="review-count">({reviews.toLocaleString()})</span>
        </div>

        <div className="price-section">
          <span className="price">₹{product.price.toLocaleString()}</span>
          <span className="original-price">₹{Math.round(product.price * 1.3).toLocaleString()}</span>
          <span className="discount">{Math.round((1 - product.price / (product.price * 1.3)) * 100)}% off</span>
        </div>

        <div className="delivery-section">
          <span className="delivery">Free delivery</span>
        </div>

        <div className="button-group">
          <button
            className="btn btn-secondary"
            onClick={() => onViewProduct(product)}
          >
            View
          </button>
          <button
            className="btn btn-primary"
            onClick={() => onAddToCart(product, quantity)}
            disabled={product.stock === 0}
          >
            Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
