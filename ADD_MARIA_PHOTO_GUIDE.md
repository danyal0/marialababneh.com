# 🎯 Quick Guide: Add Maria's LinkedIn Photo

## ⚠️ Important: LinkedIn Images Can't Be Directly Linked

LinkedIn profile pictures are **authentication-protected** and won't work when embedded in your website. Visitors will see a broken image.

---

## ✅ **3-Step Solution**

### **Step 1: Get the Photo** (2 minutes)

**Option A: Download from LinkedIn**
1. Visit: https://jo.linkedin.com/in/maria-lababneh-26540920a
2. Right-click on profile picture
3. "Save Image As..." → `maria-profile.jpg`

**Option B: Ask Maria**
- Ask for a high-resolution professional headshot
- Preferred: 400x400px or larger
- Format: JPG or PNG

**Option C: University Website**
- Check if UW-Milwaukee has a staff directory
- Download official photo from there

---

### **Step 2: Add to Project** (30 seconds)

```bash
# Place the downloaded photo here:
/workspace/public/images/maria-profile.jpg
```

Or via command line:
```bash
# If you have the file on your computer:
cp /path/to/downloaded/maria-photo.jpg /workspace/public/images/maria-profile.jpg
```

---

### **Step 3: Update the Code** (1 minute)

Open: `/workspace/components/About.js`

Find this section (around line 17-30):

```javascript
// CURRENT CODE (using placeholder):
<Image 
  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
  alt="Maria Lababneh - PhD Candidate"
  fill
  className="object-cover"
/>

// UNCOMMENT THIS (when you add her photo):
/*
<Image 
  src="/images/maria-profile.jpg"
  alt="Maria Lababneh - PhD Candidate"
  fill
  className="object-cover"
/>
*/
```

**Change to:**

```javascript
// Comment out the placeholder:
/*
<Image 
  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
  alt="Maria Lababneh - PhD Candidate"
  fill
  className="object-cover"
/>
*/

// Uncomment Maria's photo:
<Image 
  src="/images/maria-profile.jpg"
  alt="Maria Lababneh - PhD Candidate"
  fill
  className="object-cover"
/>
```

---

## 🔧 **Alternative: Use Imgur for Quick Setup**

If you want to test immediately:

1. Download photo from LinkedIn
2. Go to [Imgur.com](https://imgur.com)
3. Click "New Post" → Upload image
4. Copy the direct image link
5. Use that URL in the code instead

**Example:**
```javascript
src="https://i.imgur.com/YOUR-IMAGE-ID.jpg"
```

---

## ✅ **Current Status**

**What's Live Now:**
- ✅ Professional woman researcher placeholder (Unsplash)
- ✅ Code is ready to swap
- ✅ Clear comments showing where to update

**After You Add Maria's Photo:**
- ✅ Her actual LinkedIn headshot
- ✅ Personal, authentic representation
- ✅ Professional appearance

---

## 🎨 **Photo Guidelines**

For best results, the photo should be:
- **Professional headshot** (face clearly visible)
- **Neutral or professional background**
- **Good lighting**
- **Square or portrait orientation** (will be cropped to square)
- **Minimum 400x400px** (larger is better)
- **File size < 500KB** (optimize if needed)

---

## 🚀 **After Adding**

```bash
# Restart dev server to see changes:
npm run dev

# Visit: http://localhost:3000
# Scroll to About section
# You'll see Maria's actual photo!
```

---

## 💡 **Why This Approach?**

**LinkedIn URLs don't work because:**
- Requires login to view
- Returns 403 Forbidden for external sites
- Session-based authentication
- Profile pictures are private by default

**Local hosting works because:**
- You control the file
- No authentication needed
- Reliable and fast
- Works for all visitors

---

## 📧 **Need Help?**

If you're having trouble:
1. Make sure the file is named exactly: `maria-profile.jpg`
2. Make sure it's in: `/public/images/` folder
3. Restart the dev server after adding
4. Clear browser cache if needed

---

## 🎉 **That's It!**

Once you add the photo, your website will show Maria's **actual professional headshot** instead of the placeholder!

**Current:** Professional placeholder ✓  
**Next:** Maria's real photo (when you add it) 🎯

