import Link from "next/link";
import Hero from "@/components/Hero";
import StatCounter from "@/components/StatCounter";
import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Timeline";
import PartnerCard from "@/components/PartnerCard";

const stats = [
  { value: 16, suffix: "+", label: "Projects Completed" },
  { value: 2009, label: "Since" },
  { value: 1000, suffix: "+", label: "Children Served" },
  { value: 15, suffix: "+", label: "Years of Impact" },
];

const partners = [
  {
    name: "Education Africa",
    role: "Programme Lead",
    description:
      "The lead body responsible for programme delivery through the EASA initiative, coordinating all stakeholders and managing project execution across South Africa.",
  },
  {
    name: "University of Nottingham",
    role: "Academic Partner",
    description:
      "The academic partner providing the student pipeline — architecture students who design and build each project as part of their professional development.",
  },
  {
    name: "Thusanang Trust",
    role: "On-the-Ground Partner",
    description:
      "The on-the-ground client responsible for identifying ECD centres in need, managing site selection, and ensuring community engagement throughout each project.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Building Futures in Rural South Africa"
        subtitle="The EASA programme designs and builds Early Childhood Development centres with university students — one community at a time."
        primaryCta={{ label: "Support the 2026 Project", href: "/get-involved" }}
        secondaryCta={{ label: "Learn More", href: "#story" }}
        bgImage="/images/hero-home.gif"
      />

      {/* Impact Stats */}
      <StatCounter stats={stats} />

      {/* The Story */}
      <section id="story" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <SectionHeading
                title="The Story"
                subtitle="How EASA is transforming communities and education"
                align="left"
              />
              <div className="space-y-6 text-warm-grey leading-relaxed">
                <p>
                  Rural Limpopo faces a critical shortage of Early Childhood
                  Development infrastructure. Many communities lack the safe,
                  stimulating learning environments that young children need
                  during their most formative years. Existing centres are often
                  overcrowded, under-resourced, and structurally inadequate.
                </p>
                <p>
                  The Education Africa Social Architecture programme brings
                  together a unique coalition — Education Africa, the University
                  of Nottingham, and the Thusanang Trust — to address this
                  crisis through a design-build model. Each year, architecture
                  students design and physically construct a new ECD centre,
                  guided by professional mentors and working alongside local
                  craftspeople.
                </p>
                <p>
                  The impact is dual: rural communities gain purpose-built
                  facilities where children can learn and thrive, while
                  university students gain irreplaceable real-world experience —
                  bridging the gap between academic theory and professional
                  practice in the most meaningful way possible.
                </p>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-terracotta/25 via-sand to-forest/15 flex items-center justify-center">
              <span className="text-warm-grey-light text-sm">
                Project photograph
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Programme History Timeline */}
      <section className="py-20 sm:py-28 bg-sand/50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <SectionHeading
            title="Our Journey"
            subtitle="16 projects across 15+ years of impact in rural South Africa"
          />
          <Timeline />
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Our Partners"
            subtitle="A coalition of organisations committed to building a better future"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <PartnerCard key={partner.name} {...partner} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-20 sm:py-28 bg-sand/50">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-charcoal mb-6">
            Join Us in Building Mesela
          </h2>
          <p className="text-warm-grey text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            The 2026 Mesela project needs your support. Whether you&apos;re a
            donor, a university partner, or a corporate sponsor — there&apos;s a
            way for you to make a lasting impact.
          </p>
          <Link
            href="/get-involved"
            className="inline-flex items-center justify-center rounded-full bg-teal px-10 py-4 text-lg font-semibold text-white hover:bg-teal-dark transition-colors"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </>
  );
}
