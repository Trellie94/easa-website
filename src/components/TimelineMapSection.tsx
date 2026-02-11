"use client";

import dynamic from "next/dynamic";
import Timeline from "@/components/Timeline";

const ProjectMap = dynamic(() => import("@/components/ProjectMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full rounded-xl bg-sand animate-pulse flex items-center justify-center">
      <span className="text-warm-grey text-sm">Loading map...</span>
    </div>
  ),
});

export default function TimelineMapSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      {/* Left — scrollable timeline */}
      <div className="overflow-y-auto pr-2 custom-scrollbar">
        <Timeline compact />
      </div>

      {/* Right — sticky map */}
      <div className="hidden lg:flex flex-col min-h-0">
        <ProjectMap />
      </div>
    </div>
  );
}
