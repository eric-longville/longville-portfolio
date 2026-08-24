'use client';

import { siteConfig } from '@/config/site';
import { motion } from 'framer-motion';
import WorkCard from '@/components/WorkCard';

export default function Work() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="text-5xl font-bold mb-4">Work</h1>
        <p className="text-xl text-[var(--muted-foreground)] max-w-3xl">
          A showcase of major projects and initiatives I&apos;ve led throughout my career.
          Each project represents complex challenges solved through technical innovation
          and strategic leadership.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {siteConfig.workProjects.map((project) => (
          <WorkCard
            key={project.id}
            title={project.title}
            description={project.description}
            images={project.images}
            tags={project.tags}
            href={'href' in project ? project.href : undefined}
            cta={'cta' in project ? project.cta : undefined}
          />
        ))}
      </div>
    </div>
  );
}
