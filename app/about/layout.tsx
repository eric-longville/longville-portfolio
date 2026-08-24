import type { Metadata } from 'next';

// Server component: sets the per-page <title> (the client page.tsx can't).
export const metadata: Metadata = { title: 'About' };

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
