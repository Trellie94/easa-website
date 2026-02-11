import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  bgColor?: string;
}

export default function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  bgColor = "bg-terracotta/20",
}: HeroProps) {
  return (
    <section
      className={`relative min-h-[85vh] flex items-center justify-center ${bgColor}`}
    >
      {/* Warm placeholder background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-terracotta/30 via-sand to-forest/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center py-32">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal leading-tight mb-6 animate-fade-in-up">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-warm-grey max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in">
          {subtitle}
        </p>
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-teal px-8 py-3.5 text-base font-semibold text-white hover:bg-teal-dark transition-colors"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border-2 border-charcoal/20 px-8 py-3.5 text-base font-semibold text-charcoal hover:border-teal hover:text-teal transition-colors"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
