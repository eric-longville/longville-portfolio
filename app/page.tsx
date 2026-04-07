'use client';

import { siteConfig } from '@/config/site';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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
            <div className="inline-block relative">
              <div className="absolute inset-0 blur-2xl opacity-50 bg-[var(--accent)]" />
              <Image
                src="/logo/LongvilleLogo.png"
                alt="Longville Logo"
                width={400}
                height={120}
                className="mb-2 w-auto h-24 md:h-32 relative z-10 drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]"
                priority
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
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 to-transparent z-10" />
              <Image
                src={siteConfig.home.profileImage}
                alt={siteConfig.name}
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-[var(--accent)]/10 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex justify-center mt-20"
        >
          <div className="w-6 h-10 border-2 border-[var(--border)] rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
