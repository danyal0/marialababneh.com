# 📸 Image Guide for Your Portfolio

## Where to Find Professional Images

### Free Stock Photo Sites (High Quality)

1. **[Unsplash](https://unsplash.com)** ⭐ Recommended
   - Search terms: "brain research", "mental health", "neuroscience", "medical research", "veterans support"
   - High-resolution, free for commercial use
   - No attribution required

2. **[Pexels](https://pexels.com)**
   - Similar to Unsplash
   - Good selection of medical/research imagery
   - Free license

3. **[Pixabay](https://pixabay.com)**
   - Large library
   - Medical and science categories
   - Free for commercial use

### Suggested Image Searches

#### For Mental Health Research Theme:
- "brain scan"
- "mental health support"
- "therapy session"
- "neuroscience"
- "medical research"
- "psychology"
- "veterans support group"
- "community mental health"
- "clinical research"
- "brain activity"

#### For Professional Context:
- "research laboratory"
- "scientist working"
- "university research"
- "medical professional"
- "clinical setting"
- "data analysis"

---

## Recommended Images for Your Site

### 1. Hero Section
**Suggested:**
- Brain scan or neuroimaging
- Abstract mental health visualization
- Research lab environment
- Professional portrait in research setting

**Dimensions:** 1200px × 800px  
**Location:** `/public/images/hero-brain.jpg`

### 2. About Section
**Suggested:**
- Your professional headshot
- Research team photo
- Conference presentation photo
- Academic setting

**Dimensions:** 400px × 400px (square)  
**Location:** `/public/images/profile-photo.jpg`

### 3. Research Section (Optional backgrounds)
**Suggested:**
- Abstract brain imagery
- Medical/clinical environment
- Data visualization
- Community support imagery

**Dimensions:** 800px × 600px  
**Locations:** `/public/images/research-*.jpg`

### 4. Projects Section (Optional)
**Suggested:**
- Research setting photos
- Community engagement photos
- Clinical interview setting
- Data collection

**Dimensions:** 600px × 400px  
**Locations:** `/public/images/project-*.jpg`

---

## How to Add Images

### Step 1: Download Images
1. Visit Unsplash.com or Pexels.com
2. Search for relevant terms
3. Download high-resolution versions
4. Rename appropriately (e.g., `hero-brain.jpg`)

### Step 2: Optimize Images
**Before adding to your site:**
- Use [TinyPNG.com](https://tinypng.com) to compress
- Target file size: < 200KB per image
- Keep original aspect ratios

### Step 3: Add to Project
```bash
# Place images in the public folder:
/public/images/hero-brain.jpg
/public/images/profile-photo.jpg
/public/images/research-lab.jpg
/public/images/community-support.jpg
/public/images/mental-health.jpg
```

### Step 4: Update Components

**For Hero Section** (`components/Hero.js`):
```javascript
import Image from 'next/image';

// Replace the placeholder div with:
<div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white">
  <Image 
    src="/images/hero-brain.jpg"
    alt="Mental Health Research"
    fill
    className="object-cover"
    priority
  />
</div>
```

**For About Section** (`components/About.js`):
```javascript
import Image from 'next/image';

// Replace the ML gradient div with:
<div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-lg">
  <Image 
    src="/images/profile-photo.jpg"
    alt="Maria Lababneh"
    fill
    className="object-cover"
  />
</div>
```

---

## Sample Unsplash Searches

### Copy-paste these into Unsplash:
1. https://unsplash.com/s/photos/brain-scan
2. https://unsplash.com/s/photos/mental-health
3. https://unsplash.com/s/photos/neuroscience
4. https://unsplash.com/s/photos/medical-research
5. https://unsplash.com/s/photos/therapy-support
6. https://unsplash.com/s/photos/veterans-support
7. https://unsplash.com/s/photos/clinical-research
8. https://unsplash.com/s/photos/psychology

---

## Specific Recommendations

### For Professional Academic Portfolio:

**Recommended Keywords:**
- "neuroscience abstract"
- "brain connectivity"
- "medical professionals discussing"
- "research data visualization"
- "mental wellness"
- "supportive community"
- "clinical psychology"

**Avoid:**
- Stock photo clichés
- Overly staged photos
- Low contrast/blurry images
- Images with text overlays
- Watermarked images

---

## Current Placeholders in Your Site

Your site currently uses **gradient placeholders** with icons. These are located in:

1. **Hero.js** - Brain/lightbulb icon placeholder
2. **About.js** - "ML" initials placeholder

Both are clearly marked in the code with comments showing where to add real images.

---

## Quick Start: Get Images Now

### 5-Minute Setup:

1. **Visit Unsplash:**
   - https://unsplash.com/s/photos/brain-research

2. **Download 2-3 images:**
   - One for hero (landscape)
   - One for profile (square)

3. **Compress at TinyPNG:**
   - https://tinypng.com

4. **Add to `/public/images/`**

5. **Update components** (follow code comments)

6. **Rebuild:** `npm run dev`

---

## Pro Tips

✅ **DO:**
- Use high-resolution images (1200px+ width)
- Compress before adding (< 200KB)
- Choose images that reflect your research
- Maintain consistent style/color tone
- Use Next.js Image component for optimization

❌ **DON'T:**
- Use images with text overlays
- Mix different photo styles
- Upload huge files (> 1MB)
- Use low-quality or pixelated images
- Forget alt text for accessibility

---

## Attribution (Optional but Nice)

While Unsplash doesn't require attribution, it's good practice:

Add to your footer or About page:
```
"Photo by [Photographer Name] on Unsplash"
```

---

## Need Help?

1. **Finding Images:** Browse Unsplash collections for "medical", "science", "research"
2. **Optimizing:** Use tinypng.com or squoosh.app
3. **Adding to Site:** See code comments in components files

---

**Your site looks great even with placeholders, but real images will take it to the next level!** 🚀
