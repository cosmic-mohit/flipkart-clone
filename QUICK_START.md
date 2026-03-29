# Flipkart Clone - QUICK START GUIDE

## ⏱️ Timeline: 24 Hours to Submission

### STEP 1: Database Setup (10 minutes)

#### Windows PostgreSQL Installation
1. Download: https://www.postgresql.org/download/windows/
2. Install with defaults (password = your choice, remember it!)
3. Port 5432 is default

#### Create Database
```bash
# Open Command Prompt or PowerShell
psql -U postgres

# Type your postgres password when prompted

# In psql terminal, run:
CREATE DATABASE flipkart_clone;
\q
```

---

### STEP 2: Backend Setup (5 minutes)

```bash
cd c:\flipkart-clone\backend

# Install dependencies
npm install

# !!IMPORTANT!! Edit .env file
# Update: DATABASE_URL=postgres://postgres:YOUR_PASSWORD@localhost:5432/flipkart_clone
# Change YOUR_PASSWORD to the password you set for postgres
```

**Test backend:**
```bash
npm start
# You should see: "✅ Database tables created successfully"
# You should see: "✅ Sample data seeded successfully"
# You should see: "🚀 Server running on http://localhost:5000"
```

**Keep this terminal running!**

---

### STEP 3: Frontend Setup (5 minutes)

**Open a NEW terminal** (don't close the backend one)

```bash
cd c:\flipkart-clone\frontend

# Install dependencies
npm install

# Start dev server
npm run dev
# You should see: "http://localhost:5173/  ready in XX ms"
```

---

### STEP 4: Test Everything Works

1. Open browser: `http://localhost:5173`
2. You should see product listing page
3. Try searching/filtering products
4. Click on a product → see details
5. Add to cart → see cart update
6. Go to cart → update quantities
7. Checkout → fill form
8. Place order → see confirmation with Order ID

---

### STEP 5: Push to GitHub

```bash
# Initialize git (one-time)
cd c:\flipkart-clone
git init
git add .
git commit -m "Initial commit: Flipkart clone submission"

# Create repo on Github.com first (flipkart-clone)
# Then push:
git remote add origin https://github.com/YOUR_USERNAME/flipkart-clone.git
git branch -M main
git push -u origin main
```

---

### STEP 6: Deploy Backend (Render)

1. Go to render.com (free signup)
2. Click "New Web Service"
3. Connect GitHub → select flipkart-clone repo
4. **Settings:**
   - Name: `flipkart-clone-backend`
   - Environment: `Node`
   - Build Command: `cd backend && npm install`
   - Start Command: `cd backend && npm start`
   - Root Directory: `.` (leave empty)

5. **Environment Variables:**
   - Key: `DATABASE_URL`
   - Value: `postgres://YOUR_USERNAME:YOUR_PASSWORD@pg.railway.app:5432/flipkart_clone` (OR use your own PostgreSQL)

6. Deploy! (takes 2-3 minutes)
7. Copy the deployment URL (e.g., https://flipkart-clone-backend.onrender.com)

---

### STEP 7: Deploy Frontend (Vercel)

1. Go to vercel.com (free signup)
2. Click "Import Project"
3. Select your GitHub repo `flipkart-clone`
4. **Settings:**
   - Framework: `Vite`
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`

5. **Environment Variables:**
   - Name: `VITE_API_URL`
   - Value: `https://flipkart-clone-backend.onrender.com/api`

6. Deploy! (takes 1-2 minutes)
7. Copy the deployment URL (e.g., https://flipkart-clone.vercel.app)

---

### STEP 8: Final Submission

You now have:
- ✅ GitHub Repository: `https://github.com/YOUR_USERNAME/flipkart-clone`
- ✅ Backend Deployed: `https://flipkart-clone-backend.onrender.com`
- ✅ Frontend Deployed: `https://flipkart-clone.vercel.app`

**Submit both URLs!**

---

## 🆘 Quick Troubleshooting

### "Cannot connect to database"
→ Check .env DATABASE_URL is correct
→ Make sure PostgreSQL is running

### "Port 5000 already in use"
→ Change PORT in backend/.env to 5001, 5002, etc.

### "Frontend shows errors"
→ Make sure backend is running first
→ Check browser console (F12)

### "Build fails on Render/Vercel"
→ Check you committed all files to GitHub
→ Look at deploy logs for specific errors

---

## 📝 What to Study Before Interview

1. **Database Schema** → How orders, products, order_items relate
2. **API Flow** → How frontend calls backend endpoints
3. **Cart Logic** → How localStorage + state management works
4. **Order Placement** → Database transactions, stock updates
5. **React Components** → Props, State, Side effects

---

## ✅ Checklist Before 3 PM Submission

- [ ] Local testing complete (all features working)
- [ ] GitHub repository created and pushed
- [ ] Backend deployed to Render
- [ ] Frontend deployed to Vercel
- [ ] Environment variables set correctly
- [ ] URLs submitted (GitHub + Live app)
- [ ] README file in GitHub repo
- [ ] Can explain every file in your code

---

**Good luck! You've got this! 🚀**
