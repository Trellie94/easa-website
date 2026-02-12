import Image from "next/image";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import AccordionSection from "@/components/AccordionSection";
import BudgetTable from "@/components/BudgetTable";
import FundraisingChart from "@/components/FundraisingChart";
import Link from "next/link";

export const metadata = {
  title: "Masela 2026 — EASA",
  description:
    "The 2026 EASA project in Masela — building a new Early Childhood Development centre for the community.",
};

const maselaDetails = [
  {
    title: "Community Context & Demographics",
    content:
      "Masela is a rural community in Limpopo province, South Africa. Like many communities in the region, it faces significant challenges in providing adequate early childhood education infrastructure. Full demographic details and community profile will be updated as the project progresses.",
  },
  {
    title: "Current State of the ECD Centre",
    content:
      "The existing ECD centre in Masela requires significant improvement to provide a safe and stimulating environment for young learners. A detailed assessment of the current facility, including structural condition, available resources, and capacity constraints, will be published here ahead of the build phase.",
  },
  {
    title: "Needs Assessment",
    content:
      "A comprehensive needs assessment is being conducted in partnership with the Thusanang Trust and the local community. This will identify the specific requirements for the new centre, including classroom capacity, outdoor play areas, sanitation facilities, kitchen and feeding programme space, and administrative areas.",
  },
  {
    title: "Number of Children & Beneficiaries",
    content:
      "The Masela ECD centre will serve children from the local community and surrounding areas. Final beneficiary numbers will be confirmed following the needs assessment. Previous EASA projects have typically served between 60 and 150 children, with broader community benefits extending to families and local employment.",
  },
  {
    title: "Expected Impact",
    content:
      "The new Masela centre is expected to provide a safe, purpose-built learning environment for young children, improve educational outcomes in the early years, create local employment during construction and ongoing operation, and serve as a model for community-centred ECD infrastructure in the region.",
  },
];

export default function MaselaPage() {
  return (
    <>
      <Hero
        title="Masela 2026"
        subtitle="The current EASA project — designing and building a new Early Childhood Development centre for the Masela community in Limpopo."
        primaryCta={{ label: "Support This Project", href: "/get-involved" }}
        bgImage="/images/IMG_7390.JPG"
      />

      {/* About Masela */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        {/* Semi-transparent sketch background */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/melesasketch.png"
            alt=""
            fill
            className="opacity-[0.25] object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
          <SectionHeading
            title="About the Project"
            subtitle="Key details about the Masela 2026 build"
          />
          <AccordionSection items={maselaDetails} />
        </div>
      </section>

      {/* Location */}
      <section className="py-20 sm:py-28 bg-sand/50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading
            title="Location"
            subtitle="Malesa Primary School, Limpopo, South Africa"
          />
          <div className="rounded-2xl overflow-hidden border border-sand-dark shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.8!2d29.7634699!3d-23.9017955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec6c9b83b15bfb1%3A0xd6240b8b790b517c!2sMalesa%20Primary%20School!5e0!3m2!1sen!2suk!4v1707700000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Malesa Primary School location"
            />
          </div>
        </div>
      </section>

      {/* Project Budget */}
      <section className="py-20 sm:py-28 bg-sand/50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading
            title="Project Budget"
            subtitle="A transparent breakdown of how funds are allocated"
          />
          <BudgetTable />
        </div>
      </section>

      {/* Fundraising Breakdown */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <SectionHeading
            title="Fundraising Breakdown"
            subtitle="How the project is funded — five key sources working together"
          />
          <FundraisingChart />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-teal text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-6">
            Help Us Build Masela
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Every contribution — large or small — brings us closer to completing
            the Masela ECD centre and giving children a brighter start.
          </p>
          <Link
            href="/get-involved"
            className="inline-flex items-center justify-center rounded-full bg-white text-teal px-10 py-4 text-lg font-semibold hover:bg-cream transition-colors"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </>
  );
}
