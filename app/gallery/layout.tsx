import type { Metadata } from 'next';

// Server component: sets the per-page <title> (the client page.tsx can't).
export const metadata: Metadata = { title: 'Gallery' };

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
