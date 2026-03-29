# 🚀 DEPLOYMENT GUIDE - Deploy Your Flipkart Clone

## Overview
- **Backend**: Render (Free, includes PostgreSQL database)
- **Frontend**: Vercel or Netlify (Free, includes CDN)
- **Total Setup Time**: ~30 minutes

---

## **STEP 2: Push Code to GitHub**

### 2.1 Initialize Git Repository

```bash
cd c:\flipkart-clone

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Flipkart Clone - Full Stack E-Commerce Application"
```

### 2.2 Create GitHub Repository

1. Go to: https://github.com/new
2. Repository name: `flipkart-clone`
3. Description: "Full-stack e-commerce Flipkart clone with React, Node.js, and PostgreSQL"
4. Make it Public (required for free deployment)
5. Click "Create repository"

### 2.3 Push to GitHub

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/flipkart-clone.git

# Rename branch to main
git branch -M main

# Push code
git push -u origin main
```

**Done!** Your code is now on GitHub.

---

## **STEP 3: Deploy Backend on Render**

### 3.1 Create Render Account

1. Go to: https://render.com
2. Sign up with GitHub (easier!)
3. Authorize Render to access your GitHub

### 3.2 Create Web Service for Backend

1. Click **"New +"** → **"Web Service"**
2. Connect Repository:
   - Search for: `flipkart-clone`
   - Click "Connect"
3. Fill in Details:
   - **Name**: `flipkart-clone-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Region**: Choose nearest to you (e.g., "Singapore" or "US East")
   - **Pricing Plan**: `Free`

4. Click **"Create Web Service"**

### 3.3 Add Environment Variables

After service is created, go to **"Environment"** tab:

Click **"Add Environment Variable"** and add:

```
DATABASE_URL = postgres://postgresql-username:password@postgres-host:5432/flipkart_clone
PORT = 5000
NODE_ENV = production
```

⚠️ **Important**: Get DATABASE_URL from Step 3.4 below

### 3.4 Create PostgreSQL Database on Render

1. Go to: https://dashboard.render.com
2. Click **"New +"** → **"PostgreSQL"**
3. Fill Details:
   - **Name**: `flipkart-clone-db`
   - **Database**: `flipkart_clone`
   - **User**: `postgres` (or choose custom)
   - **Region**: Same as backend service
   - **Pricing**: `Free`

4. Click **"Create Database"**

5. Wait 2-3 minutes for database to be ready

6. Copy the **Internal Database URL** (shown on the page)

7. Go back to your backend service → **Environment tab**

8. Update `DATABASE_URL` with the copied URL

9. **Redeploy** backend (Render auto-deploys on env change)

#### Your Backend URL will be:
```
https://flipkart-clone-backend.onrender.com
API Base URL: https://flipkart-clone-backend.onrender.com/api
```

---

## **STEP 4: Deploy Frontend on Vercel**

### 4.1 Deploy from GitHub

1. Go to: https://vercel.com
2. Click **"Import Project"**
3. Select **"Import Git Repository"**
4. Paste your repository URL:
   ```
   https://github.com/YOUR_USERNAME/flipkart-clone
   ```
5. Click "Continue"

### 4.2 Configure Frontend

1. **Select Root Directory**: `./frontend`
2. **Framework Preset**: `Vite`
3. Click **"Continue"**

### 4.3 Add Environment Variables

1. **Click "Environment Variables"**
2. Add this variable:
   ```
   VITE_API_URL = https://flipkart-clone-backend.onrender.com/api
   ```
3. Click **"Deploy"**

⚠️ **Wait** - This might take 2-3 minutes to build and deploy.

#### Your Frontend URL will be:
```
https://flipkart-clone-YOUR_USERNAME.vercel.app
```

---

## **STEP 5: Test Everything**

### 5.1 Check Backend Health

Go to: `https://flipkart-clone-backend.onrender.com/api/products`

You should see JSON array of products.

### 5.2 Check Frontend

Go to: `https://flipkart-clone-YOUR_USERNAME.vercel.app`

You should see your Flipkart clone homepage with all products!

### 5.3 Test Full Flow

1. ✅ Browse products
2. ✅ Filter by category
3. ✅ View product details
4. ✅ Add to cart
5. ✅ Checkout and place order
6. ✅ See order confirmation

---

## **FINAL URLS**

Share these with your evaluators:

```
🌐 Frontend (Live Site):
https://flipkart-clone-YOUR_USERNAME.vercel.app

🔌 Backend API:
https://flipkart-clone-backend.onrender.com/api

📦 GitHub Repository:
https://github.com/YOUR_USERNAME/flipkart-clone
```

---

## **Troubleshooting Guide**

### Problem: "Cannot GET /api/products"
**Solution**: 
- Check backend service is running on Render dashboard
- Verify DATABASE_URL is correct
- Check logs: Render Dashboard → Backend Service → Logs

### Problem: Frontend shows "Network Error"
**Solution**:
- Verify VITE_API_URL in Vercel environment variables
- Redeploy frontend after updating env variables
- Check console (F12) for exact error

### Problem: "CORS Error"
**Solution**:
Add this to backend `index.js` before routes:

```javascript
const cors = require('cors');
app.use(cors());
```

Then:
```bash
npm install cors
```

And redeploy.

### Problem: Database connection fails
**Solution**:
- Get the Internal Database URL from Render
- Make sure it's in DATABASE_URL env variable
- Wait 5 minutes after creating database

---

## **OPTIONAL: Custom Domain**

### Add Custom Domain to Vercel

1. Buy domain from: GoDaddy, Namecheap, Google Domains, etc.
2. Go to Vercel → Project Settings → Domains
3. Add your custom domain
4. Update DNS settings (Vercel will guide you)

**Result**: Your site at: `https://yourdomainname.com`

---

## **Backup: Netlify Alternative**

If Vercel has issues, use **Netlify**:

1. Go to: https://netlify.com
2. Click "Add New Project" → "Import an existing project"
3. Connect GitHub → Select repository
4. **Build command**: `npm install && npm run build`
5. **Publish directory**: `frontend/dist`
6. Add environment variable:
   ```
   VITE_API_URL=https://your-backend-url/api
   ```
7. Deploy!

---

## **All Done! 🎉**

Your Flipkart clone is now **LIVE** and accessible via a public link!

Remember:
- ✅ Render free tier sleeps after 15 minutes of inactivity
- ✅ Vercel has unlimited free tier
- ✅ Always commit changes and push to GitHub
- ✅ Both platforms auto-deploy on push to main branch

Share your live link with instructors/evaluators!
