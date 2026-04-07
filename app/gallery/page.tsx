'use client';

import { siteConfig } from '@/config/site';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="text-5xl font-bold mb-4">Gallery</h1>
        <p className="text-xl text-[var(--muted-foreground)] max-w-3xl">
          A visual collection of moments from conferences, team events, and day-to-day
          life as an engineering leader.
        </p>
      </motion.div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteConfig.gallery.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            onClick={() => setSelectedImage(index)}
            className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4">
              <p className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close"
          >
            <X size={24} className="text-white" />
          </button>

          <div className="relative max-w-5xl w-full aspect-[4/3]">
            <Image
              src={siteConfig.gallery[selectedImage].url}
              alt={siteConfig.gallery[selectedImage].alt}
              fill
              className="object-contain"
              unoptimized
            />
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full">
            <p className="text-white font-medium">
              {siteConfig.gallery[selectedImage].caption}
            </p>
          </div>
        </motion.div>
      )}

      {/* Add Image Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-12 p-6 bg-[var(--muted)] border border-[var(--border)] rounded-xl"
      >
        <p className="text-sm text-[var(--muted-foreground)]">
          <strong>Note:</strong> To add more images, edit the <code className="px-2 py-1 bg-[var(--background)] rounded">gallery</code> array in <code className="px-2 py-1 bg-[var(--background)] rounded">config/site.ts</code>
        </p>
      </motion.div>
    </div>
  );
}
