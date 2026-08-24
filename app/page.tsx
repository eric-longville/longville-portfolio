'use client';

import { siteConfig } from '@/config/site';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import HeroCarousel from '@/components/HeroCarousel';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="relative inline-block mb-2">
              {/* tight brand-accent aura — sits behind as a rim, not a wash */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-36 md:h-36 rounded-full bg-[var(--accent)]/35 blur-2xl dark:w-44 dark:h-44 dark:md:w-52 dark:md:h-52 dark:bg-[#f3e8dd]/18 dark:blur-2xl"
              />
              <Image
                src="/logo/LongvilleLogo@3x.png"
                alt="Longville Logo"
                width={168}
                height={264}
                priority
                className="relative z-10 h-24 md:h-32 w-auto drop-shadow-[0_3px_10px_rgba(0,0,0,0.35)] dark:[filter:brightness(1.08)_drop-shadow(0_0_5px_rgba(240,240,240,0.42))_drop-shadow(0_0_18px_rgba(235,220,210,0.22))]"
              />
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-[var(--foreground)]"
            >
              {siteConfig.home.heading}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-[var(--muted-foreground)]"
            >
              {siteConfig.home.subheading}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg leading-relaxed text-[var(--foreground)]/80"
            >
              {siteConfig.home.missionStatement}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                Learn More
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--border)] rounded-lg hover:bg-[var(--muted)] transition-colors font-medium"
              >
                View Work
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <HeroCarousel images={siteConfig.home.heroImages} alt={siteConfig.name} />

            {/* Decorative elements */}
            <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-[var(--accent)]/10 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-[var(--accent)]/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
