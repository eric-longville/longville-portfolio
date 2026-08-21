'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export interface WorkCardProps {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  href?: string;
  cta?: string;
}

export default function WorkCard({ title, description, images, tags, href, cta }: WorkCardProps) {
  const body = (
    <>
      {/* Thumbnail — 16:9 shown in full (source is 16:9, so no crop) */}
      <div className="flex items-center p-4 sm:w-[42%] sm:shrink-0 sm:pr-0">
        <div className="relative w-full aspect-video overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--muted)]">
          <Image
            src={images[0]}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 260px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:pl-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-[var(--foreground)]/70 line-clamp-2">
          {description}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>

        {/* CTA — the star. mt-auto pins it to the bottom for even heights. */}
        <div className="mt-auto pt-5">
          {href ? (
            <span className="flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--accent)] py-3 font-semibold text-white shadow-sm transition-all group-hover:shadow-md group-hover:brightness-110">
              {cta ?? 'View Showcase'}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </span>
          ) : (
            <span className="flex w-full items-center justify-center rounded-lg border border-dashed border-[var(--border)] py-3 text-sm font-medium text-[var(--muted-foreground)]">
              Case study coming soon
            </span>
          )}
        </div>
      </div>
    </>
  );

  const cardClass =
    'group flex h-full flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] transition-shadow hover:shadow-xl sm:flex-row';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="h-full"
    >
      {href ? (
        <Link href={href} className={cardClass}>
          {body}
        </Link>
      ) : (
        <div className={cardClass}>{body}</div>
      )}
    </motion.div>
  );
}
