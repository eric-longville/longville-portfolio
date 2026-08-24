import type { Metadata } from 'next';

// Server component: sets the per-page <title> (the client page.tsx can't).
export const metadata: Metadata = { title: 'AI Projects' };

export default function AIProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
