"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

// Updated nav: only Events now points to the new page
const nav = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#events", label: "Events" }, 
  { href: "#team", label: "Team" },
  { href: "#gallery", label: "Gallery" },
  { href: "#join", label: "Join Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition bg-background/70 backdrop-blur ${
        scrolled ? "border-b border-border" : ""
      }`}
    >
      <div className="container flex items-center justify-between py-3">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 font-extrabold tracking-tight text-xl"
        >
          <span
            className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent neon-border"
            aria-hidden
          >
            <span className="h-2 w-2 rounded-full bg-white"></span>
          </span>
          <span className="text-gradient">Nextgen Innovation</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {n.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="#join"
            className="ml-2 inline-flex items-center rounded-md bg-accent px-3 py-2 text-sm font-semibold text-accent-foreground shadow hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Join Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle navigation"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-3 flex flex-col gap-3">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-foreground/90"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </a>
            ))}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a
                href="#join"
                className="inline-flex items-center rounded-md bg-accent px-3 py-2 text-sm font-semibold text-accent-foreground shadow hover:opacity-90"
              >
                Join Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}