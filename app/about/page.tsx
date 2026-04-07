'use client';

import { siteConfig } from '@/config/site';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, ExternalLink } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="text-5xl font-bold mb-6">About Me</h1>
        
        {/* Social Links */}
        <div className="flex gap-4 mb-8">
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--border)] rounded-lg hover:bg-[var(--muted)] transition-colors"
          >
            <Linkedin size={20} />
            LinkedIn
            <ExternalLink size={16} />
          </a>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--border)] rounded-lg hover:bg-[var(--muted)] transition-colors"
          >
            <Github size={20} />
            GitHub
            <ExternalLink size={16} />
          </a>
          <a
            href={`mailto:${siteConfig.social.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent)] text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            <Mail size={20} />
            Email Me
          </a>
        </div>
      </motion.div>

      {/* Introduction */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-4 text-[var(--accent)]">Introduction</h2>
        <p className="text-lg leading-relaxed text-[var(--foreground)]/80">
          {siteConfig.about.introduction}
        </p>
      </motion.section>

      {/* Work Experience */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-[var(--accent)]">Work Experience</h2>
        <div className="space-y-8">
          {siteConfig.about.workExperience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              className="border-l-4 border-[var(--accent)] pl-6 py-2"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-2xl font-bold">{job.position}</h3>
                <span className="text-sm text-[var(--muted-foreground)] font-medium">
                  {job.period}
                </span>
              </div>
              <p className="text-lg font-medium text-[var(--accent)] mb-3">
                {job.company}
              </p>
              <p className="text-[var(--foreground)]/80 mb-4 leading-relaxed">
                {job.description}
              </p>
              <div className="space-y-2">
                <p className="font-semibold text-sm">Key Achievements:</p>
                <ul className="list-disc list-inside space-y-1 text-[var(--foreground)]/80">
                  {job.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Technical Skills */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-[var(--accent)]">Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(siteConfig.about.technicalSkills).map(([category, skills]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-xl font-bold capitalize">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[var(--muted)] border border-[var(--border)] rounded-lg text-sm font-medium hover:border-[var(--accent)] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
