'use client';

import { siteConfig } from '@/config/site';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { Sparkles } from 'lucide-react';

export default function AIProjects() {
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
          Experimental AI and machine learning projects exploring the intersection of
          engineering leadership and artificial intelligence. These experiments aim to
          enhance developer productivity and team performance.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid gap-8">
        {siteConfig.aiProjects.map((project) => (
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
          <strong>Note:</strong> To add more AI projects, edit the <code className="px-2 py-1 bg-[var(--background)] rounded">aiProjects</code> array in <code className="px-2 py-1 bg-[var(--background)] rounded">config/site.ts</code>
        </p>
      </motion.div>
    </div>
  );
}
