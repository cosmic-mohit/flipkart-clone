import React, { useEffect, useState } from 'react';
import { orderService } from '../services/api';
import './OrderConfirmation.css';

function OrderConfirmation({ orderId, onContinueShopping }) {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await orderService.getOrderById(orderId);
        setOrder(response.data);
      } catch (err) {
        console.error('Error fetching order:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (loading) return <div className="container"><p>Loading order details...</p></div>;

  return (
    <div className="confirmation-page">
      <div className="container">
        <div className="confirmation-card">
          <div className="success-icon">✓</div>
          <h1>Order Placed Successfully!</h1>

          <div className="confirmation-details">
            <p className="order-id">Order ID: <strong>{orderId}</strong></p>
            <p className="message">Thank you for your order. We'll send you an email confirmation soon.</p>

            {order && (
              <>
                <div className="order-info">
                  <h3>Order Details</h3>
                  <p><strong>Customer:</strong> {order.user_name}</p>
                  <p><strong>Email:</strong> {order.user_email}</p>
                  <p><strong>Total Amount:</strong> ₹{order.total_amount}</p>
                  <p><strong>Shipping Address:</strong> {order.shipping_address}</p>
                  <p><strong>Status:</strong> <span className="status">{order.status}</span></p>
                </div>

                <div className="order-items">
                  <h3>Items Ordered</h3>
                  {order.items && order.items.map((item, idx) => (
                    <div className="item-row" key={idx}>
                      <span>{item.name} x {item.quantity}</span>
                      <span>₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            <div className="delivery-info">
              <h3>Expected Delivery</h3>
              <p>Your order will be delivered within 5-7 business days.</p>
            </div>
          </div>

          <button className="btn btn-primary full-width" onClick={onContinueShopping}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
