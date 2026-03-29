import React, { useState } from 'react';
import './ProductDetail.css';

function ProductDetail({ product, onBack, onAddToCart, onAddToWishlist, onRemoveFromWishlist, isInWishlist }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product.image_url);
  const [notification, setNotification] = useState('');

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setNotification('✓ Added to cart');
    setTimeout(() => setNotification(''), 2000);
  };

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      onRemoveFromWishlist(product.id);
      setNotification('✓ Removed from wishlist');
    } else {
      onAddToWishlist(product);
      setNotification('✓ Added to wishlist');
    }
    setTimeout(() => setNotification(''), 2000);
  };

  const images = [
    product.image_url,
    `https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop&crop=faces`,
    `https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop&crop=faces`
  ];

  return (
    <div className="product-detail-page">
      <div className="container">
        <button className="back-btn" onClick={onBack}>← Back</button>

        <div className="detail-content">
          {/* Image Section */}
          <div className="image-section">
            <div className="main-image">
              <img src={selectedImage} alt={product.name} />
            </div>
            <div className="thumbnail-carousel">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`View ${idx + 1}`}
                  className={`thumbnail ${selectedImage === img ? 'active' : ''}`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="details-section">
            <span className="category">{product.category}</span>
            <h1 className="product-title">{product.name}</h1>

            <div className="rating">
              ⭐ 4.5 (2,345 ratings)
            </div>

            <div className="price-info">
              <span className="price">₹{product.price}</span>
              <span className="original-price">₹{Math.round(product.price * 1.2)}</span>
              <span className="discount">25% off</span>
            </div>

            <div className="stock-info">
              {product.stock > 0 ? (
                <span className="in-stock">✓ {product.stock} in stock</span>
              ) : (
                <span className="out-stock">✗ Out of stock</span>
              )}
            </div>

            <div className="description">
              <h3>About this product</h3>
              <p>{product.description}</p>
            </div>

            <div className="specifications">
              <h3>Specifications</h3>
              <ul>
                <li><strong>Category:</strong> {product.category}</li>
                <li><strong>In Stock:</strong> {product.stock} units</li>
                <li><strong>Warranty:</strong> 1 Year</li>
                <li><strong>Return Period:</strong> 30 Days</li>
              </ul>
            </div>

            {/* Action Section */}
            <div className="action-section">
              <div className="quantity-selector">
                <label>Quantity:</label>
                <div className="quantity-btns">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity === 1}
                  >-</button>
                  <input type="number" value={quantity} readOnly />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={quantity >= product.stock}
                  >+</button>
                </div>
              </div>

              <button
                className="btn btn-primary large"
                onClick={handleAddToCart}
                disabled={product.stock === 0}
              >
                🛒 Add to Cart
              </button>

              <button 
                className={`btn ${isInWishlist ? 'btn-wishlist-active' : 'btn-secondary'} large`}
                onClick={handleWishlistToggle}
              >
                {isInWishlist ? '❤️ Remove from Wishlist' : '🤍 Add to Wishlist'}
              </button>
            </div>

            {notification && (
              <div className="notification">{notification}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
