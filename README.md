# Maria Lababneh - Portfolio Website

A modern, professional portfolio website for Maria Lababneh, PhD Candidate in Health Sciences at the University of Wisconsin–Milwaukee, specializing in veteran mental health research.

## 🎨 Design Philosophy

This website is inspired by the clean, professional aesthetic of [Helium Mobile](https://heliummobile.com), featuring:

- **Modern UI/UX**: Clean lines, spacious layouts, and intuitive navigation
- **Beige Color Palette**: Primary beige (#F5F5DC) with complementary shades
- **Smooth Animations**: Fade-in, slide, and scale transitions for engaging user experience
- **Mobile-First Responsive Design**: Optimized for all screen sizes
- **Accessibility-Focused**: WCAG compliant with proper semantic HTML and ARIA labels

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) - React framework for production
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations**: [Animate.css](https://animate.style/) - Professional CSS animations
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) - Professional sans-serif typeface
- **Deployment Ready**: Optimized for Vercel, Netlify, or any static hosting

## 📦 Project Structure

```
/workspace
├── components/
│   ├── Navigation.js       # Sticky header with smooth scroll navigation
│   ├── Hero.js            # Landing section with introduction
│   ├── About.js           # Personal background and values
│   ├── Research.js        # Research focus areas and goals
│   ├── Projects.js        # Current projects and publications
│   ├── Contact.js         # Contact form and collaboration opportunities
│   └── Footer.js          # Site footer with quick links
├── pages/
│   ├── _app.js            # Next.js app wrapper with metadata
│   └── index.js           # Main page composing all components
├── styles/
│   └── globals.css        # Global styles and animations
├── tailwind.config.cjs    # Tailwind configuration with custom theme
├── postcss.config.cjs     # PostCSS configuration
└── package.json           # Dependencies and scripts
```

## 🎯 Key Features

### Navigation
- **Sticky header** that adapts on scroll with blur backdrop
- **Smooth scroll** to section anchors
- **Mobile-responsive menu** with hamburger toggle
- **Professional branding** with logo and CTA button
- **Animated transitions** on all interactions

### Hero Section
- **Eye-catching headline** with gradient text and fade-in animation
- **Clear value proposition** and introduction
- **Quick stats** showcasing key information
- **Dual CTAs** for exploring research and getting in touch
- **Animated brain/icon placeholder** ready for your research photos
- **Floating background blobs** with continuous pulse animation

### About Section
- **Profile card** with key information
- **Detailed biography** highlighting background and approach
- **Core values** displayed in interactive cards
- **Visual icons** for quick information scanning

### Research Section
- **Four research areas** with detailed descriptions
- **Research goals** presented as actionable items
- **Methodology badges** showcasing expertise
- **Visual hierarchy** with icons and color gradients

### Projects Section
- **Detailed project cards** with:
  - Status badges (Ongoing, Pilot Phase, In Preparation)
  - Comprehensive descriptions
  - Key highlights with checkmarks
  - Expected impact statements
- **Publications listing** with venue targets
- **Professional formatting** for academic context

### Contact Section
- **Functional contact form** (opens default email client)
- **Contact information** with icons
- **Collaboration opportunities** showcasing openness
- **Prominent CTA** for direct email communication
- **Email**: marialababneh@gmail.com

### Footer
- **Quick links** for easy navigation
- **Contact information** recap
- **Professional branding**
- **Back to top** functionality

## 🎨 Color Palette

```css
Primary Beige:
- #FAF8F0 (Light)
- #F5F5DC (Default)
- #D4AF6A (Dark/Accent)

Beige Scale:
- 50: #FAF8F0
- 100: #F5F5DC
- 400: #D4AF6A
- 500: #C19A6B
- 600: #A88B5A
- 700: #8B7355

Neutrals:
- White: #FFFFFF
- Grays: Various shades for text and backgrounds
```

## 🏃 Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Deploy

### Manual Static Export
```bash
# Add to package.json scripts:
"export": "next export"

# Then run:
npm run build && npm run export
```

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading hierarchy and landmark regions
- **ARIA labels**: Screen reader friendly navigation
- **Keyboard navigation**: Full site accessibility via keyboard
- **Focus indicators**: Clear visual focus states
- **Color contrast**: WCAG AA compliant contrast ratios
- **Alt text**: Descriptive text for images (when added)

## 🚀 Performance Optimizations

- **Next.js optimization**: Automatic code splitting and lazy loading
- **Image optimization**: Next.js Image component ready
- **CSS optimization**: Tailwind purges unused styles
- **Smooth animations**: Hardware-accelerated CSS transitions
- **Minimal dependencies**: Lean and fast

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🔧 Customization Guide

### Update Content
Edit component files in `/components` folder:
- `Hero.js` - Update headline, introduction, stats
- `About.js` - Modify bio, location, core values
- `Research.js` - Add/edit research areas and goals
- `Projects.js` - Update projects and publications
- `Contact.js` - Modify collaboration opportunities

### Change Colors
Edit `tailwind.config.cjs`:
```javascript
colors: {
  primary: '#YOUR_COLOR',
  beige: { /* custom scale */ }
}
```

### Add New Sections
1. Create component in `/components`
2. Import in `/pages/index.js`
3. Add to navigation links

### Modify Animations
Edit `styles/globals.css` keyframes and animation classes

## 📧 Contact

**Maria Lababneh**
- Email: marialababneh@gmail.com
- Institution: University of Wisconsin–Milwaukee
- Location: Milwaukee, Wisconsin

## 📄 License

This project is private and proprietary to Maria Lababneh.

## 🙏 Acknowledgments

- Design inspiration: [Helium Mobile](https://heliummobile.com)
- Typography: [Inter font family](https://rsms.me/inter/)
- Icons: Heroicons (via Tailwind CSS)
- Framework: Next.js and React teams

---

**Built with ❤️ for advancing veteran mental health research**
