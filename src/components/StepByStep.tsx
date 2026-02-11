"use client";

import { useEffect, useRef, useState } from "react";

interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Identify",
    description:
      "The Thusanang Trust identifies an ECD centre in need in rural Limpopo, assessing the community and existing infrastructure.",
    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  },
  {
    number: 2,
    title: "Design",
    description:
      "University architecture students design the new facility, creating plans that respond to the community's specific needs and context.",
    icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42",
  },
  {
    number: 3,
    title: "Build",
    description:
      "Students travel to Limpopo and construct the project over 4 intensive weeks, gaining hands-on building experience alongside local craftspeople.",
    icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085",
  },
  {
    number: 4,
    title: "Handover",
    description:
      "The completed centre is handed over to the community, providing a safe, inspiring space for early childhood learning and development.",
    icon: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z",
  },
];

function StepCard({ step, index }: { step: Step; index: number }) {
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

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-sand-dark h-full">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center mb-6">
          <svg
            className="w-7 h-7 text-teal"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={step.icon}
            />
          </svg>
        </div>

        {/* Step number */}
        <span className="text-xs font-semibold uppercase tracking-wider text-teal mb-2 block">
          Step {step.number}
        </span>

        <h3 className="font-heading text-xl text-charcoal mb-3">
          {step.title}
        </h3>
        <p className="text-warm-grey text-sm leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export default function StepByStep() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((step, i) => (
        <StepCard key={step.number} step={step} index={i} />
      ))}
    </div>
  );
}
