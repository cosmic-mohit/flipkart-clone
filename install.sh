#!/bin/bash
# Installation script for Flipkart Clone

echo "🚀 Installing Flipkart Clone..."

# Backend
echo "📦 Installing Backend dependencies..."
cd backend
npm install
echo "✅ Backend dependencies installed"

# Frontend
cd ../frontend
echo "📦 Installing Frontend dependencies..."
npm install
echo "✅ Frontend dependencies installed"

cd ..
echo "✅ All dependencies installed!"
echo ""
echo "Next steps:"
echo "1. Edit backend/.env with your PostgreSQL credentials"
echo "2. Open terminal in 'backend' folder and run: npm start"
echo "3. Open new terminal in 'frontend' folder and run: npm run dev"
echo "4. Visit http://localhost:5173"
