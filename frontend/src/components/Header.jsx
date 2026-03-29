import React from 'react';
import './Header.css';

function Header({ cartCount, wishlistCount = 0, onCartClick, onWishlistClick, onHomeClick }) {
  return (
    <header className="header">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="header-logo-section">
              <div className="logo" onClick={onHomeClick}>
                <span className="logo-icon">🛍️</span>
                <span className="logo-text">Flipkart</span>
              </div>
            </div>
          
            {/* Search Bar */}
            <div className="search-bar-wrapper">
              <div className="search-bar">
                <span className="search-icon">🔍</span>
                <input type="text" placeholder="Search for Products, Brands and More" />
              </div>
            </div>

            {/* Right Section */}
            <div className="header-right">
              <button className="header-btn account-btn">
                <span className="icon">👤</span>
                <span className="text">Login</span>
                <span className="dropdown">▼</span>
              </button>
              <button className="header-btn more-btn">
                <span className="text">More</span>
                <span className="dropdown">▼</span>
              </button>
              <button className="wishlist-btn header-btn" onClick={onWishlistClick}>
                <span className="icon">❤️</span>
                {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
              </button>
              <button className="cart-btn header-btn" onClick={onCartClick}>
                <span className="icon">🛒</span>
                <span className="text">Cart</span>
                {cartCount > 0 && <span className="badge">{cartCount}</span>}
              </button>
            </div>
          </div>
        </div>
      </header>
  );
}

export default Header;
