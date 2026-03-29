import React from 'react';
import './Cart.css';

function Cart({ items, onRemove, onUpdateQuantity, onCheckout, onContinueShopping }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="empty-cart">
            <p>🛒 Your cart is empty</p>
            <button className="btn btn-primary" onClick={onContinueShopping}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {items.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image_url} alt={item.name} />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>₹{item.price}</p>
                  </div>
                  <div className="item-quantity">
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                    <input type="number" value={item.quantity} readOnly />
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <div className="item-price">
                    <p>₹{item.price * item.quantity}</p>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => onRemove(item.id)}
                  >
                    ✕ Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="summary-row">
                <span>Tax (18% GST)</span>
                <span>₹{tax}</span>
              </div>
              <div className="summary-row shipping">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
              <button className="btn btn-primary full-width" onClick={onCheckout}>
                Proceed to Checkout
              </button>
              <button className="btn btn-secondary full-width" onClick={onContinueShopping}>
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
