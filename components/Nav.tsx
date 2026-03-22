"use client";

import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Timeline", href: "#timeline" },
  { label: "Events", href: "#events" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-border-subtle">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <a href="#" className="font-bold text-lg text-text-primary">
          KS
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-text-secondary hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/Kushagra_Singh_Resume.pdf"
            target="_blank"
            className="text-sm px-4 py-1.5 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-text-secondary"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-bg-primary/95 backdrop-blur-md border-b border-border-subtle px-6 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-text-secondary hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/Kushagra_Singh_Resume.pdf"
            target="_blank"
            className="block py-2 text-accent"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
