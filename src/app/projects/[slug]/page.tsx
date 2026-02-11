import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = projects.find((p) => p.slug === slug);
    if (!project) return { title: "Project Not Found — EASA" };
    return {
      title: `${project.name} (${project.year}) — EASA`,
      description: project.summary,
    };
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${project.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />

        <div className="relative z-10 mx-auto max-w-4xl w-full px-6 pb-16 pt-32">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            All Projects
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-white/60 text-sm font-medium uppercase tracking-wider">
              {project.year}
            </span>
            <span className="text-white/30">|</span>
            <span className="text-white/60 text-sm">{project.location}</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white">
            {project.name}
          </h1>
          {project.details && (
            <p className="text-white/70 text-lg mt-3">{project.details}</p>
          )}
        </div>
      </section>

      {/* Description */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-6 text-warm-grey text-lg leading-relaxed">
            {project.description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          {project.credits && (
            <p className="mt-8 text-warm-grey-light text-sm italic">
              {project.credits}
            </p>
          )}
        </div>
      </section>

      {/* Image Gallery */}
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.images.map((img, i) => (
              <div
                key={i}
                className={`relative rounded-xl overflow-hidden ${
                  i === 0 ? "sm:col-span-2 sm:row-span-2 aspect-[4/3]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={img}
                  alt={`${project.name} — image ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes={
                    i === 0
                      ? "(max-width: 640px) 100vw, 66vw"
                      : "(max-width: 640px) 100vw, 33vw"
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation between projects */}
      <section className="border-t border-sand-dark">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="py-12 pr-8 group"
              >
                <span className="text-warm-grey-light text-xs uppercase tracking-wider">
                  Previous Project
                </span>
                <p className="font-heading text-xl text-charcoal group-hover:text-teal transition-colors mt-1">
                  {prevProject.name}{" "}
                  <span className="text-warm-grey-light font-sans text-sm">
                    ({prevProject.year})
                  </span>
                </p>
              </Link>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="py-12 pl-8 text-right border-l border-sand-dark group"
              >
                <span className="text-warm-grey-light text-xs uppercase tracking-wider">
                  Next Project
                </span>
                <p className="font-heading text-xl text-charcoal group-hover:text-teal transition-colors mt-1">
                  {nextProject.name}{" "}
                  <span className="text-warm-grey-light font-sans text-sm">
                    ({nextProject.year})
                  </span>
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
