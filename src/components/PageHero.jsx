import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionLabel } from "@/components/Reveal";

// Reusable hero for inner pages.
// theme: "light" (white bg, black text) | "dark" (black bg, white text)
export default function PageHero({ label, index, title, techLine, children, theme = "light", className }) {
  const dark = theme === "dark";
  return (
    <section className={cn("relative pt-28 sm:pt-32 pb-16 lg:pb-24 overflow-hidden", dark ? "bg-sju-void text-white" : "bg-white text-sju-void", className)}>
      <div className={cn("absolute inset-0", dark ? "grid-bg-dark opacity-50" : "grid-bg opacity-60")} />
      {/* red thread top line */}
      <div className="absolute top-16 left-0 right-0 h-px bg-sju-red/40" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        {label && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel index={index} dark={dark} className="mb-8">{label}</SectionLabel>
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="display-text text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
        >
          {title}
        </motion.h1>
        {techLine && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn("mt-6 font-mono text-sm sm:text-base", dark ? "text-sju-red" : "text-sju-red")}
          >
            {techLine}
          </motion.div>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}