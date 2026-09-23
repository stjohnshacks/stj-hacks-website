import React, { useState, useMemo } from "react";
import PageHero from "@/components/PageHero";
import Reveal, { SectionLabel } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { schedule } from "@/data/site";

const categoryColors = {
  Ceremony: "bg-sju-red text-white",
  Hacking: "bg-sju-void text-white",
  Workshop: "bg-sju-n2 text-sju-void",
  Food: "bg-sju-n3 text-sju-void",
  Social: "bg-sju-red-bright text-white",
  Mentorship: "bg-sju-n2 text-sju-void",
  Judging: "bg-sju-void text-white",
  Deadline: "bg-sju-red text-white",
  Sponsor: "bg-sju-n2 text-sju-void",
  Presentation: "bg-sju-red text-white",
};

export default function Schedule() {
  const [day, setDay] = useState(schedule.days[0]);
  const [category, setCategory] = useState("ALL");

  const categories = useMemo(() => {
    const set = new Set(schedule.items.map((i) => i.category));
    return ["ALL", ...Array.from(set)];
  }, []);

  const filtered = useMemo(
    () => schedule.items.filter((i) => i.day === day && (category === "ALL" || i.category === category)),
    [day, category]
  );

  return (
    <>
      <PageHero
        index="03"
        label="Schedule"
        title={<>THE<br /><span className="text-sju-red">EXECUTION.</span></>}
        techLine="{ subject to change }"
      >
        <p className="text-lg text-sju-grey max-w-xl">
          A multi-day build. Times are provisional and updated as the event approaches.
        </p>
      </PageHero>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          {/* Day tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-sju-n3 pb-6">
            {schedule.days.map((d) => (
              <button
                key={d}
                onClick={() => setDay(d)}
                className={cn(
                  "font-mono text-sm uppercase tracking-[0.15em] font-bold px-5 py-3 border transition-colors",
                  day === d ? "bg-sju-void text-white border-sju-void" : "bg-white text-sju-void border-sju-n3 hover:border-sju-red"
                )}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={cn(
                  "font-mono text-xs uppercase tracking-[0.1em] px-3 py-2 border transition-colors",
                  category === c ? "bg-sju-red text-white border-sju-red" : "bg-white text-sju-grey border-sju-n3 hover:border-sju-red"
                )}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-[88px] sm:left-[140px] top-0 bottom-0 w-px bg-sju-n3" />
            <div className="space-y-1">
              {filtered.map((item, i) => (
                <Reveal key={i} delay={Math.min(i * 0.03, 0.3)}>
                  <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[130px_1fr] gap-4 sm:gap-8 py-5 group relative">
                    <div className="font-mono text-sm font-bold text-sju-void text-right pt-1">
                      {item.start}
                      <div className="text-sju-grey text-xs font-normal">{item.end}</div>
                    </div>
                    <div className="relative pl-6 sm:pl-8">
                      <span className="absolute -left-[5px] sm:-left-[4px] top-3 w-2.5 h-2.5 bg-sju-red rounded-full group-hover:scale-150 transition-transform" />
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3 className="font-display font-bold text-xl sm:text-2xl">{item.title}</h3>
                        <span className={cn("font-mono text-[10px] uppercase tracking-wider px-2 py-1", categoryColors[item.category] || "bg-sju-n2")}>
                          {item.category}
                        </span>
                      </div>
                      {item.description && <p className="text-sju-grey text-sm mb-1">{item.description}</p>}
                      {item.location && <p className="font-mono text-xs text-sju-grey">› {item.location}</p>}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          {filtered.length === 0 && (
            <p className="text-sju-grey font-mono text-sm py-10">No items match this filter.</p>
          )}
        </div>
      </section>
    </>
  );
}