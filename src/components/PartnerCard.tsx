interface PartnerCardProps {
  name: string;
  role: string;
  description: string;
}

export default function PartnerCard({
  name,
  role,
  description,
}: PartnerCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-sand-dark hover:shadow-md transition-shadow">
      {/* Logo placeholder */}
      <div className="w-16 h-16 rounded-xl bg-sand flex items-center justify-center mb-6">
        <span className="font-heading text-xl text-forest">
          {name.charAt(0)}
        </span>
      </div>
      <h3 className="font-heading text-xl text-charcoal mb-1">{name}</h3>
      <p className="text-teal text-sm font-medium mb-3">{role}</p>
      <p className="text-warm-grey text-sm leading-relaxed">{description}</p>
    </div>
  );
}
