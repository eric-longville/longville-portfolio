'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, X } from 'lucide-react';

export interface ShowcaseItem {
  image: string;
  title: string;
  description: string;
  badge?: string;
}

export interface Showcase {
  slug: string;
  company: string;
  role: string;
  period: string;
  intro: string;
  layout: string; // "grid" | "feature"
  items: ShowcaseItem[];
  extra?: {
    heading: string;
    note?: string;
    entries: { title: string; description: string }[];
  };
}

export default function ShowcaseGallery({ showcase }: { showcase: Showcase }) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { company, role, period, intro, layout, items, extra } = showcase;

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <Link
        href="/work"
        className="group inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors mb-8"
      >
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
        Back to Work
      </Link>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h1 className="text-5xl font-bold mb-3">{company}</h1>
        <p className="text-lg font-medium text-[var(--accent)]">{role}</p>
        <p className="text-sm text-[var(--muted-foreground)] mb-6">{period}</p>
        <p className="text-lg leading-relaxed text-[var(--foreground)]/80 max-w-3xl">{intro}</p>
      </motion.div>

      {/* Items */}
      {layout === 'feature' ? (
        <div className="space-y-16">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <button
                onClick={() => setLightbox(i)}
                className={`block w-full relative aspect-video rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--muted)] shadow-lg ${
                  i % 2 === 1 ? 'md:order-2' : ''
                }`}
                aria-label={`View ${item.title}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </button>
              <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                {item.badge && <span className="tag-pill mb-2">{item.badge}</span>}
                <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
                <p className="text-[var(--foreground)]/80 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
              className="group flex flex-col"
            >
              <button
                onClick={() => setLightbox(i)}
                className="block w-full relative aspect-video rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--muted)]"
                aria-label={`View ${item.title}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </button>
              <div className="pt-4">
                <h2 className="text-xl font-bold">{item.title}</h2>
                {item.badge && (
                  <span className="tag-pill mt-1.5">{item.badge}</span>
                )}
                <p className="mt-2 text-[var(--foreground)]/80 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Extra text section */}
      {extra && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 pt-10 border-t border-[var(--border)]"
        >
          <h2 className="text-2xl font-bold mb-2 text-[var(--accent)]">{extra.heading}</h2>
          {extra.note && <p className="text-[var(--muted-foreground)] mb-6">{extra.note}</p>}
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {extra.entries.map((e, i) => (
              <div key={i}>
                <h3 className="font-semibold">{e.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[var(--foreground)]/80">
                  {e.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close"
          >
            <X size={24} className="text-white" />
          </button>
          <div className="relative w-full max-w-5xl aspect-video">
            <Image
              src={items[lightbox].image}
              alt={items[lightbox].title}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 max-w-[90vw] bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full">
            <p className="text-white font-medium text-center">{items[lightbox].title}</p>
          </div>
        </div>
      )}
    </div>
  );
}
