"use client";

import { Phone, Menu, X } from "lucide-react";
import { Wordmark } from "./Wordmark";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#care", label: "Our care" },
  { href: "#life", label: "Life with us" },
  { href: "#inspection", label: "Inspection" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 h-[84px] flex items-center border-b transition-all duration-300 ${
        scrolled
          ? "bg-white/60 backdrop-blur-xl backdrop-saturate-150 border-white/30 shadow-sm"
          : "bg-white border-ink-100"
      }`}
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 flex items-center gap-8">
        <a href="#top" aria-label="Llandaff House — home" onClick={(e) => handleNavClick(e, "#top")}>
          <Wordmark />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 ml-auto" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-sans text-[17px] font-medium text-ink-900 !no-underline py-1.5 px-0.5 border-b-2 border-transparent transition-colors duration-150 hover:text-teal-600 hover:border-teal-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:01554821689"
          className={`hidden md:inline-flex items-center gap-2 font-sans font-semibold text-[17px] text-teal-700 no-underline px-3.5 py-2 rounded-full transition-colors duration-300 ${
            scrolled ? "bg-teal-50/80" : "bg-teal-50"
          } hover:bg-teal-100`}
        >
          <Phone className="w-4 h-4" strokeWidth={2} />
          01554 821689
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-auto p-2 text-ink-900"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="w-6 h-6" strokeWidth={1.75} /> : <Menu className="w-6 h-6" strokeWidth={1.75} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-[84px] left-0 right-0 bg-white/90 backdrop-blur-xl border-b border-ink-100 shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-sans text-[17px] font-medium text-ink-900 no-underline py-3 px-2 rounded-[8px] transition-colors duration-150 hover:bg-teal-50 hover:text-teal-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:01554821689"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-2 font-sans font-semibold text-[17px] text-teal-700 no-underline px-3.5 py-3 mt-2 rounded-full bg-teal-50 hover:bg-teal-100 justify-center"
            >
              <Phone className="w-4 h-4" strokeWidth={2} />
              01554 821689
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
