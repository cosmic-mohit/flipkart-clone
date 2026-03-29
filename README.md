# Flipkart Clone - Full Stack E-Commerce Application

A functional e-commerce web application that replicates Flipkart's design and user experience. Built with React, Node.js, and PostgreSQL.

## 🎯 Features

### Core Features (Implemented)
- ✅ **Product Listing** - Grid layout with category filters and search functionality
- ✅ **Product Details** - Image carousel, specifications, and stock information
- ✅ **Shopping Cart** - Add/remove items, update quantities, persistent storage
- ✅ **Checkout** - Shipping address form with order summary
- ✅ **Order Confirmation** - Order ID generation and confirmation page

### Bonus Features
- ✅ **Responsive Design** - Mobile, tablet, and desktop optimized
- ✅ **Sample Data** - 12+ products across multiple categories
- ✅ **Order Tracking** - View order details and items

## 🛠️ Tech Stack

| Component | Technology |
|-----------|------------|
| Frontend | React 18 + Vite |
| Backend | Node.js + Express |
| Database | PostgreSQL |
| HTTP Client | Axios |
| Styling | CSS3 |

## 📋 Project Structure

```
flipkart-clone/
├── frontend/
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API calls
│   │   ├── App.jsx          # Main app component
│   │   └── main.jsx         # Entry point
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── .env
├── backend/
│   ├── src/
│   │   ├── controllers/     # Business logic
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Express middleware
│   │   ├── db.js            # Database connection
│   │   ├── init-db.js       # Create tables
│   │   ├── seed-data.js     # Sample data
│   │   └── index.js         # Server entry point
│   ├── package.json
│   └── .env
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- PostgreSQL 12+
- npm or yarn

### 1. Install PostgreSQL (Windows)

Download from: https://www.postgresql.org/download/windows/

**Setup:**
- Install with default options
- Remember your password for `postgres` user
- Default port: 5432

### 2. Create Database

```bash
# Open PostgreSQL command line
psql -U postgres

# Create database
CREATE DATABASE flipkart_clone;

# Exit
\q
```

### 3. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Update .env with your database credentials
# Edit: backend/.env
DATABASE_URL=postgres://postgres:your_password@localhost:5432/flipkart_clone

# Start server
npm start
# or for development with auto-reload:
npm run dev
```

Server runs on: `http://localhost:5000`

### 4. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

App runs on: `http://localhost:5173`

## 📍 API Endpoints

### Products
- `GET /api/products` - Get all products (with filters)
- `GET /api/products/:id` - Get single product
- `GET /api/products/categories` - Get all categories

**Query Parameters:**
- `category=Electronics` - Filter by category
- `search=laptop` - Search products

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders/:orderId` - Get order by ID
- `GET /api/orders` - Get all orders

## 🗄️ Database Schema

### Products Table
```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description TEXT,
  price DECIMAL(10, 2),
  category VARCHAR(100),
  stock INT,
  image_url VARCHAR(500),
  created_at TIMESTAMP
);
```

### Orders Table
```sql
CREATE TABLE orders (
  id TEXT PRIMARY KEY,
  user_name VARCHAR(255),
  user_email VARCHAR(255),
  total_amount DECIMAL(10, 2),
  shipping_address TEXT,
  status VARCHAR(50),
  created_at TIMESTAMP
);
```

### Order Items Table
```sql
CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id TEXT REFERENCES orders(id),
  product_id INT REFERENCES products(id),
  quantity INT,
  price DECIMAL(10, 2),
  created_at TIMESTAMP
);
```

## 🎨 UI Components

### Frontend Components
- **Header** - Navigation with cart counter
- **ProductCard** - Individual product display
- **ProductListing** - Grid layout with filters
- **ProductDetail** - Detailed view with carousel
- **Cart** - Shopping cart view
- **Checkout** - Order placement form
- **OrderConfirmation** - Order success page

## 🔍 Key Features Explained

### 1. Product Filtering
- Real-time search across product names
- Category-based filtering
- Combined filters (category + search)

### 2. Shopping Cart
- Local storage persistence (survives page refresh)
- Quantity management
- Automatic price calculation including GST

### 3. Order Management
- UUID-based order IDs
- Database transactions for consistency
- Stock updates on order placement

### 4. Responsive Design
- Mobile-first approach
- Breakpoints: 480px, 768px, 1024px
- Touch-friendly interactions

## 🐛 Troubleshooting

### Backend won't start
```bash
# Check if port 5000 is already in use
# Kill process on port 5000 or change PORT in .env
```

### Database connection error
```bash
# Verify PostgreSQL is running
psql -U postgres

# Check DATABASE_URL in backend/.env
# Format: postgres://username:password@host:port/database
```

### Frontend can't reach backend
```bash
# Make sure backend is running on port 5000
# Check VITE_API_URL in frontend/.env
# Verify CORS is enabled in backend/src/index.js
```

### CSS not loading
```bash
# Make sure you're in frontend directory
# Run: npm install
# Clear browser cache (Ctrl+Shift+Delete)
```

## 📦 Deployment

### Backend (Render.com)
1. Push to GitHub
2. Create new Web Service on Render
3. Connect GitHub repository
4. Set Environment: Node
5. Build Command: `npm install`
6. Start Command: `npm start`
7. Add env variable: `DATABASE_URL`

### Frontend (Vercel)
1. Push to GitHub
2. Import project in Vercel
3. Root Directory: `frontend`
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Add env variable: `VITE_API_URL=your_render_backend_url`

## 📝 Sample Data

The database is automatically seeded with 12 products across categories:
- Electronics (Headphones, Webcam, Monitor Light)
- Peripherals (Keyboard, Mouse)
- Accessories (Phone Case, Power Bank, Laptop Stand)
- Cables (USB-C Cable, USB Hub)
- Office (Desk Lamp, Phone Holder)

## 🔐 Assumptions

- Single default user (no authentication required as per spec)
- Sample product images from placeholder service
- Orders stored permanently (not deleted)
- Stock updates happen only on confirmed orders
- GST fixed at 18%

## 📄 Code Quality

- Clean, modular component structure
- Separation of concerns (UI, Business Logic, API)
- Reusable components and services
- CSS with CSS variables for theming
- Error handling and loading states
- Responsive design throughout

## 🤝 Contributing

This is a learning project. Ensure you understand every line of code before submission.

## 📧 Support

For issues or questions, check the troubleshooting section or review the database schema.

---

**Last Updated:** March 2026
**Version:** 1.0.0
