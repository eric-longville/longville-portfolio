'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Navigation() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    siteConfig.nav.home,
    siteConfig.nav.about,
    siteConfig.nav.work,
    siteConfig.nav.aiProjects,
    siteConfig.nav.gallery,
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 60);

      const docHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollable = docHeight - viewportHeight;
      setScrollProgress(scrollable > 0 ? (scrollY / scrollable) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Scroll progress bar — fixed to top of viewport */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-transparent">
        <div
          className="h-full bg-[var(--accent)] transition-all duration-100 ease-linear"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Nav wrapper — handles the full-width vs floating pill layout */}
      <div
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? 'top-4 px-4' : 'top-[2px] px-0'
        }`}
      >
        <nav
          className={`transition-all duration-300 ease-in-out backdrop-blur-xl ${
            isScrolled
              ? 'mx-auto max-w-fit rounded-full shadow-lg px-4 py-2 border border-[var(--accent)]/20 bg-[var(--background)]/85'
              : 'w-full rounded-none px-0 py-0 border-b border-[var(--border)] bg-[var(--background)]/80'
          }`}
        >
          {/* Main nav row */}
          <div
            className={`flex items-center transition-all duration-300 ease-in-out ${
              isScrolled ? 'gap-2' : 'max-w-7xl mx-auto px-6 py-4 justify-between'
            }`}
          >
            {/* Logo — hides when scrolled */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isScrolled ? 'max-w-0 opacity-0 mr-0' : 'max-w-[200px] opacity-100 mr-0'
              }`}
            >
              <Link
                href="/"
                className="text-xl font-semibold hover:text-[var(--accent)] transition-colors whitespace-nowrap"
                tabIndex={isScrolled ? -1 : 0}
              >
                {siteConfig.home.logo}
              </Link>
            </div>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-200 ease-in-out hover:text-[var(--accent)] ${
                    pathname === item.href
                      ? 'text-[var(--accent)] bg-[var(--accent)]/15'
                      : 'text-[var(--foreground)] hover:bg-[var(--accent)]/8'
                  }`}
                >
                  {pathname === item.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-[var(--accent)]" />
                  )}
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop theme toggle */}
            <button
              onClick={toggleTheme}
              className={`hidden md:flex items-center justify-center p-2 rounded-full hover:bg-[var(--muted)] transition-colors ${
                isScrolled ? 'ml-2' : 'ml-0'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="md:hidden flex items-center justify-center p-2 rounded-full hover:bg-[var(--muted)] transition-colors ml-auto"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden mx-auto mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } ${isScrolled ? 'max-w-fit' : 'max-w-7xl'}`}
        >
          <div className="rounded-2xl shadow-lg border border-[var(--accent)]/20 bg-[var(--background)]/90 backdrop-blur-xl px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium px-3 py-2 rounded-full transition-all duration-200 hover:text-[var(--accent)] hover:bg-[var(--accent)]/8 ${
                  pathname === item.href
                    ? 'text-[var(--accent)] bg-[var(--accent)]/15'
                    : 'text-[var(--foreground)]'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Theme toggle in mobile dropdown */}
            <div className="mt-1 pt-2 border-t border-[var(--border)]">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium hover:bg-[var(--muted)] transition-colors w-full"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <>
                    <Moon size={16} />
                    <span>Dark mode</span>
                  </>
                ) : (
                  <>
                    <Sun size={16} />
                    <span>Light mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer so page content starts below the nav */}
      <div className="h-[65px]" />
    </>
  );
}
