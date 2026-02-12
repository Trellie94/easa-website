import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl mb-4">EASA</h3>
            <p className="text-cream/70 text-sm leading-relaxed max-w-xs">
              Education Africa Social Architecture — building Early Childhood
              Development centres in rural Limpopo, South Africa, with
              university architecture students.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-cream/50">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About the Programme" },
                { href: "/masela", label: "Masela 2026" },
                { href: "/get-involved", label: "Get Involved" },
                { href: "/projects", label: "Past Projects" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-cream text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-cream/50">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>
                <a
                  href="mailto:info@educationafrica.org"
                  className="hover:text-cream transition-colors"
                >
                  info@educationafrica.org
                </a>
              </li>
              <li>Education Africa</li>
              <li>South Africa &amp; United Kingdom</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream/40 text-xs">
            &copy; {new Date().getFullYear()} Education Africa Social
            Architecture. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-cream/30 text-xs">Facebook</span>
            <span className="text-cream/30 text-xs">Instagram</span>
            <span className="text-cream/30 text-xs">LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
