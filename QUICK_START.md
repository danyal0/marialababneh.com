# 🚀 Quick Start Guide

## Your website is **ready to deploy!** ✅

---

## ⚡ Run Locally (Development)

```bash
cd /workspace
npm run dev
```

Open: http://localhost:3000

---

## 📦 Deploy to Production

### **Option 1: Vercel (Easiest - Recommended)**

1. Go to [vercel.com](https://vercel.com)
2. Sign up / Log in
3. Click **"Import Project"**
4. Connect to your GitHub repository
5. Click **"Deploy"**
6. Done! ✨

**Custom Domain:**
- Go to project settings in Vercel
- Click "Domains"
- Add your domain (e.g., marialababneh.com)
- Follow DNS configuration instructions

---

### **Option 2: Netlify**

1. Go to [netlify.com](https://netlify.com)
2. Click **"New site from Git"**
3. Connect GitHub repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click **"Deploy"**

---

### **Option 3: GitHub Pages (Static Export)**

```bash
# Add to package.json scripts:
"export": "next export"

# Then run:
npm run build
npm run export
```

Upload the `out` folder to GitHub Pages or any static host.

---

## 📝 Common Tasks

### Update Text Content
1. Open file: `/components/[SectionName].js`
2. Edit the text
3. Save
4. Redeploy

### Add New Project
1. Open: `/components/Projects.js`
2. Find `projects` array (around line 8)
3. Add new object:
```javascript
{
  title: 'Your Project Title',
  status: 'Ongoing Research',
  statusColor: 'bg-green-100 text-green-800',
  description: 'Your description...',
  highlights: ['Point 1', 'Point 2', 'Point 3', 'Point 4'],
  impact: 'Expected impact...',
  icon: (/* SVG icon */)
}
```
4. Save and redeploy

### Change Colors
1. Open: `/tailwind.config.cjs`
2. Edit colors in `theme.extend.colors`
3. Save and rebuild

### Modify Contact Email
Currently set to: **marialababneh@gmail.com**

To change:
1. Search for "marialababneh@gmail.com" in project
2. Replace all instances
3. Main files: `Contact.js`, `Footer.js`, `_app.js`

---

## 🎨 Design Tokens

### Colors
```
Primary Beige:  #F5F5DC
Accent Gold:    #D4AF6A, #C19A6B
Text Dark:      #1F2937
Text Light:     #6B7280
White:          #FFFFFF
```

### Fonts
```
Family: Inter (from Google Fonts)
Weights: 300, 400, 500, 600, 700, 800, 900
```

### Spacing
```
Sections: 96px vertical padding
Cards: 32-40px padding
Gaps: 32-48px between elements
```

---

## 🐛 Troubleshooting

### Build Fails
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Styles Not Applying
```bash
# Restart dev server
npm run dev
```

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

---

## 📚 Documentation Files

- **README.md** - Setup & deployment instructions
- **DESIGN_DOCUMENTATION.md** - Comprehensive design guide (400+ lines)
- **SUMMARY.md** - Complete feature list
- **BEFORE_AFTER.md** - Transformation details
- **QUICK_START.md** - This file

---

## ✅ Pre-Deployment Checklist

- [x] Build successful
- [x] All components working
- [x] Content reviewed
- [x] Contact email set (marialababneh@gmail.com)
- [x] Responsive design tested
- [x] Accessibility verified
- [ ] Choose hosting platform
- [ ] Deploy!

---

## 📞 Contact Information

**Website:** Maria Lababneh Portfolio  
**Email:** marialababneh@gmail.com  
**Institution:** University of Wisconsin–Milwaukee  
**Focus:** Veteran Mental Health Research

---

## 🎉 What You Got

✅ **7 Production-Ready Components**
- Navigation (sticky header + mobile menu)
- Hero (landing with CTAs)
- About (biography + values)
- Research (4 detailed areas)
- Projects (3 projects + publications)
- Contact (form + info)
- Footer (links + info)

✅ **Helium Mobile-Inspired Design**
- Beige/white color scheme
- Smooth animations
- Professional layout
- Modern typography

✅ **Enhanced Content**
- Professional descriptions
- Detailed project breakdowns
- Research goals
- Contact email integrated

✅ **Fully Responsive**
- Mobile-first design
- Tablet optimized
- Desktop enhanced

✅ **Build Tested**
- Next.js 16.1.1
- React 19.2.3
- Zero errors

---

## 🚀 Deploy Now!

Your website is **production-ready**. Choose a hosting platform above and deploy in under 5 minutes!

**Recommended:** Vercel (built by Next.js creators, zero configuration)

---

**Status**: ✅ READY  
**Build**: ✅ SUCCESS  
**Deploy**: 🚀 GO!
