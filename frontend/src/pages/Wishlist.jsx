import React from 'react';
import './Wishlist.css';

function Wishlist({ items, onRemove, onAddToCart, onHome }) {
  return (
    <div className="wishlist-page">
      <div className="container">
        <h1>My Wishlist</h1>

        {items.length === 0 ? (
          <div className="wishlist-empty">
            <p>❤️ Your wishlist is empty</p>
            <p className="subtitle">Save your favorite items to view them later</p>
            <button className="btn btn-primary" onClick={onHome}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="wishlist-content">
            <div className="wishlist-items">
              {items.map((item) => (
                <div className="wishlist-item" key={item.id}>
                  <img src={item.image_url} alt={item.name} />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="category">{item.category}</p>
                    <p className="price">₹{item.price}</p>
                    {item.original_price && (
                      <p className="original-price">
                        <span className="strikethrough">₹{item.original_price}</span>
                        <span className="discount">{Math.round((1 - item.price / item.original_price) * 100)}% OFF</span>
                      </p>
                    )}
                  </div>
                  <div className="item-actions">
                    <button
                      className="btn btn-primary full-width"
                      onClick={() => onAddToCart(item, 1)}
                    >
                      🛒 Add to Cart
                    </button>
                    <button
                      className="btn btn-secondary full-width"
                      onClick={() => onRemove(item.id)}
                    >
                      ❌ Remove from Wishlist
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="wishlist-summary">
              <h2>Wishlist Summary</h2>
              <div className="summary-info">
                <p><strong>Items in wishlist:</strong> {items.length}</p>
                <p><strong>Total value:</strong> ₹{items.reduce((sum, item) => sum + item.price, 0)}</p>
              </div>
              <button className="btn btn-primary full-width" onClick={onHome}>
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
