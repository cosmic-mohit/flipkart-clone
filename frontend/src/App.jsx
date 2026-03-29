import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (e) {
      return [];
    }
  });
  const [wishlist, setWishlist] = useState(() => {
    try {
      const savedWishlist = localStorage.getItem('wishlist');
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    } catch (e) {
      return [];
    }
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product, quantity) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity === 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      ));
    }
  };

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    setCurrentPage('detail');
  };

  const handleCheckout = (orderId) => {
    setOrderId(orderId);
    setCart([]);
    setCurrentPage('confirmation');
  };

  const addToWishlist = (product) => {
    if (!wishlist.find(item => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter(item => item.id !== productId));
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  return (
    <div className="app">
      <Header
        cartCount={cart.length}
        wishlistCount={wishlist.length}
        onCartClick={() => setCurrentPage('cart')}
        onWishlistClick={() => setCurrentPage('wishlist')}
        onHomeClick={() => setCurrentPage('home')}
      />

      {currentPage === 'home' && (
        <ProductListing
          onViewProduct={handleViewProduct}
          onAddToCart={addToCart}
        />
      )}
      {currentPage === 'detail' && selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onBack={() => setCurrentPage('home')}
          onAddToCart={addToCart}
          onAddToWishlist={addToWishlist}
          onRemoveFromWishlist={removeFromWishlist}
          isInWishlist={isInWishlist(selectedProduct.id)}
        />
      )}
      {currentPage === 'cart' && (
        <Cart
          items={cart}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
          onCheckout={() => setCurrentPage('checkout')}
          onContinueShopping={() => setCurrentPage('home')}
        />
      )}
      {currentPage === 'wishlist' && (
        <Wishlist
          items={wishlist}
          onRemove={removeFromWishlist}
          onAddToCart={addToCart}
          onHome={() => setCurrentPage('home')}
        />
      )}
      {currentPage === 'checkout' && (
        <Checkout
          items={cart}
          onPlaceOrder={handleCheckout}
          onBack={() => setCurrentPage('cart')}
        />
      )}
      {currentPage === 'confirmation' && (
        <OrderConfirmation
          orderId={orderId}
          onContinueShopping={() => setCurrentPage('home')}
        />
      )}
    </div>
  );
}

export default App;
