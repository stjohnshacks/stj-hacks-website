import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Scroll-triggered reveal. Respects reduced-motion via framer-motion defaults.
export default function Reveal({ children, className, delay = 0, y = 24, as = "div" }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

// Monospace section label: "01 / ABOUT" or "> next_event"
export function SectionLabel({ index, children, className, dark }) {
  return (
    <div className={cn("flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em]", dark ? "text-white/60" : "text-sju-red", className)}>
      {index && <span className={dark ? "text-white/40" : "text-sju-grey"}>{index}</span>}
      {index && <span className={cn("h-px w-8", dark ? "bg-white/30" : "bg-sju-red")} />}
      <span>{children}</span>
    </div>
  );
}

// Decorative curly braces container
export function Braces({ children, className, size = "text-7xl" }) {
  return (
    <div className={cn("relative inline-flex items-center", className)}>
      <span className={cn("font-mono font-bold leading-none select-none", size)} style={{ color: "var(--sju-red)" }}>&#123;</span>
      <div className="px-4">{children}</div>
      <span className={cn("font-mono font-bold leading-none select-none", size)} style={{ color: "var(--sju-red)" }}>&#125;</span>
    </div>
  );
}

// Blinking terminal cursor
export function Cursor({ className }) {
  return (
    <span className={cn("inline-block w-[0.6em] h-[1.05em] bg-sju-red align-middle animate-pulse", className)} aria-hidden="true" />
  );
}