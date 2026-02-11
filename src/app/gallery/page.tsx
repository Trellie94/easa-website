"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

interface GalleryImage {
  id: string;
  year: string;
  project: string;
  color: string;
}

const galleryImages: GalleryImage[] = [
  { id: "1", year: "2024", project: "Matshela DayCare", color: "from-terracotta/25 to-sand" },
  { id: "2", year: "2024", project: "Matshela DayCare", color: "from-forest/20 to-sand" },
  { id: "3", year: "2023", project: "Monang", color: "from-teal/20 to-sand" },
  { id: "4", year: "2023", project: "Monang", color: "from-terracotta/20 to-forest/10" },
  { id: "5", year: "2022", project: "Malahlela", color: "from-forest/15 to-teal/10" },
  { id: "6", year: "2022", project: "Malahlela", color: "from-sand-dark to-sand" },
  { id: "7", year: "2021", project: "Rise", color: "from-teal/25 to-sand" },
  { id: "8", year: "2021", project: "Rise", color: "from-terracotta/15 to-sand" },
  { id: "9", year: "2019", project: "Lesedi", color: "from-forest/20 to-sand" },
  { id: "10", year: "2019", project: "Lesedi", color: "from-teal/15 to-forest/10" },
  { id: "11", year: "2018", project: "Mothopong", color: "from-terracotta/20 to-sand" },
  { id: "12", year: "2018", project: "Mothopong", color: "from-forest/15 to-teal/10" },
];

const years = [...new Set(galleryImages.map((img) => img.year))];

export default function GalleryPage() {
  const [activeYear, setActiveYear] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const filtered = activeYear
    ? galleryImages.filter((img) => img.year === activeYear)
    : galleryImages;

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 bg-sand/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Gallery"
            subtitle="A visual journey through 15+ years of EASA projects"
          />

          {/* Year filter */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveYear(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeYear === null
                  ? "bg-teal text-white"
                  : "bg-white text-warm-grey border border-sand-dark hover:border-teal hover:text-teal"
              }`}
            >
              All
            </button>
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeYear === year
                    ? "bg-teal text-white"
                    : "bg-white text-warm-grey border border-sand-dark hover:border-teal hover:text-teal"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((img) => (
              <button
                key={img.id}
                onClick={() => setLightbox(img)}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${img.color} transition-transform duration-500 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-charcoal/60">
                    {img.year}
                  </span>
                  <p className="font-heading text-lg text-charcoal">
                    {img.project}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <p className="text-center text-warm-grey-light text-sm mt-12">
            Real project photographs will replace these placeholders — images
            from all 16 projects coming soon.
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-charcoal/80 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative bg-cream rounded-2xl max-w-3xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`aspect-[16/10] bg-gradient-to-br ${lightbox.color}`}
            />
            <div className="p-6 flex justify-between items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-warm-grey-light">
                  {lightbox.year}
                </span>
                <p className="font-heading text-xl text-charcoal">
                  {lightbox.project}
                </p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="w-10 h-10 rounded-full bg-sand flex items-center justify-center hover:bg-sand-dark transition-colors"
                aria-label="Close lightbox"
              >
                <svg
                  className="w-5 h-5 text-charcoal"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
