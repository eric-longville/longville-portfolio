# Changelog

## Version 2.0.1 - Hotfix (February 11, 2026)

### 🐛 Bug Fixes
- **Fixed Runtime Error**: Resolved "useTheme must be used within a ThemeProvider" error
- **Layout Structure**: Moved Navigation component inside ThemeProvider wrapper
- **Theme Initialization**: Improved mounting behavior to prevent hydration mismatches
- **Visual Fix**: Prevented flash of unstyled content during initial load

### 🔧 Technical Changes
- Updated `app/layout.tsx` to wrap Navigation in ThemeProvider
- Enhanced `components/ThemeProvider.tsx` with better mounting logic
- Added visibility hidden state during initial mount to prevent flash

### ✅ Impact
- Site now loads without runtime errors
- Dark/light mode toggle works immediately
- No hydration warnings in console
- Smoother initial page load

---

## Version 2.0.0 - Security & Dependency Updates (February 11, 2026)

### 🔒 Security Updates
- ✅ All npm vulnerabilities resolved
- ✅ Dependencies updated to latest stable versions
- ✅ No known security issues

### 📦 Dependency Updates

#### Major Updates
- **Next.js**: `14.2.0` → `15.1.4`
  - Latest App Router improvements
  - Enhanced performance
  - Better TypeScript support
  
- **React**: `18.3.0` → `19.0.0`
  - React 19 stable release
  - Improved hooks and server components
  
- **ESLint**: `8.x` → `9.17.0`
  - Migrated to flat config format
  - Added @eslint/eslintrc for compatibility
  
- **TypeScript**: `5.x` → `5.7.3`
  - Latest TypeScript features
  - Better type inference

#### Minor Updates
- **Framer Motion**: `11.0.0` → `11.15.0`
- **Lucide React**: `0.263.1` → `0.469.0`
- **Tailwind CSS**: `3.4.0` → `3.4.17`
- **PostCSS**: `8.x` → `8.4.49`
- **Autoprefixer**: `10.0.1` → `10.4.20`

#### Type Definitions
- **@types/node**: `20.x` → `22.10.2`
- **@types/react**: `18.x` → `19.0.6`
- **@types/react-dom**: `18.x` → `19.0.2`

### 🔧 Configuration Changes

#### Next.js Config
- Updated `next.config.js` to use `remotePatterns` instead of deprecated `domains` for Image optimization
- Better security for external image sources

#### ESLint Config
- Migrated from `.eslintrc.json` to `eslint.config.mjs` (flat config)
- Added ESLint 9 compatibility layer
- Updated to work with Next.js 15

#### Image Components
- Added `unoptimized` prop to external images
- Ensures compatibility with remote image sources
- Maintains performance while supporting Unsplash and other CDNs

### 🎯 Breaking Changes
**None** - All updates are backward compatible for configuration files. Your content in `config/site.ts` requires no changes.

### ✨ What You Get
- ✅ All latest features from Next.js 15
- ✅ React 19 performance improvements
- ✅ No security vulnerabilities
- ✅ Better TypeScript support
- ✅ Improved build times
- ✅ Enhanced developer experience

### 📝 Migration Notes

If upgrading from v1.0.0:
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install`
3. Run `npm audit` - should show 0 vulnerabilities
4. Test your site with `npm run dev`

No changes needed to your content configuration!

---

## Version 1.0.0 - Initial Release (February 11, 2026)

### Initial Features
- Complete portfolio website with 5 pages
- Dark/Light mode toggle
- Responsive design
- Image carousels
- Gallery with lightbox
- Easy content configuration
- Professional design
