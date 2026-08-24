'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Maximize2, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export interface Experiment {
  title: string;
  status: string;
  description: string;
  tags?: string[];
  href?: string;
  image?: string;
}

// Subtle status signal via a colored dot; the pill itself stays theme-neutral.
const STATUS_DOT: Record<string, string> = {
  'In Progress': '#d97706',
  Planned: '#2563eb',
  Exploring: 'var(--accent)',
};

export default function ExperimentCard({ title, status, description, tags, href, image }: Experiment) {
  const dot = STATUS_DOT[status] ?? 'var(--muted-foreground)';
  const external = !!href && href.startsWith('http');
  const [zoomed, setZoomed] = useState(false);

  // Close the lightbox on Escape and lock body scroll while it's open.
  useEffect(() => {
    if (!zoomed) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setZoomed(false);
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [zoomed]);

  // Opening the lightbox must not follow the card's link (when one exists).
  const openZoom = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setZoomed(true);
  };

  const inner = (
    <>
      {image && (
        <div
          role="button"
          tabIndex={0}
          aria-label={`Expand image: ${title}`}
          onClick={openZoom}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') openZoom(e);
          }}
          className="relative aspect-video overflow-hidden bg-[var(--muted)] cursor-zoom-in"
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Expand affordance on hover */}
          <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/25">
            <span className="flex h-10 w-10 scale-90 items-center justify-center rounded-full bg-black/55 text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
              <Maximize2 size={18} />
            </span>
          </span>
        </div>
      )}
      <div className="p-6 space-y-3">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--muted)] border border-[var(--border)] text-xs font-medium">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: dot }} />
          {status}
        </span>
        <h3 className="text-xl font-bold flex items-start gap-1.5">
          {title}
          {href && (
            <ArrowUpRight
              size={18}
              className="mt-1 shrink-0 text-[var(--accent)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          )}
        </h3>
        <p className="text-sm leading-relaxed text-[var(--foreground)]/80">{description}</p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {tags.map((t) => (
              <span key={t} className="tag-pill">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );

  const cardClass =
    'group flex flex-col h-full bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden transition-shadow hover:shadow-xl';

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="h-full"
      >
        {href ? (
          <Link
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className={cardClass}
          >
            {inner}
          </Link>
        ) : (
          <div className={cardClass}>{inner}</div>
        )}
      </motion.div>

      {/* Lightbox — click image to view full size */}
      <AnimatePresence>
        {zoomed && image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setZoomed(false)}
          >
            <button
              onClick={() => setZoomed(false)}
              aria-label="Close"
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X size={24} className="text-white" />
            </button>

            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={image} alt={title} fill sizes="100vw" className="object-contain" />
            </motion.div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/50 backdrop-blur-sm px-5 py-2.5">
              <p className="text-white text-sm font-medium">{title}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
