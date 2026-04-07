'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import { Moon, Sun } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Navigation() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    siteConfig.nav.home,
    siteConfig.nav.about,
    siteConfig.nav.work,
    siteConfig.nav.aiProjects,
    siteConfig.nav.gallery,
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-[var(--background)]/80 border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-xl font-semibold hover:text-[var(--accent)] transition-colors"
          >
            {siteConfig.home.logo}
          </Link>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-[var(--accent)] ${
                    pathname === item.href
                      ? 'text-[var(--accent)]'
                      : 'text-[var(--foreground)]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-[var(--muted)] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon size={20} />
              ) : (
                <Sun size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex flex-wrap gap-4 mt-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-[var(--accent)] ${
                pathname === item.href
                  ? 'text-[var(--accent)]'
                  : 'text-[var(--foreground)]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
