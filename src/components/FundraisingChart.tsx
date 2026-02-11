"use client";

import { useEffect, useRef, useState } from "react";

interface FundingSource {
  label: string;
  percentage: number;
  color: string;
}

const sources: FundingSource[] = [
  { label: "Student Fundraising Efforts", percentage: 25, color: "#3A7D7B" },
  { label: "JustGiving Pages", percentage: 20, color: "#C4653A" },
  {
    label: "Corporate Contributors (e.g. Grimshaw Architects)",
    percentage: 20,
    color: "#2D5016",
  },
  { label: "Education Africa", percentage: 20, color: "#6B6560" },
  {
    label: "Local Businesses in Limpopo — in-kind materials & labour",
    percentage: 15,
    color: "#E8DFD0",
  },
];

export default function FundraisingChart() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Build the conic gradient for the donut chart
  let accumulated = 0;
  const stops = sources.map((s) => {
    const start = accumulated;
    accumulated += s.percentage;
    return `${s.color} ${start}% ${accumulated}%`;
  });
  const gradient = `conic-gradient(${stops.join(", ")})`;

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Donut chart */}
      <div className="flex justify-center">
        <div
          className={`relative w-64 h-64 rounded-full transition-opacity duration-700 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ background: gradient }}
        >
          {/* Inner circle to create donut effect */}
          <div className="absolute inset-12 rounded-full bg-cream flex items-center justify-center">
            <span className="font-heading text-2xl text-charcoal">100%</span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-4">
        {sources.map((s) => (
          <div key={s.label} className="flex items-start gap-3">
            <div
              className="w-4 h-4 rounded-sm flex-shrink-0 mt-0.5"
              style={{ backgroundColor: s.color }}
            />
            <div>
              <span className="text-sm text-charcoal font-medium">
                {s.percentage}%
              </span>
              <span className="text-sm text-warm-grey ml-2">{s.label}</span>
            </div>
          </div>
        ))}
        <p className="text-xs text-warm-grey-light italic mt-4">
          Proportions are indicative — final figures TBC
        </p>
      </div>
    </div>
  );
}
