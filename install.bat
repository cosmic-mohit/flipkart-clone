@echo off
REM Installation script for Flipkart Clone (Windows)

echo.
echo 🚀 Installing Flipkart Clone...
echo.

REM Backend
echo 📦 Installing Backend dependencies...
cd backend
call npm install
echo ✅ Backend dependencies installed
echo.

REM Frontend
cd ..\frontend
echo 📦 Installing Frontend dependencies...
call npm install
echo ✅ Frontend dependencies installed
echo.

cd ..
echo ✅ All dependencies installed!
echo.
echo Next steps:
echo 1. Edit backend\.env with your PostgreSQL credentials
echo 2. Open terminal in 'backend' folder and run: npm start
echo 3. Open new terminal in 'frontend' folder and run: npm run dev
echo 4. Visit http://localhost:5173
echo.
pause
