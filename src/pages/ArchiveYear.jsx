import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal, { SectionLabel } from "@/components/Reveal";
import Button from "@/components/ui/stj-button";
import CountUp from "@/components/CountUp";
import { getEventByYear, currentEvent } from "@/data/site";

export default function ArchiveYear() {
  const { year } = useParams();
  const event = getEventByYear(year);

  if (!event) return <Navigate to="/past-events" replace />;

  // Group winners by track
  const tracks = event.winners.reduce((acc, w) => {
    (acc[w.track] = acc[w.track] || []).push(w);
    return acc;
  }, {});

  return (
    <>
      <PageHero
        theme="dark"
        index="05"
        label={`Archive · ${event.year}`}
        title={<>ST.<br />JOHN'S<br /><span className="text-sju-red">HACKS '{String(event.year).slice(2)}</span></>}
        techLine={event.techLine}
      >
        <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
          <span className="text-white/80">{event.dateLabel}</span>
          <span className="text-white/40">|</span>
          <span className="text-white/80">{event.venue}</span>
          <span className="text-white/40">|</span>
          <span className="text-white/80">{event.location}</span>
        </div>
      </PageHero>

      {/* RECAP */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <SectionLabel index="01" className="mb-10">Recap</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <Reveal className="lg:col-span-5">
              <h2 className="display-text text-5xl sm:text-6xl">{event.tagline}</h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
              <p className="text-lg text-sju-grey leading-relaxed">{event.recap}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BY THE NUMBERS */}
      <section className="py-24 lg:py-32 bg-sju-void text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark opacity-40" />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <SectionLabel index="02" dark className="mb-12">By the Numbers</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10">
            {event.stats.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="bg-sju-void p-8 lg:p-12 text-center">
                  <div className="display-text text-7xl sm:text-8xl lg:text-9xl text-sju-red">
                    <CountUp value={s.value} />
                  </div>
                  <div className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-white/60">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WINNING PROJECTS */}
      {event.winners.length > 0 && (
        <section className="py-24 lg:py-32 bg-white">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
            <SectionLabel index="03" className="mb-12">Winning Projects</SectionLabel>
            <div className="space-y-12">
              {Object.entries(tracks).map(([track, winners], i) => (
                <Reveal key={track} delay={i * 0.05}>
                  <div>
                    <h3 className="display-text text-3xl sm:text-4xl text-sju-red mb-6 border-l-4 border-sju-red pl-4">{track}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-sju-n3 border border-sju-n3">
                      {winners.map((w) => (
                        <div key={w.project + w.place} className="bg-white p-6 group hover:bg-sju-n1 transition-colors">
                          <div className="font-mono text-xs text-sju-red mb-2">{w.place || "★"}</div>
                          <h4 className="font-display font-bold text-2xl mb-2">{w.project}</h4>
                          {w.team && <p className="font-mono text-xs text-sju-grey mb-2">{w.team}</p>}
                          {w.tech && <p className="text-sm text-sju-grey">{w.tech}</p>}
                          {w.devpost && (
                            <a href={w.devpost} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-sju-red hover:underline">
                              Devpost <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SPONSORS */}
      {event.sponsors.length > 0 && (
        <section className="py-24 lg:py-32 bg-sju-n1 border-y border-sju-n3">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
            <SectionLabel index="04" className="mb-10">Sponsors & Supporters</SectionLabel>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-sju-red mb-8">
                Historical {event.year} sponsors / supporters
              </p>
            </Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-sju-n3 border border-sju-n3">
              {event.sponsors.map((s) => (
                <Reveal key={s.name}>
                  <div className="bg-white p-8 flex items-center justify-center text-center min-h-[120px]">
                    <span className="font-display font-bold text-lg">{s.name}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* GALLERY */}
      {event.gallery.length > 0 && (
        <section className="py-24 lg:py-32 bg-white">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
            <SectionLabel index="05" className="mb-12">Gallery</SectionLabel>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
              {event.gallery.map((img, i) => (
                <Reveal key={i} delay={(i % 4) * 0.06} className={i % 5 === 0 ? "col-span-2 row-span-2" : ""}>
                  <div className={`relative overflow-hidden bg-sju-void ${i % 5 === 0 ? "aspect-square lg:aspect-auto lg:h-full" : "aspect-[4/3]"}`}>
                    <img src={img} alt={`${event.year} gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1}>
              <p className="mt-8 font-mono text-xs uppercase tracking-[0.15em] text-sju-grey">
                Real event photography will replace these placeholders when supplied by organizers.
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="py-28 lg:py-36 bg-sju-void text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark opacity-40" />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="display-text text-5xl sm:text-7xl lg:text-8xl">
              SEE WHAT WE'RE<br /><span className="text-sju-red">BUILDING NEXT.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-12 flex justify-center">
              <Button to="/2027" variant="primary" className="text-base">Explore St. John's Hacks 2027</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}