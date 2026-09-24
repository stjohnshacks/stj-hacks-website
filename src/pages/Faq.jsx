import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import Reveal, { SectionLabel } from "@/components/Reveal";
import { faq } from "@/data/site";
import { cn } from "@/lib/utils";

function Accordion({ q, a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-sju-n3">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="flex gap-4 items-start">
          <span className="font-mono text-xs text-sju-red pt-1.5">{String(index + 1).padStart(2, "0")}</span>
          <span className="font-display font-bold text-lg sm:text-xl group-hover:text-sju-red transition-colors">{q}</span>
        </span>
        <ChevronDown className={cn("w-5 h-5 shrink-0 mt-1 transition-transform duration-300", open && "rotate-180 text-sju-red")} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pl-10 pr-4 text-sju-grey leading-relaxed max-w-2xl">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  return (
    <>
      <PageHero
        index="08"
        label="FAQ"
        title={<>QUESTIONS?<br /><span className="text-sju-red">WE'VE GOT YOU.</span></>}
        techLine="{ ask anything }"
      >
        <p className="text-lg text-sju-grey max-w-xl">
          Everything you need to know to participate. Policies may update between years.
        </p>
      </PageHero>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-10">
          {faq.map((group, gi) => (
            <div key={group.category} className="mb-16 last:mb-0">
              <Reveal>
                <SectionLabel index={`0${gi + 1}`} className="mb-6">{group.category}</SectionLabel>
              </Reveal>
              <div className="border-t border-sju-n3">
                {group.questions.map((item, i) => (
                  <Reveal key={i} delay={i * 0.04}>
                    <Accordion q={item.q} a={item.a} index={i} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}

          <Reveal>
            <div className="mt-12 p-8 bg-sju-void text-white relative overflow-hidden">
              <div className="absolute inset-0 grid-bg-dark opacity-30" />
              <div className="relative">
                <h3 className="display-text text-3xl sm:text-4xl mb-3">STILL HAVE QUESTIONS?</h3>
                <p className="text-white/60 mb-4">Reach out — we're happy to help.</p>
                <a href="mailto:team@stjohnshacks.com" className="font-mono text-sm uppercase tracking-[0.15em] text-sju-red hover:underline">team@stjohnshacks.com →</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}