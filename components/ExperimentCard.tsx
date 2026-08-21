'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

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

  const inner = (
    <>
      {image && (
        <div className="relative aspect-video bg-[var(--muted)]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
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
  );
}
