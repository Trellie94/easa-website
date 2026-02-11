import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Get Involved — EASA",
  description:
    "Support the EASA programme — donate, partner as a university, or sponsor as a corporate. Every contribution makes a difference.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <Hero
        title="Get Involved"
        subtitle="There are many ways to support the EASA programme — whether you're an individual donor, a university, or a corporate partner."
        bgColor="bg-terracotta/10"
      />

      {/* For Donors */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                title="For Donors"
                subtitle="Your donation directly funds the construction of ECD centres"
                align="left"
              />
              <div className="space-y-6 text-warm-grey leading-relaxed">
                <p>
                  Every donation to the EASA programme goes directly towards
                  building safe, stimulating Early Childhood Development centres
                  for communities in rural Limpopo. From building materials and
                  skilled labour to solar panels and school equipment — your
                  contribution makes a tangible, lasting difference.
                </p>
                <p>
                  Previous projects have been funded through a combination of
                  individual donations, student fundraising, and corporate
                  support. No matter the size, your gift helps us reach our goal
                  and gives children a space where they can learn, play, and
                  thrive.
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-teal px-8 py-3.5 text-base font-semibold text-white hover:bg-teal-dark transition-colors"
                >
                  Donate Now
                </a>
                <p className="text-warm-grey-light text-xs mt-3">
                  Donation link coming soon — JustGiving page will be linked
                  here.
                </p>
              </div>
            </div>

            <div className="rounded-2xl aspect-[4/3] bg-gradient-to-br from-teal/15 via-sand to-forest/10 flex items-center justify-center">
              <span className="text-warm-grey-light text-sm">
                Community impact photograph
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* For Universities */}
      <section className="py-20 sm:py-28 bg-sand/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 rounded-2xl aspect-[4/3] bg-gradient-to-br from-forest/15 via-sand to-teal/10 flex items-center justify-center">
              <span className="text-warm-grey-light text-sm">
                Students on site
              </span>
            </div>

            <div className="order-1 lg:order-2">
              <SectionHeading
                title="For Universities"
                subtitle="A white-label opportunity for architecture schools worldwide"
                align="left"
              />
              <div className="space-y-6 text-warm-grey leading-relaxed">
                <p>
                  The EASA programme model is designed to be scalable. We are
                  actively seeking university partners who want to offer their
                  architecture students the same transformative design-build
                  experience that the University of Nottingham has pioneered.
                </p>
                <p>
                  Partnering with EASA gives your students hands-on construction
                  experience, cross-cultural learning, and the chance to make a
                  real impact — all within a well-established, professionally
                  managed programme framework.
                </p>
                <p>
                  Interested in exploring a partnership? Get in touch below and
                  we&apos;ll share our partnership prospectus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Corporates */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                title="For Corporate Partners"
                subtitle="Sponsorship opportunities with measurable social impact"
                align="left"
              />
              <div className="space-y-6 text-warm-grey leading-relaxed">
                <p>
                  Firms like Grimshaw Architects have already contributed to the
                  EASA programme — providing both financial support and
                  professional mentorship to students during the build phase.
                  Corporate partnerships are a key pillar of our funding model.
                </p>
                <p>
                  As a corporate partner, you gain visibility across the
                  programme, the opportunity to engage your team in meaningful
                  CSR activity, and the knowledge that your firm is directly
                  contributing to better futures for children in rural South
                  Africa.
                </p>
                <p>
                  We offer tiered sponsorship packages and are happy to discuss
                  bespoke arrangements. Reach out below to start the
                  conversation.
                </p>
              </div>
            </div>

            <div className="rounded-2xl aspect-[4/3] bg-gradient-to-br from-terracotta/20 via-sand to-terracotta/10 flex items-center justify-center">
              <span className="text-warm-grey-light text-sm">
                Corporate partnership photograph
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 sm:py-28 bg-sand/50">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <SectionHeading
            title="Get in Touch"
            subtitle="Whether you want to donate, partner, or just learn more — we'd love to hear from you."
          />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
