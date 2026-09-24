import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { application } from "@/data/site";

// Centralized APPLY button. Every Apply CTA across the site uses this
// so the label + destination always come from one configuration in site.js.
//
// Behaviour (driven by `application` in src/data/site.js):
//   - status "open" + url       → opens the external form in a new tab
//   - status "open" + embedUrl  → links to /apply (embedded form)
//   - "coming_soon" / "closed"  → shows the status text and links nowhere
//
// Variants mirror stj-button: primary | dark | outline | outlineLight.

export const APPLICATION_LABELS = {
  open: "Apply",
  coming_soon: "Applications Coming Soon",
  closed: "Applications Closed",
};

const base =
  "group inline-flex items-center justify-center gap-2 font-mono uppercase tracking-[0.15em] text-xs sm:text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sju-red focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary: "bg-sju-red text-white hover:bg-sju-red-bright px-6 py-3.5",
  dark: "bg-sju-void text-white hover:bg-sju-red px-6 py-3.5 border border-sju-void",
  outline: "bg-transparent text-current border border-current px-6 py-3.5 hover:bg-sju-red hover:text-white hover:border-sju-red",
  outlineLight: "bg-transparent text-white border border-white/30 px-6 py-3.5 hover:bg-white hover:text-sju-void hover:border-white",
};

export default function ApplyButton({ variant = "primary", className, fullWidth = false, arrow = true }) {
  const { status, url, embedUrl } = application;
  const label = APPLICATION_LABELS[status] || APPLICATION_LABELS.coming_soon;
  const isOpen = status === "open";
  const cls = cn(base, variants[variant] || variants.primary, fullWidth && "w-full", className);

  const Arrow = () => <span className="inline-block transition-transform group-hover:translate-x-1">→</span>;
  const inner = (
    <>
      <span>{label}</span>
      {arrow && isOpen && <Arrow />}
    </>
  );

  // MODE 1 — external Google Form
  if (isOpen && url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  // MODE 2 — embedded Google Form on /apply
  if (isOpen && embedUrl) {
    return (
      <Link to="/apply" className={cls}>
        {inner}
      </Link>
    );
  }
  // Coming soon / closed / no destination yet — display status, link nowhere
  return (
    <span className={cn(cls, "cursor-default opacity-80 pointer-events-none select-none")}>
      {label}
    </span>
  );
}