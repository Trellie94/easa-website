import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import StepByStep from "@/components/StepByStep";

export const metadata = {
  title: "About the Programme — EASA",
  description:
    "Learn how the EASA programme works — from identifying communities in need to designing and building ECD centres with university students.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About the Programme"
        subtitle="A unique coalition designing and building Early Childhood Development centres — transforming communities and educating future architects."
        bgColor="bg-forest/10"
      />

      {/* How It Works */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="How It Works"
            subtitle="From identification to handover — the EASA programme cycle"
          />
          <StepByStep />
        </div>
      </section>

      {/* The Organisations */}
      <section className="py-20 sm:py-28 bg-sand/50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading
            title="The Organisations"
            subtitle="Three partners, one shared mission"
          />
          <div className="space-y-12">
            {/* Education Africa */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-sand-dark">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-heading text-lg text-teal">EA</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl text-charcoal">
                    Education Africa / EASA
                  </h3>
                  <p className="text-teal text-sm font-medium">
                    Programme Lead &amp; Delivery
                  </p>
                </div>
              </div>
              <p className="text-warm-grey leading-relaxed">
                Education Africa is the lead body that drives the EASA programme. They
                coordinate all aspects of project delivery — from fundraising and
                logistics to student coordination and community engagement. EASA
                (Education Africa Social Architecture) is their flagship
                design-build initiative, bringing together academia and practice
                to create real impact in underserved communities.
              </p>
            </div>

            {/* University of Nottingham */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-sand-dark">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-heading text-lg text-forest">UoN</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl text-charcoal">
                    University of Nottingham
                  </h3>
                  <p className="text-teal text-sm font-medium">
                    Academic Partner
                  </p>
                </div>
              </div>
              <p className="text-warm-grey leading-relaxed">
                The University of Nottingham provides the student pipeline for EASA.
                Architecture students participate in the programme as part of their
                academic development, gaining hands-on experience in design, construction,
                and community-centred practice. Pete, a trustee who bridges Education Africa
                and the university, plays a key role in maintaining this vital partnership.
              </p>
            </div>

            {/* Thusanang Trust */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-sand-dark">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-heading text-lg text-terracotta">
                    TT
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-xl text-charcoal">
                    Thusanang Trust
                  </h3>
                  <p className="text-teal text-sm font-medium">
                    On-the-Ground Client
                  </p>
                </div>
              </div>
              <p className="text-warm-grey leading-relaxed">
                The Thusanang Trust serves as the on-the-ground client and is responsible
                for identifying ECD centres in need across rural Limpopo. Peter, who runs
                the Trust, manages site selection and community relationships — ensuring
                each project responds directly to local needs and has deep community
                buy-in from the outset.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading title="Why It Matters" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* ECD Crisis */}
            <div>
              <div className="rounded-2xl aspect-[3/2] bg-gradient-to-br from-terracotta/20 via-sand to-terracotta/10 flex items-center justify-center mb-8">
                <span className="text-warm-grey-light text-sm">
                  Community photograph
                </span>
              </div>
              <h3 className="font-heading text-2xl text-charcoal mb-4">
                The ECD Infrastructure Crisis
              </h3>
              <p className="text-warm-grey leading-relaxed">
                South Africa&apos;s rural communities face a severe shortage of
                adequate Early Childhood Development facilities. Many existing
                centres operate in unsafe, overcrowded conditions with no access
                to clean water, electricity, or proper sanitation. Children in
                these areas are denied the stimulating learning environments that
                are critical during their most formative years — perpetuating
                cycles of inequality and limiting their potential before formal
                education even begins.
              </p>
            </div>

            {/* Academia-Practice Gap */}
            <div>
              <div className="rounded-2xl aspect-[3/2] bg-gradient-to-br from-forest/15 via-sand to-teal/10 flex items-center justify-center mb-8">
                <span className="text-warm-grey-light text-sm">
                  Students building
                </span>
              </div>
              <h3 className="font-heading text-2xl text-charcoal mb-4">
                Bridging the Academia-Practice Gap
              </h3>
              <p className="text-warm-grey leading-relaxed">
                Architecture education traditionally separates design theory from
                construction practice. Students graduate with strong conceptual
                skills but limited understanding of how buildings actually come
                together. The EASA programme directly addresses this gap by
                giving students the opportunity to design, manage, and physically
                build a real project — developing professional competence,
                cultural awareness, and a deep sense of social responsibility
                that no studio project can replicate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Long-Term Vision */}
      <section className="py-20 sm:py-28 bg-forest text-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-6">
            Long-Term Vision
          </h2>
          <p className="text-cream/70 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            EASA is not just a programme — it&apos;s a platform for systemic
            change in how the built environment profession engages with social
            impact.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
            <div className="bg-white/5 rounded-2xl p-8 border border-cream/10">
              <span className="block font-heading text-3xl text-teal-light mb-3">
                6
              </span>
              <h3 className="font-heading text-xl mb-2">Projects Per Year</h3>
              <p className="text-cream/60 text-sm leading-relaxed">
                Scaling from one annual project to six — dramatically increasing the
                programme&apos;s reach and the number of communities served.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 border border-cream/10">
              <span className="block font-heading text-3xl text-teal-light mb-3">
                Global
              </span>
              <h3 className="font-heading text-xl mb-2">
                White-Label Model
              </h3>
              <p className="text-cream/60 text-sm leading-relaxed">
                Packaging the EASA methodology for adoption by other universities
                worldwide — enabling any architecture school to run a similar programme.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 border border-cream/10">
              <span className="block font-heading text-3xl text-teal-light mb-3">
                Sustainable
              </span>
              <h3 className="font-heading text-xl mb-2">Platform Model</h3>
              <p className="text-cream/60 text-sm leading-relaxed">
                Transforming EASA into a self-sustaining platform for social impact —
                where fundraising, delivery, and knowledge sharing are systematised.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
