'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import { Moon, Sun, Home, User, Briefcase, Bot, Images } from 'lucide-react';
import { siteConfig } from '@/config/site';

const navIcons: Record<string, React.ReactNode> = {
  '/': <Home size={20} />,
  '/about': <User size={20} />,
  '/work': <Briefcase size={20} />,
  '/ai-projects': <Bot size={20} />,
  '/gallery': <Images size={20} />,
};

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
    <>
      {/* ── Desktop sidebar ────────────────────────────────────────── */}
      <aside className="group hidden md:flex fixed left-0 top-0 h-screen w-14 hover:w-48 z-50 flex-col border-r border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-lg transition-all duration-200 ease-in-out overflow-hidden">

        {/* Logo / initials */}
        <div className="flex items-center h-16 px-3 shrink-0 border-b border-[var(--border)]">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] text-sm font-bold shrink-0">
            EL
          </span>
          <span className="ml-3 text-sm font-semibold whitespace-nowrap opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto transition-all duration-200 ease-in-out overflow-hidden">
            {siteConfig.name}
          </span>
        </div>

        {/* Nav items */}
        <nav className="flex flex-col flex-1 py-4 gap-1">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex items-center h-10 px-3 mx-1 rounded-lg transition-colors duration-150 hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] ${
                  active
                    ? 'bg-[var(--accent)]/10 text-[var(--accent)]'
                    : 'text-[var(--foreground)]'
                }`}
              >
                {/* Left accent bar for active item */}
                {active && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 -ml-1 w-1 h-6 rounded-r bg-[var(--accent)]" />
                )}
                <span className="shrink-0">{navIcons[item.href]}</span>
                <span className="ml-3 text-sm font-medium whitespace-nowrap opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto transition-all duration-200 ease-in-out overflow-hidden">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Theme toggle */}
        <div className="shrink-0 border-t border-[var(--border)] p-2">
          <button
            onClick={toggleTheme}
            className="flex items-center h-10 w-full px-3 rounded-lg hover:bg-[var(--muted)] transition-colors"
            aria-label="Toggle theme"
          >
            <span className="shrink-0">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </span>
            <span className="ml-3 text-sm font-medium whitespace-nowrap opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto transition-all duration-200 ease-in-out overflow-hidden">
              {theme === 'light' ? 'Dark mode' : 'Light mode'}
            </span>
          </button>
        </div>
      </aside>

      {/* ── Mobile bottom tab bar ──────────────────────────────────── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 z-50 flex items-center justify-around border-t border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-lg">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-0.5 flex-1 h-full relative transition-colors duration-150 ${
                active ? 'text-[var(--accent)]' : 'text-[var(--foreground)]'
              }`}
            >
              {/* Active indicator dot above icon */}
              <span
                className={`absolute top-2 w-4 h-0.5 rounded-full transition-all duration-150 ${
                  active ? 'bg-[var(--accent)]' : 'bg-transparent'
                }`}
              />
              {navIcons[item.href]}
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
