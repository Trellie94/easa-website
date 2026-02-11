"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/mesela", label: "Mesela 2026" },
  { href: "/projects", label: "Past Projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading text-2xl text-forest tracking-tight">
              EASA
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-charcoal/80 hover:text-teal transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/get-involved"
              className="inline-flex items-center rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-dark transition-colors"
            >
              Get Involved
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-charcoal transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-charcoal transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-charcoal transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-cream/95 backdrop-blur-sm ${
          mobileOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-charcoal/80 hover:text-teal transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/get-involved"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-dark transition-colors"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </nav>
  );
}
