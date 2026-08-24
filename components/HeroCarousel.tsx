'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { POOL, type IconProps } from './symbols';

interface Props {
  images: string[];
  alt: string;
  interval?: number;
}

interface BurstIcon {
  Icon: React.ComponentType<IconProps>;
  left: number; // %
  top: number; // %
  size: number; // px
  rotate: number; // deg
  delay: number; // s
}

const BURST_MS = 1700;
const SWAP_AT = 780; // swap the photo while the scrim is fully raised

// A 5×5 grid of icons that bloom outward from the center, so the photo appears
// to dissolve into the site's symbol field and then resolve into the next one.
function makeBurst(): BurstIcon[] {
  const cells = 5;
  const out: BurstIcon[] = [];
  for (let r = 0; r < cells; r++) {
    for (let c = 0; c < cells; c++) {
      const jx = (Math.random() - 0.5) * 0.6;
      const jy = (Math.random() - 0.5) * 0.6;
      const dx = (c + 0.5) / cells - 0.5;
      const dy = (r + 0.5) / cells - 0.5;
      out.push({
        Icon: POOL[Math.floor(Math.random() * POOL.length)],
        left: ((c + 0.5 + jx) / cells) * 100,
        top: ((r + 0.5 + jy) / cells) * 100,
        size: 26 + Math.random() * 16,
        rotate: (Math.random() - 0.5) * 40,
        delay: Math.hypot(dx, dy) * 0.5, // radial stagger
      });
    }
  }
  return out;
}

export default function HeroCarousel({ images, alt, interval = 10000 }: Props) {
  // Always start on the first image (the headshot); randomize from there.
  const [index, setIndex] = useState(0);
  const [burst, setBurst] = useState<BurstIcon[] | null>(null);
  const reduced = useRef(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (images.length < 2) return;

    const nextIndex = (from: number) => {
      let n = from;
      while (n === from) n = Math.floor(Math.random() * images.length);
      return n;
    };

    const advance = () => {
      setIndex((cur) => {
        const to = nextIndex(cur);
        if (reduced.current) return to; // AnimatePresence handles a plain crossfade
        setBurst(makeBurst());
        timers.current.push(
          window.setTimeout(() => setIndex(to), SWAP_AT),
          window.setTimeout(() => setBurst(null), BURST_MS + 250),
        );
        return cur; // hold; the timeout above performs the actual swap under the scrim
      });
    };

    const id = window.setInterval(advance, interval);
    return () => {
      window.clearInterval(id);
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, [images.length, interval]);

  return (
    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
      {/* subtle brand tint over the photo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 to-transparent z-10 pointer-events-none" />

      {/* Photo (crossfade) */}
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <Image
            src={images[index]}
            alt={alt}
            fill
            sizes="(max-width: 768px) 90vw, 600px"
            className="object-cover"
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Icon-dissolve overlay */}
      {burst && (
        <div className="absolute inset-0 z-20 pointer-events-none">
          {/* page-colored scrim → the hero momentarily reads as the symbol field */}
          <motion.div
            className="absolute inset-0"
            style={{ background: 'var(--background)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.9, 0.9, 0] }}
            transition={{ duration: BURST_MS / 1000, times: [0, 0.4, 0.6, 1], ease: 'easeInOut' }}
          />
          {burst.map((b, i) => {
            const style: CSSProperties = {
              position: 'absolute',
              left: `${b.left}%`,
              top: `${b.top}%`,
              color: 'var(--accent)',
              transform: `translate(-50%, -50%) rotate(${b.rotate}deg)`,
              lineHeight: 0,
            };
            return (
              <motion.span
                key={i}
                style={style}
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: [0, 0.92, 0.92, 0], scale: [0.3, 1.1, 1.05, 0.7] }}
                transition={{
                  duration: 1.1,
                  times: [0, 0.35, 0.6, 1],
                  delay: b.delay,
                  ease: 'easeInOut',
                }}
              >
                <b.Icon size={b.size} strokeWidth={1.75} />
              </motion.span>
            );
          })}
        </div>
      )}
    </div>
  );
}
