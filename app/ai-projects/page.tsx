'use client';

import { siteConfig } from '@/config/site';
import { motion } from 'framer-motion';
import ExperimentCard from '@/components/ExperimentCard';
import { Sparkles, FlaskConical } from 'lucide-react';

export default function AIProjects() {
  const experiments = siteConfig.aiProjects;

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="text-[var(--accent)]" size={40} />
          <h1 className="text-5xl font-bold">AI Projects</h1>
        </div>
        <p className="text-xl text-[var(--muted-foreground)] max-w-3xl">
          My personal AI lab — experiments I tinker with on my own time, separate from
          my professional work. Some are in progress, others are ideas I&apos;m eager to
          start. Expect rough edges and works in progress.
        </p>
      </motion.div>

      {experiments.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiments.map((exp, i) => (
            <ExperimentCard key={i} {...exp} />
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center py-24 border border-dashed border-[var(--border)] rounded-2xl"
        >
          <div className="w-14 h-14 rounded-full bg-[var(--accent)]/10 flex items-center justify-center mb-5">
            <FlaskConical className="text-[var(--accent)]" size={28} />
          </div>
          <h2 className="text-2xl font-bold mb-2">In the lab</h2>
          <p className="text-[var(--muted-foreground)] max-w-md">
            Experiments are brewing. I&apos;m lining up a few personal AI projects to
            share here soon — check back shortly.
          </p>
        </motion.div>
      )}
    </div>
  );
}
