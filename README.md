# Software Engineering Manager Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features dynamic content management, dark mode, smooth animations, and a clean professional design.

## Features

- 🎨 **Modern Design**: Clean, professional interface with smooth animations
- 🌓 **Dark Mode**: Toggle between light and dark themes with persistent preferences
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ⚡ **Performance**: Built with Next.js 15 for optimal performance
- 🎭 **Animations**: Framer Motion for smooth, engaging interactions
- 🖼️ **Image Carousel**: Interactive project showcases with multiple images
- 📝 **Easy to Edit**: All content managed through a single configuration file
- 🔒 **Secure**: Latest dependencies with no security vulnerabilities

## Pages

1. **Home**: Dynamic landing page with hero section and mission statement
2. **About**: Professional resume-style page with work experience and skills
3. **Work**: Portfolio of major projects with image carousels
4. **AI Projects**: Showcase of AI/ML experiments and innovations
5. **Gallery**: Interactive image gallery with lightbox view

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Customization Guide

### Editing Content

All website content is managed in a single file: **`config/site.ts`**

#### Basic Information

```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Software Engineering Manager & Leader",
  description: "Building high-performing teams and scalable systems",
  // ...
}
```

#### Social Links

Update your social media profiles:

```typescript
social: {
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourprofile",
  email: "your.email@example.com",
}
```

#### Home Page

Edit the hero section content:

```typescript
home: {
  logo: "YN", // Your initials
  heading: "Engineering Leader",
  subheading: "Building the Future of Technology",
  missionStatement: "Your mission statement here...",
  profileImage: "URL to your profile image",
}
```

#### Work Experience

Add or modify work experience entries:

```typescript
workExperience: [
  {
    company: "Your Company",
    position: "Your Position",
    period: "2020 - Present",
    description: "Brief description of your role...",
    achievements: [
      "Achievement 1",
      "Achievement 2",
      "Achievement 3"
    ]
  },
  // Add more entries as needed
]
```

#### Technical Skills

Organize your skills by category:

```typescript
technicalSkills: {
  leadership: ["Team Building", "Agile/Scrum", ...],
  architecture: ["Microservices", "Cloud Architecture", ...],
  technologies: ["React", "Node.js", "Python", ...],
  practices: ["CI/CD", "Code Review", ...]
}
```

#### Projects (Work & AI Projects)

Add projects with multiple images:

```typescript
workProjects: [
  {
    id: 1,
    title: "Project Title",
    description: "Brief project description",
    images: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
      "https://example.com/image3.jpg"
    ],
    tags: ["Technology", "Category", "Type"],
    details: "Detailed project description..."
  },
  // Add more projects
]
```

The same structure applies to `aiProjects`.

#### Gallery

Add images to your gallery:

```typescript
gallery: [
  {
    id: 1,
    url: "https://example.com/image.jpg",
    alt: "Image description for accessibility",
    caption: "Caption shown on hover and in lightbox"
  },
  // Add more images
]
```

### Styling and Theming

#### Colors

Edit theme colors in `app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #0a0a0a;
  --accent: #2563eb;
  /* ... other color variables */
}

.dark {
  --background: #0a0a0a;
  --foreground: #fafafa;
  --accent: #3b82f6;
  /* ... other color variables */
}
```

#### Typography

Modify font settings in `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
  mono: ['Your Mono Font', 'monospace'],
}
```

### Adding New Pages

1. Create a new folder in `app/` directory (e.g., `app/contact/`)
2. Add a `page.tsx` file in that folder
3. Add the route to navigation in `config/site.ts`:

```typescript
nav: {
  // ... existing nav items
  contact: { label: "Contact", href: "/contact" },
}
```

## Image Guidelines

### Recommended Image Sizes

- **Profile Image**: 600x600px minimum
- **Project Images**: 1200x800px (3:2 aspect ratio)
- **Gallery Images**: 1200x900px (4:3 aspect ratio)

### Image Hosting Options

1. **Unsplash** (used in demo): Free stock photos
2. **Cloudinary**: Image hosting with optimization
3. **Next.js Image Optimization**: Place images in `public/` folder
4. **External URLs**: Any accessible image URL

### Using Local Images

1. Place images in `public/images/` folder
2. Reference as: `/images/your-image.jpg`
3. Update `next.config.js` if needed for external domains

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── ai-projects/       # AI Projects page
│   ├── gallery/           # Gallery page
│   ├── work/              # Work page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Navigation.tsx     # Navigation bar
│   ├── ProjectCard.tsx    # Reusable project card
│   └── ThemeProvider.tsx  # Theme management
├── config/
│   └── site.ts           # Site configuration (EDIT THIS!)
├── public/               # Static assets
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies
├── tailwind.config.ts    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## Common Customizations

### Change Accent Color

Edit both light and dark mode accent colors in `app/globals.css`:

```css
:root {
  --accent: #your-color;
}

.dark {
  --accent: #your-dark-color;
}
```

### Modify Animations

Animation settings are in individual page components using Framer Motion. Look for:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

### Add More Social Links

Update the About page (`app/about/page.tsx`) and add more link buttons.

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify

1. Push code to GitHub
2. Connect repository in [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

### Other Platforms

The site works on any platform supporting Next.js:
- AWS Amplify
- Azure Static Web Apps
- Google Cloud Run
- Self-hosted with Node.js

## Performance Tips

1. **Optimize Images**: Use WebP format and appropriate sizes
2. **Lazy Loading**: Images load as you scroll (built-in)
3. **Code Splitting**: Next.js automatically splits code
4. **Font Optimization**: Use Next.js font optimization

## Troubleshooting

### Images Not Loading

- Check image URLs are accessible
- Verify `next.config.js` includes image domains
- Ensure images meet size requirements

### Styling Issues

- Clear browser cache
- Check CSS variable names match
- Verify Tailwind classes are correct

### Build Errors

- Run `npm install` to ensure dependencies are installed
- Check Node.js version (18+ required)
- Review error messages for specific issues

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available under the MIT License.

## Support

For issues or questions:
1. Check this README first
2. Review `config/site.ts` examples
3. Check component files for implementation details

## Credits

Built with:
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
