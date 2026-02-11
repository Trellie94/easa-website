"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface TimelineEntry {
  year: string;
  name: string;
  current?: boolean;
  image?: string;
  slug?: string;
}

const projects: TimelineEntry[] = [
  { year: "2026", name: "Mesela", current: true },
  { year: "2025", name: "TBC" },
  { year: "2024", name: "Matshela DayCare" },
  { year: "2023", name: "Monang", image: "/images/project-monang.jpg", slug: "monang" },
  { year: "2022", name: "Malahlela", image: "/images/project-malahlela-2022.jpg", slug: "malahlela-2022" },
  { year: "2021", name: "Rise", image: "/images/project-rise.jpg", slug: "rise" },
  { year: "2020", name: "Malahlela", image: "/images/project-malahlela-2020.jpg", slug: "malahlela-2020" },
  { year: "2019", name: "Lesedi", image: "/images/project-lesedi.jpg", slug: "lesedi" },
  { year: "2018", name: "Mothopong", image: "/images/project-mothopong.jpg", slug: "mothopong" },
  { year: "2017", name: "Rethuseng" },
  { year: "2016", name: "Rethusegile" },
  { year: "2015", name: "Robamano" },
  { year: "2014", name: "Kohmotso (Phase 3)" },
  { year: "2013", name: "Kohmotso (Phase 2)" },
  { year: "2012", name: "Kohmotso (Phase 1)" },
  { year: "2009–2010", name: "Jouberton" },
];

function TimelineCard({
  entry,
  index,
}: {
  entry: TimelineEntry;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  const cardContent = (
    <div
      className={`inline-block rounded-xl overflow-hidden ${
        entry.current
          ? "bg-teal text-white shadow-lg"
          : "bg-white shadow-sm border border-sand-dark"
      } ${entry.slug ? "hover:shadow-md transition-shadow" : ""}`}
    >
      {/* Project image */}
      {entry.image && (
        <div className="relative w-full aspect-[16/10]">
          <Image
            src={entry.image}
            alt={`${entry.name} project`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      )}

      <div className="p-5">
        <span
          className={`block text-xs font-semibold uppercase tracking-wider mb-1 ${
            entry.current ? "text-white/70" : "text-warm-grey-light"
          }`}
        >
          {entry.year}
        </span>
        <span
          className={`block font-heading text-lg ${
            entry.current ? "text-white" : "text-charcoal"
          }`}
        >
          {entry.name}
        </span>
        {entry.current && (
          <span className="inline-block mt-2 text-xs bg-white/20 rounded-full px-3 py-0.5">
            Current Project
          </span>
        )}
        {entry.slug && !entry.current && (
          <span className="inline-block mt-2 text-xs text-teal font-medium">
            View project →
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div
      ref={ref}
      className={`relative flex items-center mb-4 md:mb-0 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Card */}
      <div
        className={`w-full md:w-[calc(50%-2rem)] transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        } ${isLeft ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}
        style={{ transitionDelay: `${index * 60}ms` }}
      >
        {entry.slug ? (
          <Link href={`/projects/${entry.slug}`}>{cardContent}</Link>
        ) : (
          cardContent
        )}
      </div>

      {/* Center dot - visible only on md+ */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
        <div
          className={`w-4 h-4 rounded-full border-4 ${
            entry.current
              ? "bg-teal border-teal-light"
              : "bg-white border-sand-dark"
          }`}
        />
      </div>

      {/* Spacer for opposite side */}
      <div className="hidden md:block w-[calc(50%-2rem)]" />
    </div>
  );
}

export default function Timeline() {
  return (
    <div className="relative">
      {/* Vertical line - visible only on md+ */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-sand-dark -translate-x-1/2" />

      <div className="flex flex-col gap-2 md:gap-6">
        {projects.map((entry, i) => (
          <TimelineCard key={entry.year} entry={entry} index={i} />
        ))}
      </div>
    </div>
  );
}
