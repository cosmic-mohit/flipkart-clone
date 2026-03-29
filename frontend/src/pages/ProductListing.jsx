import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import FeaturedCarousel from '../components/FeaturedCarousel';
import { productService } from '../services/api';
import './ProductListing.css';

function ProductListing({ onViewProduct, onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetchProducts(selectedCategory);
    } else {
      fetchProducts();
    }
  }, [selectedCategory]);

  const fetchCategories = async () => {
    try {
      const res = await productService.getCategories();
      setCategories(res.data || []);
    } catch (err) {
      console.error('Error fetching categories:', err);
    }
  };

  const fetchProducts = async (category = null) => {
    try {
      setLoading(true);
      setError(null);
      const res = await productService.getProducts(category || '', '');
      setProducts(res.data || []);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError('Failed to load products. Make sure the backend is running on http://localhost:5000');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="product-listing">
      {/* Featured Carousel - Auto-Sliding Products */}
      {!selectedCategory && products.length > 0 && (
        <FeaturedCarousel products={products} onViewProduct={onViewProduct} />
      )}

      {/* Category Navigation */}
      <div className="category-nav">
        <div className="container">
          <div className="categories-scroll">
            <button 
              className={`category-btn ${selectedCategory === null ? 'active' : ''}`}
              onClick={() => setSelectedCategory(null)}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2>{selectedCategory ? `${selectedCategory} - Best Deals` : 'Best Deals on Electronics'}</h2>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="loading-container">
            <p>Loading products...</p>
          </div>
        ) : error ? (
          <div className="error-container">
            <p>⚠️ {error}</p>
            <button onClick={() => fetchProducts(selectedCategory)} className="retry-btn">Retry</button>
          </div>
        ) : products.length === 0 ? (
          <div className="empty-container">
            <p>No products available</p>
          </div>
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewProduct={onViewProduct}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default ProductListing;
