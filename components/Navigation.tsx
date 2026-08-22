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
      {/* ── Desktop sidebar (always open, icon over label) ──────────── */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-20 z-50 flex-col border-r border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-lg">

        {/* Logo / initials */}
        <div className="flex items-center justify-center h-16 shrink-0 border-b border-[var(--border)]">
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] text-sm font-bold">
            EL
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
                className={`relative flex flex-col items-center justify-center gap-1 mx-2 py-2.5 rounded-lg transition-colors duration-150 hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] ${
                  active
                    ? 'bg-[var(--accent)]/10 text-[var(--accent)]'
                    : 'text-[var(--foreground)]'
                }`}
              >
                {/* Left accent bar for active item */}
                {active && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 h-8 w-1 rounded-r bg-[var(--accent)]" />
                )}
                {navIcons[item.href]}
                <span className="text-[10px] font-medium leading-tight text-center">
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
            className="flex w-full flex-col items-center justify-center gap-1 py-2.5 rounded-lg text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            <span className="text-[10px] font-medium">
              {theme === 'light' ? 'Dark' : 'Light'}
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
