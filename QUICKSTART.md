# Quick Start Guide

## ✅ Latest Version: 2.0.0
- All dependencies updated to latest stable versions
- Next.js 15, React 19, TypeScript 5.7
- Zero npm vulnerabilities
- Enhanced performance and security

## Installation & Setup (5 minutes)

### Step 1: Install Dependencies
```bash
cd portfolio
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open Browser
Navigate to: http://localhost:3000

## Customize Your Portfolio (10 minutes)

### Edit `config/site.ts` - This is the ONLY file you need to edit!

1. **Your Basic Info** (Line 1-4)
   - Change `name`, `title`, `description`

2. **Social Links** (Line 17-21)
   - Update LinkedIn, GitHub, and email

3. **Home Page** (Line 24-31)
   - Edit your logo/initials
   - Update heading, subheading, mission statement
   - Replace profile image URL

4. **About Page** (Line 34-83)
   - Modify introduction
   - Update work experience (add/remove entries)
   - Edit technical skills

5. **Work Projects** (Line 86-134)
   - Add your projects
   - Include multiple images per project
   - Update descriptions and details

6. **AI Projects** (Line 137-174)
   - Add AI experiments
   - Same structure as work projects

7. **Gallery** (Line 177-213)
   - Add your images
   - Include captions

## Replacing Images

### Option 1: Use Your Own Images
```typescript
profileImage: "/images/profile.jpg"
```
Place images in `public/images/` folder

### Option 2: Use External URLs
```typescript
profileImage: "https://your-image-host.com/image.jpg"
```

### Option 3: Use Unsplash (Current Demo)
Already set up with sample images - just replace URLs

## Color Theme

Edit `app/globals.css` to change colors:

```css
:root {
  --accent: #2563eb;  /* Your brand color */
}

.dark {
  --accent: #3b82f6;  /* Dark mode brand color */
}
```

## Deploy to Vercel (Free)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

Done! Your portfolio is live in 2 minutes.

## Need Help?

Check `README.md` for detailed documentation on:
- Advanced customization
- Adding new pages
- Image optimization
- Troubleshooting

## Key Files to Know

- `config/site.ts` - All content (EDIT THIS)
- `app/globals.css` - Styling and colors
- `components/` - React components
- `app/` - Page files

That's it! Your portfolio is ready to customize.
