import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Past Projects — EASA",
  description:
    "Explore EASA's completed projects — ECD centres designed and built by university students across rural Limpopo and beyond.",
};

export default function PastProjectsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-sand/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Past Projects"
            subtitle="Explore the ECD centres designed and built through the EASA programme since 2009"
          />
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block"
              >
                <div className="rounded-2xl overflow-hidden bg-white border border-sand-dark hover:shadow-lg transition-shadow">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.thumbnail}
                      alt={`${project.name} project`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors" />
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-teal">
                        {project.year}
                      </span>
                      <span className="text-warm-grey-light">·</span>
                      <span className="text-xs text-warm-grey-light">
                        {project.location}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl text-charcoal group-hover:text-teal transition-colors mb-2">
                      {project.name}
                    </h3>
                    <p className="text-warm-grey text-sm leading-relaxed line-clamp-2">
                      {project.summary}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
