# How to Deploy Your Portfolio Website

Quick guide for deploying to Vercel (easiest and recommended).

## Before You Deploy

### 1. Add Your Photos (Optional but recommended)
```bash
# Add these files to public/images/:
- profile.jpg (your headshot, 800x800px recommended)
- og-image.jpg (for social media, 1200x630px recommended)
```

Then uncomment the image code in `components/Hero.tsx` (line ~177-182)

### 2. Add Your CV
```bash
# Add your CV to public/cv/:
- Souleymane_Saidou_Abouba_CV.pdf
```

### 3. Test Locally
```bash
# Run development server
npm run dev
```
Visit http://localhost:3000 and check everything works

---

## Deploy to Vercel (Free & Easy)

### Method 1: Using Vercel Website (Easiest)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Go to https://vercel.com** and sign in with GitHub

3. **Click "Add New Project"**

4. **Import your GitHub repository**
   - Find "Personal_website" in the list
   - Click "Import"

5. **Configure (use defaults)**
   - Framework: Next.js (auto-detected)
   - Root Directory: ./
   - Build Command: `npm run build`
   - Click "Deploy"

6. **Wait 2-3 minutes** for deployment

7. **Your site is live!** 🎉
   - You'll get a URL like: `https://your-portfolio.vercel.app`
   - Visit it and test everything

### Method 2: Using Command Line

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Production deployment
vercel --prod
```

---

## After Deployment

### Update Your Domain (when ready)
1. In Vercel dashboard → Settings → Domains
2. Add your custom domain
3. Update `lib/data/personal.ts` with your actual domain

### Auto-Deploy on Every Update
- Push to GitHub = Automatic deployment
- No need to manually redeploy!

```bash
# Make changes locally
git add .
git commit -m "Updated projects"
git push origin main
# Vercel automatically deploys! 🚀
```

---

## Troubleshooting

### Build fails?
1. Run `npm run build` locally to see errors
2. Check the Vercel build logs
3. Make sure all dependencies are in `package.json`

### Images not showing?
- Check file paths are correct
- Files must be in `public/` folder
- Use absolute paths: `/images/photo.jpg`

---

**That's it! Your portfolio is now live on the internet! 🌐**
