import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://flipkart-clone-sbmp.onrender.com/api';

export const productService = {
  getProducts: (category, search) => {
    let url = `${API_BASE_URL}/products`;
    const params = [];
    if (category) params.push(`category=${category}`);
    if (search) params.push(`search=${search}`);
    if (params.length) url += '?' + params.join('&');
    return axios.get(url);
  },

  getProductById: (id) => {
    return axios.get(`${API_BASE_URL}/products/${id}`);
  },

  getCategories: () => {
    return axios.get(`${API_BASE_URL}/products/categories`);
  },

  updateProductStock: (productId, quantity) => {
    return axios.put(`${API_BASE_URL}/products/${productId}/stock`, { productId, quantity });
  }
};

export const orderService = {
  createOrder: (orderData) => {
    return axios.post(`${API_BASE_URL}/orders`, orderData);
  },

  getOrderById: (orderId) => {
    return axios.get(`${API_BASE_URL}/orders/${orderId}`);
  },

  getAllOrders: () => {
    return axios.get(`${API_BASE_URL}/orders`);
  }
};
