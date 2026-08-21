import { notFound } from 'next/navigation';
import { siteConfig } from '@/config/site';
import ShowcaseGallery from '@/components/ShowcaseGallery';

export function generateStaticParams() {
  return siteConfig.showcases.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const showcase = siteConfig.showcases.find((s) => s.slug === slug);
  return {
    title: showcase ? `${showcase.company} — ${siteConfig.name}` : siteConfig.name,
  };
}

export default async function ShowcasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const showcase = siteConfig.showcases.find((s) => s.slug === slug);
  if (!showcase) notFound();
  return <ShowcaseGallery showcase={showcase} />;
}
