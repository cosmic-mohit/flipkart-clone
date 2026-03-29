import React, { useState } from 'react';
import { orderService, productService } from '../services/api';
import './Checkout.css';

function Checkout({ items, onPlaceOrder, onBack }) {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.userName || !formData.address || !formData.city) {
      setError('Please fill in all required fields');
      return;
    }

    setLoading(true);

    try {
      // Create order
      const response = await orderService.createOrder({
        items,
        userName: formData.userName,
        userEmail: formData.userEmail,
        shippingAddress: `${formData.address}, ${formData.city}, ${formData.state} ${formData.zipcode}`,
        totalAmount: total
      });

      // Update stock for each product
      for (const item of items) {
        try {
          await productService.updateProductStock(item.id, item.quantity);
        } catch (stockErr) {
          console.error(`Failed to update stock for product ${item.id}:`, stockErr.message);
        }
      }

      onPlaceOrder(response.data.orderId);
    } catch (err) {
      setError('Failed to place order. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-page">
      <div className="container">
        <button className="back-btn" onClick={onBack}>← Back</button>

        <div className="checkout-content">
          {/* Shipping Address Form */}
          <div className="checkout-form">
            <h2>Shipping Address</h2>
            <form onSubmit={handlePlaceOrder}>
              <input
                type="text"
                name="userName"
                placeholder="Full Name *"
                value={formData.userName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="userEmail"
                placeholder="Email"
                value={formData.userEmail}
                onChange={handleChange}
              />
              <input
                type="text"
                name="address"
                placeholder="Street Address *"
                value={formData.address}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City *"
                value={formData.city}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
              />
              <input
                type="text"
                name="zipcode"
                placeholder="ZIP Code"
                value={formData.zipcode}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />

              {error && <div className="error-message">{error}</div>}

              <button type="submit" className="btn btn-primary full-width" disabled={loading}>
                {loading ? 'Processing...' : 'Place Order'}
              </button>
            </form>
          </div>

          {/* Order Review */}
          <div className="order-review">
            <h2>Order Summary</h2>
            <div className="review-items">
              {items.map((item) => (
                <div className="review-item" key={item.id}>
                  <span>{item.name} x {item.quantity}</span>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="review-summary">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="summary-row">
                <span>Tax (18%)</span>
                <span>₹{tax}</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
