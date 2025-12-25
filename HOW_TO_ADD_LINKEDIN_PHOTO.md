# 📸 How to Add Maria's LinkedIn Profile Picture

## 🚫 Why LinkedIn URLs Don't Work

LinkedIn profile pictures are **behind authentication** and cannot be directly embedded in external websites. The image URL requires a logged-in session and will show as broken for visitors.

---

## ✅ Solution: Download and Add Locally

### **Step 1: Download the Photo**

1. Visit: https://jo.linkedin.com/in/maria-lababneh-26540920a
2. Right-click on her profile picture
3. Select "Save Image As..."
4. Save as: `maria-profile.jpg`

### **Step 2: Add to Project**

```bash
# Place the downloaded image here:
/workspace/public/images/maria-profile.jpg
```

### **Step 3: Update the Code**

I'll update the About component to use the local image.

---

## 🔄 Alternative: Use a Public Image Host

If you have the image, you can:
1. Upload to Imgur.com (free, public)
2. Upload to your own server
3. Use any public image hosting service

Then use that URL in the component.

---

## 📋 Quick Steps

1. **Download from LinkedIn** ✓
2. **Save to `/public/images/maria-profile.jpg`** ✓
3. **Code will automatically use it** ✓ (I'll update now)

