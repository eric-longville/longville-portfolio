'use client';

import { siteConfig } from '@/config/site';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';

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
          A showcase of major projects and initiatives I've led throughout my career.
          Each project represents complex challenges solved through technical innovation
          and strategic leadership.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid gap-8">
        {siteConfig.workProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            images={project.images}
            tags={project.tags}
            details={project.details}
          />
        ))}
      </div>

      {/* Add Project Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-12 p-6 bg-[var(--muted)] border border-[var(--border)] rounded-xl"
      >
        <p className="text-sm text-[var(--muted-foreground)]">
          <strong>Note:</strong> To add more projects, edit the <code className="px-2 py-1 bg-[var(--background)] rounded">workProjects</code> array in <code className="px-2 py-1 bg-[var(--background)] rounded">config/site.ts</code>
        </p>
      </motion.div>
    </div>
  );
}
